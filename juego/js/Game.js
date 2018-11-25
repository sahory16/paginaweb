/*global Phaser */
/*global TreasureHunter */

// Initialize Phaser
var game = new Phaser.Game(544, 320, Phaser.CANVAS, 'game_div', null, false, false);

// Define our 'global' variable
game.global = {
    levels: 21, // numero de niveles es el tamaño de la matriz
    levelStatusArray: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
                       1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                       1] //se le pone 1, para que todos los niveles esten desbloqueados
};

// Add all the states
game.state.add('Boot', TreasureHunter.Boot);
game.state.add('Preloader', TreasureHunter.Preloader);
game.state.add('MainMenu', TreasureHunter.MainMenu);
game.state.add('Credits', TreasureHunter.Credits);
game.state.add('LevelSelection', TreasureHunter.LevelSelection);
game.state.add('PlayLevel', TreasureHunter.PlayLevel);
game.state.add('Finale', TreasureHunter.Finale);

// Start the Boot state
game.state.start('Boot');

