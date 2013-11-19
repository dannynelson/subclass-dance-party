// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.setPosition(top, left);
  this.step();
};

Dancer.prototype.setPosition = function(top, left){
  /* Use css top and left properties to position our <span> tag
   * where it belongs on the page. See http://api.jquery.com/css/
   */
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
  this.setPosition(this.top, 50);
};

Dancer.prototype.bounce = function() {
  this.setPosition(this.top, 50);
};


// Function.prototype.bind = function(context) {
//   var fn = this;
//   return function() {
//     fn.apply(context, arguments);
//   };
// };