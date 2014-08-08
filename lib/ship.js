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
  // background.src = 'images/ship.png';
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
    //
    // ctx.beginPath();
    //   ctx.moveTo(83,116);
    //   ctx.lineTo(83,102);
    //   ctx.bezierCurveTo(83,94,89,88,97,88);
    //   ctx.bezierCurveTo(105,88,111,94,111,102);
    //   ctx.lineTo(111,116);
    //   ctx.lineTo(106.333,111.333);
    //   ctx.lineTo(101.666,116);
    //   ctx.lineTo(97,111.333);
    //   ctx.lineTo(92.333,116);
    //   ctx.lineTo(87.666,111.333);
    //   ctx.lineTo(83,116);
    //   ctx.fill();


    // ctx.beginPath();
    //
    // ctx.arc(
    //   this.pos[0],
    //   this.pos[1],
    //   this.radius,
    //   0,
    //   2 * Math.PI,
    //   false
    // );
    //
    // ctx.fill();
  };

})(this);