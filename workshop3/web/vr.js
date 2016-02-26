window.setSceneOrientation = function(x, y, z) {
    document.getElementById('x').innerHTML = "x: " + x;
    document.getElementById('y').innerHTML = "y: " + y;
    document.getElementById('z').innerHTML = "z: " + z;
};

(function() {
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext("2d");
    
    
    
    ctx.fillStyle="#FF0000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    
    var grd=ctx.createLinearGradient(0,0,0,canvas.height);
    grd.addColorStop(0, 'rgba(255, 255, 255, 0)');
    grd.addColorStop(1,"rgba(255, 255, 255, 0.5)");

    ctx.fillStyle=grd;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    window.addEventListener("deviceorientation", orientation, false);
    
    function orientation(event){
        window.setSceneOrientation(event.beta, event.gamma, event.alpha);
    }
})();