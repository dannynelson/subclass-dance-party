var ShakyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.oldStep = Dancer.prototype.step;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node.addClass("shaky");

  this.left = left;
  this.shakes = Math.floor(Math.random() * 20) + 10;

  this.step();
};

ShakyDancer.prototype = Object.create(Dancer.prototype);
ShakyDancer.prototype.constructor = ShakyDancer;

ShakyDancer.prototype.step = function() {
  this.oldStep();
  
  
  this.shakes = (-this.shakes)
  var styleSettings = {
    left: (this.left + this.shakes)
  };

  this.$node.css(styleSettings);

};