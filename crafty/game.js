var width = innerWidth;
var height = innerHeight;

Crafty.init(width, height);

Crafty.sprite("sprites.png", {
	PlayerSprite: [0, 128, 128, 128],
	OpponentSprite: [0, 0, 128, 128],
	BallSprite: [128, 128, 64, 64],
	UpSprite: [128,0,64,64],
	DownSprite: [128,64,64,64],
	LeftSprite: [192,0,64,64],
	RightSprite: [192,64,64,64]});

// 0 0 / 100% 100% means "start the background in the upper right-hand corner (0,0)
// and scale it to fit the whole window (100% 100%)
Crafty.background("url(arena.png) 0 0 / 100% 100%");

Crafty.c("Player", {
	distance: 24,
	init: function() {
		this.bind("move", function(direction) {
			this.y += this.distance * direction;
			if (this.y < 0) this.y = 0;
			if (this.y > height - 128) this.y = height - 128;
		});
	}
})

Crafty.e("User, Player, 2D, DOM, PlayerSprite, Multiway")
	.attr({ x: 0, y: 100, aim: 0})
	.bind("KeyDown", function(e) {
		switch(e.key) {
			case Crafty.keys['A']:
				this.trigger("move", -1);
				break;
			case Crafty.keys['Z']:
				this.trigger("move", 1);
				break;
			case Crafty.keys['SPACE']:
				Crafty("Ball").trigger('fire', this.aim);
				break;
			case Crafty.keys['K']:
				this.aim = -1;
				break;
			case Crafty.keys['M']:
				this.aim = 1;
				break;
		}
	})
	.bind("KeyUp", function(e) {
		switch(e.key) {
			case Crafty.keys['K']:
			case Crafty.keys['M']:
				this.aim = 0;
				break;
		}
	});

var State = {
	WAITING: 0,
	FOLLOWING: 1,
	AIMING: 2
}

Crafty.e("Opponent, Player, 2D, DOM, OpponentSprite, Delay")
	.attr({ x: width - 128, y: 100, aiState: State.FOLLOWING, aim: 0 })
	.bind('RandomMove', function() {
		if (Math.random() > .5) {
			this.trigger("move", -1);
		} else {
			this.trigger("move", 1);
		}
	})
	.bind('AimAndFire', function() {
		// We'll repeat the motion action 5 to 10 times
		var numRepeats = Math.floor(5 + Math.random() * 5);
		this.trigger('RandomMove');
	
		this.delay(
			function () {
				this.trigger('RandomMove');
			}, 
			250, numRepeats - 2);
	
		this.delay(
			function() {
				this.aim = Math.floor( Math.random() * 3 - 1 );
				Crafty('Ball').trigger('fire', this.aim);
				this.aiState = State.FOLLOWING;
			},
			250 * numRepeats);
	})
	.bind('EnterFrame', function() {
		var ball = Crafty('Ball');
		switch (this.aiState) {
			case State.FOLLOWING:
				if(ball.y >= this.y) {
					this.trigger("move", 1);
				} else {
					this.trigger("move", -1);
				}
				
				if (ball.owner == 'Opponent') {
					this.trigger('AimAndFire');
					this.aiState = State.AIMING;
				} else {
					this.aiState = State.WAITING;
					this.delay(function () {
						this.aiState = State.FOLLOWING;
					}, 400);
				}
			case State.WAITING:
				break;
			case State.AIMING:
				break;
		}
	});

Crafty.e("Ball, 2D, DOM, BallSprite, Collision")
	.attr({ x: width/2, y: height/2, velocity: [0,0], owner: 'User' })
	.bind('EnterFrame', function () {
			// If there's an owner, have the ball follow the owner
			if (this.owner) {
				var owner = Crafty(this.owner);
				switch(this.owner) {
						case 'User':
							this.x = owner.x + 128;
							break;
						case 'Opponent':
							this.x = owner.x - 64;
				}
				this.y = owner.y + 32;
				return;
			}

			if (this.y <= 0 || this.y >= (height - 64))
					this.velocity[1] = -this.velocity[1];

			if (this.x > width - 32) {
				Crafty("ScoreBoard").each(function() {
					this.playerScore++;
					this.text(this.playerScore + " - " + this.opponentScore);
				});
				this.owner = "Opponent";
			}
			if (this.x < 0) {
				 Crafty("ScoreBoard").each(function() {
					this.opponentScore++;
					this.text(this.playerScore + " - " + this.opponentScore);
				});
				this.owner = "User";
			}

			var millis = 1000 / Crafty.timer.FPS();
			this.x += this.velocity[0] * millis;
			this.y += this.velocity[1] * millis;
	})
	.onHit('User', function () {
		this.owner = 'User';
	})
	.onHit('Opponent', function () {
		this.owner = 'Opponent';
	})
	.bind("fire", function(aim) {
		if (this.owner == "User") {
			switch(aim) {
					case -1:
						this.velocity = [.707, -.707];
						break;
					case 0:
						this.velocity = [1, 0];
						break;
					case 1:
						this.velocity = [.707, .707];
						break;
			}
		} else if (this.owner == "Opponent") {
			switch(aim) {
					case -1:
						this.velocity = [-.707, -.707];
						break;
					case 0:
						this.velocity = [-1, 0];
						break;
					case 1:
						this.velocity = [-.707, .707];
						break;
			}
		}
	  this.owner = undefined;
	});

Crafty.e("2D, DOM, Mouse")
	.attr({x:0, y: 0, w: width, h: height, z:-1000})
	.bind("MouseDown", function(e) {
		Crafty("Ball").trigger('fire', Crafty("User").aim);
		console.log("boom");
	});

Crafty.e("ScoreBoard, DOM, 2D, Text")
	.attr({ x: width / 2 - 64, y: 10, w: 200, playerScore: 0, opponentScore: 0 })
	.text("0 - 0")
	.textFont({ family: 'PressStart2P', size:'2em'});

Crafty.e("2D, DOM, UpSprite, Mouse")
	.attr({x: 16, y: height - 128 - 32})
	.bind("MouseDown", function(e) {
		Crafty("User").trigger("move", -1); 	
		console.log("click"); 
		e.stopPropagation();
		e.preventDefault();
	});

Crafty.e("2D, DOM, DownSprite, Mouse")
	.attr({x: 16, y: height - 64 - 16})
	.bind("MouseDown", function() {Crafty("User").trigger("move", 1);});

Crafty.e("2D, DOM, LeftSprite, Mouse")
	.attr({x: width - 64 - 16, y: height - 128 - 32})
	.bind("MouseDown", function() {Crafty("User").attr({aim: -1});})
	.bind("MouseUp", function() {Crafty("User").attr({aim: 0});})

Crafty.e("2D, DOM, RightSprite, Mouse")
	.attr({x: width - 64 - 16, y: height - 64 - 16})
	.bind("MouseDown", function() {Crafty("User").attr({aim: 1});})
	.bind("MouseUp", function() {Crafty("User").attr({aim: 0});})