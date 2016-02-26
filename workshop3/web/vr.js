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
    
    /*if(window.DeviceMotionEvent){
  window.addEventListener("devicemotion", motion, false);
}else{
  console.log("DeviceMotionEvent is not supported");
}
    
    function motion(event){
  console.log("Accelerometer: "
    + event.accelerationIncludingGravity.x + ", "
    + event.accelerationIncludingGravity.y + ", "
    + event.accelerationIncludingGravity.z
  );
}*/
})();