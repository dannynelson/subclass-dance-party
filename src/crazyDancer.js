var CrazyDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("crazy");
};

CrazyDancer.prototype = Object.create(Dancer.prototype);
CrazyDancer.prototype.constructor = CrazyDancer;
CrazyDancer.prototype.step = function() {
  this.oldStep();
  this.randomStep();
};
CrazyDancer.prototype.randomStep = function() {
  this.top += (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 20);
  this.left += (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 20);
  this.setPosition(this.top, this.left);
};
