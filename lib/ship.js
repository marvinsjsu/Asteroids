(function(root) {
  var Asteroids = root.Asteroids = ( root.Asteroids || {});

  var Ship = Asteroids.Ship = function(options) {
    options.color = Ship.COLOR;
    options.radius = Ship.RADIUS;
    options.vel = [0, 0];
    Asteroids.MovingObject.call(this, options);
  };

  function Surrogate() {};
  Surrogate.prototype = Asteroids.MovingObject.prototype;
  Ship.prototype = new Surrogate();

  Ship.RADIUS = 5;
  Ship.COLOR = "#3399FF";

  Ship.prototype.relocate = function() {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };

  Ship.prototype.power = function(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  };

  Ship.prototype.fireBullet = function() {
    var options = {};
    options.pos = this.pos;
    options.vel = [this.vel[0] * 5, this.vel[1] * 5];
    options.game = this.game;
    return new Asteroids.Bullet(options);
  };

  // var background = new Image();
  // background.src = 'images/ship2.png';
  // background.onload = function() {
  //   ctx.drawImage(background, 0, 0);
  // };

  Ship.prototype.draw = function(ctx) {
    //ctx.drawImage(background, this.pos[0], this.pos[1]);


    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0],this.pos[1],10,Math.PI/7,-Math.PI/7,false);
    ctx.lineTo(this.pos[0], this.pos[1]);
    ctx.fill();

  };

})(this);