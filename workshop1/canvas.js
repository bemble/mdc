function Canvas(tag){
    this.width = tag.width;
    this.height = tag.height;
    this.ctx = tag.getContext("2d");
}

Canvas.prototype.clear = function(){
    this.ctx.clearRect(0, 0, this.width, this.height);
};