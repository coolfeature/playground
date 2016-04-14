var module = angular.module('services.Util',[]);
module.service('UtilService',[function(){

	var Service = { };

	Service.getBitmap = function () {
		function drawCircle(x,y,r,context) {
		    context.beginPath();
		    context.arc(x,y,r,0,Math.PI*2,true);
		    context.closePath();
		    context.fill();
		}
		function getRandomColor() {
		    // creating a random number between 0 and 255
		    var r = Math.floor(Math.random()*256);
		    var g = Math.floor(Math.random()*256);
		    var b = Math.floor(Math.random()*256);
		     
		    // going from decimal to hex
		    var hexR = r.toString(16);
		    var hexG = g.toString(16);
		    var hexB = b.toString(16);
		     
		    // making sure single character values are prepended with a "0"
		    if (hexR.length == 1) hexR = "0" + hexR;
		    if (hexG.length == 1) hexG = "0" + hexG;
		    if (hexB.length == 1) hexB = "0" + hexB;
		    
		    // creating the hex value by concatenatening the string values
		    var hexColor = "#" + hexR + hexG + hexB;
		    return hexColor.toUpperCase();
		} 
		var theCanvas=document.getElementById("myCanvas");
		var canvasContext=theCanvas.getContext("2d");
		for(var i=0; i<500; i++) {
		    canvasContext.fillStyle=getRandomColor();
		    drawCircle(Math.random()*theCanvas.width,
		               Math.random()*theCanvas.height,
		               Math.random()*40+10,
		               canvasContext);
		}
		return canvasContext.canvas.toDataURL();
	}

	return Service;

}]);
