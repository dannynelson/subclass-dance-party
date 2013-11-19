// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.left = left;
  this.setPosition(top, left);
  this.step();
};

Dancer.prototype.setPosition = function(top, left){
  this.left = left;
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.step = function(){
  var that = this;
  setTimeout(function() { that.step(); }, this.timeBetweenSteps);
};

Dancer.prototype.lineUp = function() {
  this.setPosition($("body").height() - 100, this.left);
};

Dancer.prototype.bounce = function() {
  this.setPosition(this.top, 50);
};