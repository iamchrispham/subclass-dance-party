var FightingDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="fightingDancer"></span>');
  this.setPosition(this._top, this._left);
}

FightingDancer.prototype = Object.create(Dancer.prototype);
FightingDancer.prototype.constuctor = FightingDancer;

FightingDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$node.toggle();
}