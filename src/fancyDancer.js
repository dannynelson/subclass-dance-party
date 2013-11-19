var FancyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  debugger;
  this.oldStep = Dancer.prototype.step;
  this.timeBetweenSteps = timeBetweenSteps;
  this.left = left;
  this.fancify = Math.floor(Math.random() * 20) + 10;
  this.$node.addClass("fancy");

  // this.step();

};

FancyDancer.prototype = Object.create(Dancer.prototype);
FancyDancer.prototype.constructor = FancyDancer;
FancyDancer.prototype.step = function() {
  // debugger;
  this.oldStep();
  debugger;
  // var styleSettings = {
  //   'color': 'red'
  // };
  var size = (Math.floor(Math.random() * 100) + 10) + 'px';
  this.$node.css('border', size);
  //  var styleSettings = {
  //    'border': 20
  // };
  // this.$node.css(styleSettings);
};
