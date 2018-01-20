// Enemies our player must avoid
var Enemy = function() {
  // Variables applied to each of our instances go here,
  let possibleYPositions = [60, 145, 230];
  this.x = -100;
  this.y = possibleYPositions[Math.floor(Math.random() * possibleYPositions.length)];
  this.speed = Math.floor(Math.random() * 350) + 100
  this.sprite = 'images/enemy-bug.png';

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  this.x = this.x + (this.speed * dt);

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/*
* Our player class
*/

var Player = function() {
  // Variables applied to each of our instances go here,
  this.x = 200;
  this.y = 400;
  this.won = false;
  this.sprite = 'images/char-boy.png';

};

Player.prototype.update = function(dt) {

};

// Draw the Player on the screen, required method for game
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// This function move the player according to the clicked key
Player.prototype.handleInput = function(key) {
  if (key === 'left') {
    if (this.x > 0) {
      this.x = this.x - 100;
    }
  } else if (key === 'right') {
    if (this.x < 400) {
      this.x = this.x + 100;
    }
  } else if (key === 'up') {
    if (this.y > 0) {
      this.y = this.y - 85;
    }
  } else if (key === 'down') {
    if (this.y < 400) {
      this.y = this.y + 85;
    }
  }
}

// We place all enemy objects in an array
// We place the player object in a variable called player

let allEnemies = [];
for (let i = 0; i < 3; i++) {
  allEnemies.push(new Enemy());
}

let player = new Player();

// This listens for key presses and sends the keys to
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
