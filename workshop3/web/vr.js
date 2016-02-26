function Scene() {
    this.rotationAngle = {x: 0, y:0};
}

Scene.prototype.reset = function() {
    this.rotationAngle = {x: 0, y:0};
}

Scene.prototype.rotate = function(x, y) {
    this.rotationAngle.x += x;
    this.rotationAngle.y += y;
}

window.scene = new Scene();