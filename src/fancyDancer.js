var FancyDancer = function(top, left, timeBetweenSteps) {
  this.oldStep = Dancer.prototype.step;
  this.colored = true;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass("fancy");
};

FancyDancer.prototype = Object.create(Dancer.prototype);
FancyDancer.prototype.constructor = FancyDancer;
FancyDancer.prototype.step = function() {
  this.oldStep();
  this.changeColor();
};
FancyDancer.prototype.changeColor = function() {
  debugger;
  if (this.colored) {
    this.$node.css('border-color', 'red');
    this.colored = false;
  } else {
    this.$node.css('border-color', 'yellow');
    this.colored = true;
  }
};
