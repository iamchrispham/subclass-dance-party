var BouncyDancer = function (top, left, timeBetweenSteps) {
    Dancer.call(this, top, left, timeBetweenSteps);
    this.$node = $('<h1 class="bouncyDancer"></h1>');
	this.setPosition(this._top, this._left);
}

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function () {

    // do something
    Dancer.prototype.step.call(this);
    //this.$node.toggle();
}




