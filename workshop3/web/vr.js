
(function() {	
    
    var canvases = {}, ctxes = {};
	var mountainsChains = [];
	
    ['left', 'right'].forEach(function(side) {
       canvases[side] =  document.getElementById(side);
       ctxes[side] =  canvases[side].getContext("2d");;
    });
	

	function Mountain(x, width){
		this.x = x;
		this.width = width;
	}

	function Mountains(pos, color, speed){
		this.list = [];
		this.color = color;
		this.speed = speed;
		this.pos = pos;
		this.x = 0;
	}

	function generateMountains(){
		var canvas = canvases.left;
		var size = canvas.height/2;
		
		var colors = {r:102, g:187, b:106};
		var pos = canvas.height/2;
		for(var i=0; i<4; i++)
		{
			colors.r+=10;
			colors.g+=10;
			colors.b+=10;
			var x = -width*0.5;
			size -= canvas.height/10;
			pos= canvas.height*1.0-(3-i)*size*0.1;
			
			var mountainsChain = new Mountains(pos, 'rgb('+colors.r+","+colors.g+","+colors.b+')', i+1)
			mountainsChains.push(mountainsChain);
			
			for(var j = 0; j<1000; j++)
			{
				var width = Math.random()*size*0.8+size;
				x+=(width*0.5)*Math.random()+width*0.3;
				
				var mountain = new Mountain(x, width);
				mountainsChain.list.push(mountain);
			}
		}
	}

	generateMountains();
	
	// Clears the canvas and draws a mountain silohuette.  The mountain is a light
	// purple.  Also renders the ruggedness value in black.
	 function drawMountain(ctx, x, width, pos, color) {
		ctx.beginPath();
		ctx.moveTo(x, pos);
		ctx.lineTo(x, pos-width/2);
		ctx.lineTo(x+width/2, y = pos - width);
		ctx.lineTo(x+width, pos-width/2);
		ctx.lineTo(x+width, pos);
		ctx.closePath();
		ctx.fillStyle = color;
		ctx.fill();
	};
	
	function drawMountains(ctx, position){
		var canvas = canvases.left;
		ctx.fillStyle="#FF0000";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		
		
		var grd=ctx.createLinearGradient(0,0,0,canvas.height);
		grd.addColorStop(0, 'rgba(255, 255, 255, 0)');
		grd.addColorStop(1,"rgba(255, 255, 255, 0.5)");

		ctx.fillStyle=grd;
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		
		for(var i=0; i<mountainsChains.length; i++)
		{
			var mountains = mountainsChains[i];
			for(var j = 0; j<mountains.list.length; j++)
			{
				var mountain = mountains.list[j];
				
				var posX = mountain.x+position*mountains.speed;
				
				if(posX<canvas.width && posX + mountain.width>0)
				drawMountain(ctx, posX, mountain.width, mountains.pos, mountains.color);
			}
		}
	}

	['left', 'right'].forEach(function(side) {
		var canvas = canvases[side];
		var ctx = ctxes[side];

		var width = canvas.width, height = canvas.height;
			
			
		
		
		
		
		
		
		function move(position){
			drawMountains(ctx, position*50);
		}
		
		var position=0;
		var interval = setInterval(function(){
			position-=1;
			drawMountains(ctx, position);
		}, 25);
	});
})();