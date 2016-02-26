(function() {
    window.onload = function() {
        setTimeout(function() { window.scrollTo(0, 1) }, 100);
    };
    
    var canvases = {}, ctxes = {};
    ['left', 'right'].forEach(function(side) {
       canvases[side] =  document.getElementById(side);
       ctxes[side] =  canvases[side].getContext("2d");;
    });
    
    
    ['left', 'right'].forEach(function(side) {
        var canvas = canvases[side];
        var ctx = ctxes[side];
        
        ctx.fillStyle="#FF0000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        
        var grd=ctx.createLinearGradient(0,0,0,canvas.height);
        grd.addColorStop(0, 'rgba(255, 255, 255, 0)');
        grd.addColorStop(1,"rgba(255, 255, 255, 0.5)");

        ctx.fillStyle=grd;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    });
    
    window.addEventListener("deviceorientation", orientation, false);
    
    function orientation(event){
        document.getElementById('x').innerHTML = "x: " + event.beta;
        document.getElementById('y').innerHTML = "y: " + event.gamma;
        document.getElementById('z').innerHTML = "z: " + event.alpha;
    }
})();