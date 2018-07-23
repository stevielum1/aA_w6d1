// Function.prototype.inherits = function(Parent) {
//   function Surrogate(){}
//   Surrogate.prototype = Parent.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// };

Function.prototype.inherits = function(Parent) {
  this.prototype = Object.create(Parent.prototype);
  this.prototype.constructor = this;
};



function MovingObject (name) {
  this.name = name;
}
MovingObject.prototype.move = function() {
  console.log(`${this.name} is moving!`);
};

function Ship (name) {
  this.name = name;
}
Ship.inherits(MovingObject);
Ship.prototype.fly = function() {
  console.log(`${this.name} is flying!`);
};

function Asteroid (name) {
  this.name = name;
}
Asteroid.inherits(MovingObject);
Asteroid.prototype.float = function() {
  console.log(`${this.name} is floating!`);
};
