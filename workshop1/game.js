function Game(framerate, nbBalls, tag){
	this.frameRate = framerate;
	this.frameDelay = framerate * 1000; // ms
	this.nbBalls = nbBalls;
	this.balls = [];
	
	this.canvas = new Canvas(tag);
}			


Game.prototype.start = function(){
	var self = this;				
	
	init();

	////////////
	
	function init(){
		for (var i = 0; i<self.nbBalls; i++){
			var size = Math.random();
			var radius = size*2+9;
			var x = Math.random()*(self.canvas.width-radius*2)+radius;
			var y = Math.random()*5+10;
			var vy = Math.random()*2 - 1;
			var vx = Math.random()*2-1;
			var color = Math.round(size*100);
			
			var ball = new Ball(x, y, vx, vy, radius, rgbToHex(color, color, color));
			self.balls.push(ball);
		}		
		
		var interval = setInterval(update, self.frameDelay);
	}
	
	function update(){
		for(var x = 0; x<self.nbBalls; x++){
			self.balls[x].update(self.frameRate, self.canvas);
		}
			
		self.canvas.clear();
			
		for(var x = 0; x<self.nbBalls; x++){
			self.balls[x].draw(self.canvas.ctx);
		}
	}
	
	function rgbToHex(r, g, b) {
		return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
	}
	function componentToHex(c) {
		var hex = c.toString(16);
		return hex.length == 1 ? "0" + hex : hex;
	}
};