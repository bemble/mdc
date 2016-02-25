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
		for (x = 0; x<self.nbBalls; x++){
			var radius = Math.random()*2+9;
			var x = Math.random()*(self.canvas.width-radius*2)+radius;
			var y = Math.random()*5+10;
			var vy = Math.random()*2 - 1;
			var vx = Math.random();
			
			var ball = new Ball(x, y, vx, vy, radius);
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
};