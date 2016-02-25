				function Game(framerate, nbBalls, tag){
					this.frameRate = framerate;
					this.frameDelay = framerate * 1000; // ms
					
					this.canvas = new Canvas(tag);
				}
				
				Game.prototype.start = function(){
						var ball = new Ball(150, 75, 0, 0);
						var self = this;
						
						var interval = setInterval(function() {
							self.canvas.clear();
							ball.update(self.frameRate, self.canvas);
							ball.draw(self.canvas.ctx);
						}, self.frameDelay);
						
						
						/*
						function initialisation(){
							for (x = 0; x<nbBalls; x++){
								Math.Random()
							}
						}*/
					};