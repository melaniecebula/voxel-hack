var createGame = require('voxel-engine');
var texturePath = require('painterly-textures')(__dirname);

var game = createGame({
    texturePath: texturePath
});
var container = document.body;
game.appendTo(container);

var createPlayer = require('voxel-player')(game);

var dude = createPlayer('dude.png');
dude.possess();
dude.yaw.position.set(0, 100, 0);




