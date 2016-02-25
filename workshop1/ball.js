function Ball(x, y, vx, vy,radius, color) {
    this.velocity = {x: vx, y: vy};
    this.position = {x: x, y: y};
	this.color = color;
    this.mass = 0.1;
    this.radius = radius;
    this.restitution = -0.9;
};

Ball.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2, true); 
	ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
};

// Thanks to that for the formulas: http://jsfiddle.net/bkanber/39jrM/
Ball.prototype.update = function(frameRate, canvas) {
    var Cd = 0.47;  // Dimensionless
    var rho = 1.22; // kg / m^3
    var A = Math.PI * this.radius * this.radius / (10000); // m^2
    var ag = 9.81;  // m / s^2

    var Fx = -0.5 * Cd * A * rho * this.velocity.x * this.velocity.x * this.velocity.x / Math.abs(this.velocity.x);
    var Fy = -0.5 * Cd * A * rho * this.velocity.y * this.velocity.y * this.velocity.y / Math.abs(this.velocity.y);
    
    Fx = (isNaN(Fx) ? 0 : Fx);
    Fy = (isNaN(Fy) ? 0 : Fy);
    
        // Calculate acceleration ( F = ma )
    var ax = Fx / this.mass;
    var ay = ag + (Fy / this.mass);
    
    this.velocity.x += ax*frameRate;
    this.velocity.y += ay*frameRate;
    
    // Integrate to get position
    this.position.x += this.velocity.x*frameRate*100;
    this.position.y += this.velocity.y*frameRate*100;
    if(this.position.y >  canvas.height - this.radius) {
        this.velocity.y *= this.restitution;
        this.position.y = canvas.height - this.radius;
    }
	
	
    if(this.position.x >  canvas.width - this.radius) {
        this.velocity.x *= this.restitution;
        this.position.x = canvas.width - this.radius;
    }else if(this.position.x < this.radius) {
        this.velocity.x *= this.restitution;
        this.position.x = this.radius;
    }
};
