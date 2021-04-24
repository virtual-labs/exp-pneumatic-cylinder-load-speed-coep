SINGLEACTINGCYLINDER.controller = (function() {
	
	var obj = {};
	var paper = new Raphael(document.getElementById('diagram'), '100%', 620);
	
	
	//var cylModel1 = new SINGLEACTINGCYLINDER.model.cylModel();
	
	
	
	x1 = 300;
	y1 = 100;
	var onflag = 0, startbuttonflag = 0, cnt = 0, flag_Force = 0, flag_FS = 0, flag_CA = 0;
	var drawshape, buttonCircle, inletpipe, middleline, bloker1, bloker2, exhaustline, lowerspring, animatePistonCylinder, upperspring;
	var pistonCylinder,verticlePistonRod,heightForPistonRod,horizontalpistonRod,widthForPistonRod, hu,upperspringpoints,drawupperspring, airpressureblock, pipe2, exhaustlineairfolw, exhaustlineDownairfolw, exhaustlineDownEndairfolw;
	var a,b,c,d,e,v,w,x,y,z,h;	
	var x, y,xa, xb,xc,xd,xe, yb,yc,yd,ye, y_point;	
	var wghtofload, inclinationAngle, Force, speed, airpressure, FS, cylinderArea, requiredDiameter, exactD;
	
	
	
	obj.drawlowercylinder = function(op){
			
	/*var lpart1 = paper.path('M 323 275 l -8 0 l 0 -30 l 90 0 l 0 9 l -82 0 z').attr({
		opacity : op
	}); 
	var lpart2 = paper.path('M 415 245 l 119 0 l 0 75 l -90 0 l 0 -8 l 80 0 l 0 -58 l -108 0 z').attr({
		opacity : op
	}); 
    var lpart3 = paper.path('M 415 312 l 20 0 l 0 8 l -20 0 l 0 -8 ').attr({
		opacity : op
	});  
    var lpart4 = paper.path('M 405 312 l 0 8 l -90 0 l 0 -30 l 8 0 l 0 22 z').attr({
		opacity : op
	}); */
	var lpart5 = paper.path('M 410 386 l 0 -75').attr({
		opacity : op,
		"stroke-width" : 2
	}); 
	var lpart6 = paper.path('M 440 312 l 0 55 l 68 0 ').attr({
		opacity : op,
		"stroke-width" : 2
	}); 
	
	var part7 = paper.path('M 310 150 l 0 50 l 100 0 l 0 55').attr({
		opacity : op,
		"stroke-width" : 2
	}); 
	//var part8 = paper.path('M 315 150 l 0 40 l 100 0 l 0 65').attr({
	//	opacity : op
	//}); 
	
	drawshape = paper.path('M 270 295 l 0 -20 l 54 0 l 0 -21 l 150 0 l 0 57 l -150 0 l 0 -21 l -54 0 ').attr({
	"stroke-width" : 1,
	fill : "#989492",
	opacity : op
	}); 
	
	buttonCircle = paper.circle(270,282, 13).attr({
	"stroke-width" : 1,
	fill : "#989492",
	opacity : op
	});
	
	inletpipe = paper.path('M 359 312 l 0 -58').attr({
	"stroke-width" : 3,
	fill : "#FFFFFF",
	opacity : op,
	"arrow-end": "classic-wide-long"
	});
	
	middleline = paper.path('M 395 254 l 0 58').attr({
	"stroke-width" : 1,
	opacity : op
	});
	
	 bloker1 = paper.path('M 384 312 l 0 -13 l -5 0 l 10 0 ').attr({
	"stroke-width" : 3,
	opacity : op
	}); 
	
	bloker2 = paper.path('M 410 312 l 0 -13 l -5 0 l 10 0').attr({
	"stroke-width" : 3,	
	opacity : op
	}); 
	
	exhaustline = paper.path('M 410 255  l 30 58 ').attr({
	"stroke-width" : 3,
	fill : "#FFFFFF",
	opacity : op,
	"arrow-end": "classic-wide-long"
	});
	
	lowerspring = paper.path('M 474 270 l 5 30 l 5 -30 l 5 30 l 5 -30 l 5 30 l 5 -30 l 5 30 l 5 -30 l 8 30').attr({
	"stroke-width" : 2,
	opacity : op	
	});
	
	
		
	}
	
	obj.drawuppercylinder = function(op){
   
   	var line1 = paper.path('M 310 154 l -18 0').attr({
	"stroke-width" : 4,
	opacity : op
	});
	
	var line2 = paper.path('M 294 154 l 0 -87').attr({
	"stroke-width" : 4,
	opacity : op
	});
	
	var line3 = paper.path('M 294 69 l 162 0').attr({
	"stroke-width" : 4,
	opacity : op
	});
	
	var line4 = paper.path('M 454 69 l 0 87').attr({
	"stroke-width" : 4,
	opacity : op
	});
	
	var line5 = paper.path('M 454 154 l -145 0').attr({
	"stroke-width" : 4,
	opacity : op
	});
	
	
	var line6 = paper.path('M 322 70 l 0 82').attr({
	"stroke-width" : 4,
	opacity : op
	});
	
	var line7 = paper.path('M'+(x1+22)+' ' +(y1+13)+'l 150 0').attr({
	"stroke-width" : 4,
	opacity : op
	});
	
	var upperspring = paper.path('M'+(x1+25)+' '+(y1+20)+'l 12 -30 l 12 50 l 12 -50 l 12 50 l 12 -50 l 12 50 l 12 -50 l 12 50 l 12 -50 l 12 50 l 5 -25 ').attr({
	"stroke-width" : 2,
	opacity : op
	});
	
	
	//changestrokeandopacity();
	   
   }
   
 
   
	changestrokeandopacity = function(){
	
	    
		$("#btnOff").prop("disabled", true);
		$("#btnReset").prop("disabled", true);
		//$("#btnOn").prop("disabled", false);
	
	
	paper.clear();
	obj.drawlowercylinder(1);
	
	
//	console.log(h);
	//h = 90;
	x = 310;
	y = 152;
	
	if(h != undefined){
	a = paper.path('M'+x+' '+y);
	v = a.animate({path:"M"+ x +" "+ y +"l -20 0", 'stroke-width': '3', 'stroke':'#989492',
			opacity : 1},1500, function(){heightfor_b()});
	}else{
		
	paper.clear();
	obj.drawlowercylinder(0.2);
	obj.drawuppercylinder(0.2);
		
	     }
	}
	
	heightfor_b = function(){
	xb = x - 20;
	yb = y;
	b = paper.path('M'+ xb +' '+ yb);
	w = b.animate({path:"M"+ xb +" "+ yb +"l 0"+ -h,'stroke-width': '3', 'stroke':'#989492',
			opacity : 1},1500, function(){widthfor_c()});
	}
	
	widthfor_c = function(){
	xc = xb;
	yc = yb-h;
	c = paper.path('M'+ xc +' '+ yc);
	x = c.animate({path:"M"+ xc +" "+ yc +" l 164 0", 'stroke-width': '3', 'stroke':'#989492',
			opacity : 1},1500, function(){heightfor_d()});
	}
	
	heightfor_d = function(){
	xd = xc + 164;
	yd = yc;
	d = paper.path('M'+ xd +' '+yd);
    	
	y = d.animate({path:"M"+ xd +" "+ yd +" l 0 "+h, 'stroke-width': '3', 'stroke':'#989492',
			opacity : 1}, 1500, function(){widthfor_e()});
	}
	
	widthfor_e = function(){
	xe = xd;
	ye = yd + h;
	e = paper.path('M'+ xe +' '+ye);
	z = e.animate({path:"M"+ xe +" "+ ye +"l -150 0", 'stroke-width': '3', 'stroke':'#989492',
			opacity : 1}, 1500, function(){pistonheight()});
		
	}
	
	pistonheight = function(){
	
	verticlePistonRod = paper.path('M 325 '+yc);
    heightForPistonRod = verticlePistonRod.animate({path:"M 325 "+ yc +"l 0 "+h, 'stroke-width': '8', 'stroke':'#665E5B',
			opacity : 1}, 1500, function(){pistonWidth()});
	}
	
	pistonWidth = function(){
	yforpistonwidth = yc +(h/2);
	horizontalpistonRod = paper.path('M 325 '+yforpistonwidth);
	widthForPistonRod = horizontalpistonRod.animate({path:"M 325 "+ yforpistonwidth +"l 150 0", 'stroke-width': '8', 'stroke':'#665E5B',
			opacity : 1}, 1500, function(){upperspring()});
		labelHt();
		startbuttonflag++;
		
	}
	
	upperspring = function(){
	hu = h/3;
	
	upperspringpoints = paper.path('M 325 100');
	drawupperspring = upperspringpoints.animate({path:"M 325 "+ yforpistonwidth +"l 10"+ -hu +"l 10 "+(hu+hu)+"l 10 "+(-hu + -hu)+"l 10 "+(hu+hu)+"l 10 "+(-hu + -hu)+"l 10 "+(hu+hu)+"l 10 "+(-hu + -hu)+"l 10 "+(hu+hu)+"l 10 "+(-hu + -hu)+"l 10 "+(hu+hu)+"l 10 "+(-hu + -hu)+"l 10 "+(hu+hu)+"l 10 "+(-hu + -hu), 'stroke-width': '2',  opacity : 1}, 1500);
	drawupperspring.toFront();
	$("#btnOn").removeClass('btn-style');
	$("#btnOn").addClass('btn-style-correct');
    $("#btnOn").prop("disabled", false);
	
	
	
	}
	
	
	labelHt = function() {
		
		var labelht = 152 - (h/2) ;
		
		paper.path("M 270 152 l 10 0").attr({
			stroke : '#3788AC'
		});
		paper.path("M 275 152 l 0 " + -h).attr({
			stroke : '#3788AC'
		});
		paper.text(265, labelht, "d").attr({
			stroke : '#3788AC',
			'font-size' : 15
		});
		paper.path("M 270 " + (152 - h) + " l 10 0").attr({
			stroke : '#3788AC'
		});
	}
	
	obj.onclickevent = function(){
		$("#btnOn").removeClass('btn-style');
		$("#btnOn").addClass('btn-style-correct');
       $("#btnOn").prop("disabled", true);

		//exhaustlineairfolw.hide();


		//'M 270 295 l 0 -20 l 54 0 l 0 -21 l 150 0 l 0 57 l -150 0 l 0 -21 l -54 0 '
		drawshape.animate({path:"M 310 295 l 0 -20 l 54 0 l 0 -21 l 150 0 l 0 57 l -150 0 l 0 -21 l -54 0"}, 3000);

		//spaper.circle(270,282, 13).
		buttonCircle.animate({cx: 303, cy: 282}, 3000);

		//'M 355 254 l 9 0 l 0 58 l -9 0 l 0 -58')
		//M 359 312 l 0 -58
		inletpipe.animate({path:"M 410 312  l 0 -58"},3000);

		//'M 395 254 l 0 58'	
		middleline.animate({path:"M 455 254 l 0 58"}, 3000);

		//'M 375 310 l 0 -8 l -5 0 l 0 -5 l 19 0, l 0 5, l -5 0, l 0 8'
		//M 384 311 l 0 -13 l -5 0 l 10 0
		bloker1.animate({path:"M 440 312 l 0 -13 l -5 0 l 10 0"}, 3000);

		//'M 405 311 l 0 -8 l -5 0 l 0 -5 l 19 0, l 0 5, l -4 0, l 0 8')
		//M 414 311 l 0 -13 l -5 0 l 10 0
		bloker2.animate({path:"M 474 312 l 0 -13 l -5 0 l 10 0"}, 3000);
	
		//'M 406 254 l 9 0 l 29 58 l -9 0 l -29 -58')
		//M 410 255  l 30 58
		exhaustline.animate({path:"M 474 254 l 30 58"},3000);

		//'M 474 270 l 5 30 l 5 -30 l 5 30 l 5 -30 l 5 30 l 5 -30 l 5 30 l 5 -30 l 8 30')
	
		lowerspring.animate({path:"M 513 270 l 3 30 l 3 -30 l 3 30 l 0.5 -30 l 0.5 30 l 0.5 -30 l 0.5 30 l 0.5 -30"}, 3000);

		onflag++;

		setTimeout("animateairflow();",3200);

}


animateairflow = function(){
	var r = [];
	
	if(onflag == 1){
		
		r[0] = paper.path("M 410 386 ").attr({'stroke-width': 3, 'stroke': '#7fbfff'});
		r[0].animate({path:"M 410 386 l 0 -75"}, 1000, function(){
			r[1] = paper.path("M 410 311").attr({'stroke-width': 3, 'stroke': '#7fbfff', "arrow-end": "classic-wide-long"});
			pipe2 = r[1];
			pipe2.animate({path:"M 410 311 l 0 -57"}, 1000, function(){
				r[2] = paper.path("M 410 254").attr({'stroke-width': 3, 'stroke': '#7fbfff'});
				r[2].animate({path:"M 410 254 l 0 -54"}, 1000, function(){
					r[3] = paper.path("M 410 200").attr({'stroke-width': 3, 'stroke': '#7fbfff'});
					r[3].animate({path:"M 410 200 l -100 0"}, 1000, function(){
						r[4] = paper.path("M 310 199").attr({'stroke-width': 3, 'stroke': '#7fbfff'});	
						r[4].animate({path:"M 310 199 l 0 -50"}, 1000, function(){
							r[5] = paper.path("M 306 151").attr({'stroke-width': 30, 'stroke': '#7fbfff'});	
							r[5].animate({path:"M 306 151 l 0 "+ -(h-2)}, 1000);
							
						});
					});
				});
				
			});	
			
		});
				
	}
	setTimeout("animatepiston();",6200);
	
}

animatepiston = function(){
	
	y_point = 152-(h/2);
	  

	airpressureblock = paper.path("M 320 "+y_point).attr({'stroke-width': (h-3), 'stroke': '#7fbfff'});	
	airpressureblock.animate({path:"M 320 "+y_point+" l 100 0"}, 3002).toBack();
	
	heightForPistonRod.animate({path:"M 425 "+ yc +"l 0 "+h, 'stroke-width': '8', 'stroke':'#665E5B',
			opacity : 1}, 3000);
			
	widthForPistonRod.animate({path:"M 425 "+ yforpistonwidth +"l 150 0", 'stroke-width': '8', 'stroke':'#665E5B',
			opacity : 1}, 3000);
	
	drawupperspring.animate({path:"M 430 "+ yforpistonwidth +"l 5 "+ -hu +"l 5 "+(hu+hu)+"l 5 "+(-hu + -hu)+"l 5 "+(hu+hu)+"l 0.5 "+(-hu + -hu)+"l 0.5 "+(hu+hu)+"l 0.5 "+(-hu + -hu)+"l 0.5 "+(hu+hu)+"l -0.5 "+(-hu + -hu)+"l -0.5 "+(hu+hu)+"l -0.5 "+(-hu + -hu)+"l -0.5 "+(hu+hu)+"l 0.5 "+(-hu+ -hu)+"l -0.5 "+(hu+hu), 'stroke-width': '2',  opacity : 1}, 3000);
	
	setTimeout("activeOffBtn();", 3200);
	
}


activeOffBtn = function(){
	$("#btnOff").removeClass('btn-style');
	$("#btnOff").addClass('btn-style-incorrect');
$("#btnOff").prop("disabled", false);
onflag--;
}


 obj.offclickevent = function(){

		$("#btnOff").prop("disabled", true);
		pipe2.hide();
		//onflag--;

		//'M 270 295 l 0 -20 l 54 0 l 0 -21 l 150 0 l 0 57 l -150 0 l 0 -21 l -54 0 '
		drawshape.animate({path:"M 270 295 l 0 -20 l 54 0 l 0 -21 l 150 0 l 0 57 l -150 0 l 0 -21 l -54 0"}, 3000);

		//spaper.circle(270,282, 13).
		buttonCircle.animate({cx: 270, cy: 282}, 3000);

		//'M 355 254 l 9 0 l 0 58 l -9 0 l 0 -58')
		inletpipe.animate({path:"M 359 312  l 0 -58"},3000);

		//'M 395 254 l 0 58'	
		middleline.animate({path:"M 395 254 l 0 58"}, 3000);

		//'M 375 310 l 0 -8 l -5 0 l 0 -5 l 19 0, l 0 5, l -5 0, l 0 8'
		//'M 384 312 l 0 -13 l -5 0 l 10 0
		bloker1.animate({path:"M 384 312 l 0 -13 l -5 0 l 10 0"}, 3000);

		//'M 405 311 l 0 -8 l -5 0 l 0 -5 l 19 0, l 0 5, l -4 0, l 0 8')
		//M 414 311 l 0 -13 l -5 0 l 10 0
		bloker2.animate({path:"M 410 312 l 0 -13 l -5 0 l 10 0"}, 3000);

		//'M 406 254 l 9 0 l 29 58 l -9 0 l -29 -58')
		//M 410 255  l 30 58
		exhaustline.animate({path:"M 410 255 l 30 58"},3000);

		//'M 474 270 l 5 30 l 5 -30 l 5 30 l 5 -30 l 5 30 l 5 -30 l 5 30 l 5 -30 l 8 30')
	
		lowerspring.animate({path:"M 474 270 l 5 30 l 5 -30 l 5 30 l 5 -30 l 5 30 l 5 -30 l 5 30 l 5 -30 l 8 30"}, 3000);

		//onflag++;

		setTimeout("animatePistonbackToDirection();",3200);

}


animatePistonbackToDirection = function(){
	
	white_airpressureblock = paper.path("M 420 "+y_point).attr({'stroke-width': (h-3), 'stroke': '#FFFFFF'});	
	white_airpressureblock.animate({path:"M 420 "+y_point+" l -100 0"}, 3000).toFront();
	
	heightForPistonRod.animate({path:"M 325 "+ yc +"l 0 "+h, 'stroke-width': '8', 'stroke':'#665E5B',
			opacity : 1}, 3000).toFront();;
			
	widthForPistonRod.animate({path:"M 325 "+ yforpistonwidth +"l 150 0", 'stroke-width': '8', 'stroke':'#665E5B',
			opacity : 1}, 3000).toFront();;
	
	drawupperspring.animate({path:"M 325 "+ yforpistonwidth +"l 10"+ -hu +"l 10 "+(hu+hu)+"l 10 "+(-hu + -hu)+"l 10 "+(hu+hu)+"l 10 "+(-hu + -hu)+"l 10 "+(hu+hu)+"l 10 "+(-hu + -hu)+"l 10 "+(hu+hu)+"l 10 "+(-hu + -hu)+"l 10 "+(hu+hu)+"l 10 "+(-hu + -hu)+"l 10 "+(hu+hu)+"l 10 "+(-hu + -hu), 'stroke-width': '2',  opacity : 1}, 3000).toFront();;
	
	exhaustlineairfolw = paper.path('M 409 253').attr({'stroke-width': 3, 'stroke': '#7fbfff', opacity : 1, "arrow-end": "classic-wide-long"});
	exhaustlineairfolw.animate({path:'M 409 253 l 31 60'}, 1000, function(){
		exhaustlineDownairfolw = paper.path('M 440 312').attr({'stroke-width': 3, 'stroke': '#7fbfff', opacity : 1});
		exhaustlineDownairfolw.animate({path:'M 440 312 l 0 54'}, 1000,function(){
				exhaustlineDownEndairfolw = paper.path('M 439 367').attr({'stroke-width': 3, 'stroke': '#7fbfff', opacity : 1});
				exhaustlineDownEndairfolw.animate({path:'M 439 367 l 69 0'}, 1000);				
		});			
	});
	
	setTimeout("active_resetBtn();",3200);
	
}

active_resetBtn = function(){
$("#btnReset").prop("disabled", false);

}

obj.calculateForce = function(wghtofload, inclinationAngle){	
	
     if(wghtofload == "" || inclinationAngle == ""){
		alertify.alert("Please Enter Weight of Load and Angle of Inclination") ;
	}else if(wghtofload == 0){
		alertify.alert("Weight of Load should be greater than 0"); 
		
	}else{
		Force = wghtofload * inclinationAngle;  
		checkCalForceAns(Force);
		
  }
	
}

checkCalForceAns = function(Force){
	
	var calForceAns = $("#calforce").val();
	if(calForceAns == "" || isNaN(calForceAns)){
		
		alertify.alert("Please enter the answer in numeric only");
		
	}else{
		if(calForceAns == Force.toFixed(2) || calForceAns == Force.toFixed(1) || calForceAns == Force.toFixed(0)){
		flag_Force = 0;
		alertify.alert("Answer is Correct");
		$("#speed").prop("disabled", false); 	
		
	}else{
		if(flag_Force == 3){
			
			alertify.alert("Answer is Incorrect");
			alertify.alert("Correct Answer Answer" + Force.toFixed(2));
		}else{
			
			alertify.alert("Answer is Incorrect");
			flag_Force++;
		}
		
		
		
	}
	}
	
	
	
}


obj.calculateFS = function(speed){
	
       if(speed == ""){
			alertify.alert("Please Enter Value of Speed") 
			}else{
				FS = Force * speed;
				checkCalculateFS(FS);
  
			
			}
	
}
 checkCalculateFS = function(FS){
	 
	 var calFSAns = $("#calfs").val();
	if(calFSAns == "" || isNaN(calFSAns)){
		
		alertify.alert("Please enter the answer in numeric only");
		
	}else{
		if(calFSAns == FS.toFixed(2) || calFSAns == FS.toFixed(1) || calFSAns == FS.toFixed(0)){
		flag_FS = 0;
		alertify.alert("Answer is Correct");
		$("#CalculateCylinderArea").prop("disabled", false);  
		$("#airpressure").prop("disabled", false);	
		
	}else{
		if(flag_FS == 3){
			
			alertify.alert("Answer is Incorrect");
			alertify.alert("Correct Answer Answer" + FS.toFixed(2));
		}else{
			
			alertify.alert("Answer is Incorrect");
			flag_FS++;
		}
		
		
		
	}
	}
	 
	 
	 
 }



obj.calculateCylinderArea = function(airpressure){
	
	 if(airpressure == "" || isNaN(airpressure)){
			alertify.alert("Please Enter numeric value of air Pressure");
		}else if(airpressure == 0){  
			alertify.alert("Value of Air Pressure is Greater than 0");  
		}else{
			cylinderArea = FS / airpressure;
			
			checkCylinderArea(cylinderArea);
		
			
		}
	
}

checkCylinderArea = function(cylinderArea){
	
	
	
	 var calCylinderAreaAns = $("#calcylinderarea").val();
	if(calCylinderAreaAns == "" || isNaN(calCylinderAreaAns)){
		
		alertify.alert("Please enter the answer in numeric only");
		
	}else{
		if(calCylinderAreaAns == cylinderArea.toFixed(2) || calCylinderAreaAns == cylinderArea.toFixed(1) || calCylinderAreaAns == cylinderArea.toFixed(0)){
		flag_CA = 0;
		alertify.alert("Answer is Correct");
		//$("#cylinderDiameter").val(' ');
			$("#cylinderDiameter").prop("disabled", false);
			$("#submitdiameter").removeClass('btn-style');
			$("#submitdiameter").addClass('btn-style-correct');
			$("#submitdiameter").html("<span class=''>Submit</span>");
			$("#submitdiameter").prop("disabled", false);	
			$("#startSim").removeClass('btn-style');
			$("#startSim").addClass('btn-style-correct');
		
	}else{
		if(flag_CA == 3){
			
			alertify.alert("Answer is Incorrect");
			alertify.alert("Correct Answer Answer" + cylinderArea.toFixed(2));
		}else{
			
			alertify.alert("Answer is Incorrect");
			flag_CA++;
		}
		
		
		
	}
	}
	
}


obj.submitDiameter = function(){
	
	exactDiameter();
	
	var calCylinderDiameterAns = $("#cylinderDiameter").val();
	if(calCylinderDiameterAns == "" || isNaN(calCylinderDiameterAns)){
	
	alertify.alert("Please enter the answer in numeric only");
	$("#submitdiameter").removeClass('btn-style');
	$("#submitdiameter").addClass('btn-style-correct');
		$("#submitdiameter").html("<span >Submit</span>");
		$("#startSim").removeClass('btn-style');
		$("#startSim").addClass('btn-style-correct');
	
	
	}else{
		
		if(calCylinderDiameterAns == exactD){
			$("#submitdiameter").removeClass('btn-style');
			$("#submitdiameter").addClass('btn-style-correct');
        $("#submitdiameter").html("<span>Correct</span>");
				//setTimeout(onclickevent(), 2000);	
        $("#startSim").removeClass('btn-style');
		$("#startSim").addClass('btn-style-correct');
			$("#submitdiameter").prop("disabled", true);
			

		//	$("#btnOff").prop("disabled", true);
		//	$("#btnReset").prop("disabled", true);
			//$("#btnOn").prop("disabled", false);
			
			$("#load").prop("readonly", true);
			$("#angleofinclination").prop("disabled", true);
			$("#speed").prop("disabled", true);
			$("#airpressure").prop("readonly", true);
			$("#cylinderDiameter").prop("readonly", true);
			$("#CalculateCylinderArea").prop("disabled", true);
			$("#CalculateForce").prop("disabled", true);
			$("#CalculateFS").prop("disabled", true);
			$("#calforce").prop("readonly", true);
			$("#calfs").prop("readonly", true);
			$("#calcylinderarea").prop("readonly", true);
			
			
			
			
			
			
			
			
			
			
			
				$("#startSim").prop("disabled", false);
				
				$("#startSim").bind("click", function(){
					
					$("#startSim").prop("disabled", true);
					calculateheight_fromexactD(exactD);
				});
            				

	}else{
		alertify.alert("Answer is Incorrect");
		cnt++;
             if(cnt==3)
				{
					//alertify.alert("Answer is Incorrect");
					alertify.alert("The correct answer is "+ exactD);
					cnt=0;
					$("#submitdiameter").removeClass('btn-style');
					$("#submitdiameter").addClass('btn-style-correct');
					$("#submitdiameter").html("<span >Submit</span>");
					$("#submitdiameter").removeClass('btn-style');
					$("#submitdiameter").addClass('btn-style-correct');
					$("#submitdiameter").html("<span >Correct</span>");
					//$("#submitdiameter").prop("disabled", true);
					//calculateheight_fromexactD(exactD);
					$("#startSim").removeClass('btn-style');
					$("#startSim").addClass('btn-style-correct');
					
				}
             $("#submitdiameter").removeClass('btn-style');
         	$("#submitdiameter").addClass('btn-style-incorrect');
			$("#submitdiameter").html("<span>Re-Calculate</span>");
			$("#startSim").removeClass('btn-style');
			$("#startSim").addClass('btn-style-correct');
				
		}
		
	}
	
}


exactDiameter = function(){
    if(cylinderArea != 0){
		
			if(cylinderArea <= 0.07){
				exactD = 0.3125;
			}else if(cylinderArea <= 0.15){
				exactD = 0.4375;
			}else if(cylinderArea <= 0.25){
				exactD = 0.5625;
			}else if(cylinderArea <= 0.40){
				exactD =  0.75;
			}else if(cylinderArea <= 0.60){
				exactD = 0.875;
			}else if(cylinderArea <= 0.90){
				exactD = 1.0625;
			}else if(cylinderArea <= 1.2){
				exactD = 1.25;
			}else if( cylinderArea <= 1.7){
				exactD = 1.5;
			}else if(cylinderArea <= 2.4){
				exactD = 1.75;
			}else if( cylinderArea <= 3.1){
				exactD = 2;
			}else if( cylinderArea <= 5){
				exactD = 2.5;
			}else if(cylinderArea <= 7){
				exactD = 3;
			}else if( cylinderArea <= 8.3){
				exactD = 3.25;
			}else if( cylinderArea <= 12.5){
				exactD = 4;
			}else if(cylinderArea <= 28.3){
				exactD = 6;
			}else if(cylinderArea > 28.3){
				exactD = 6;
			}
	}else{
		
		alertify.alert("Cylinder Area should not be 0. please Recalculate Cylinder Area");
	}
}
	calculateheight_fromexactD = function(exactD){
		
		if(exactD == 0.3125){			
			h = 40;			
		}else if(exactD == 0.4375){
			h = 45;
		}else if(exactD == 0.5625){
			h = 50;
		}else if(exactD ==0.75){
			h = 55;
		}else if(exactD == 0.875){
			h = 60;
		}else if(exactD == 1.0625){
			h = 65;
		}else if(exactD == 1.25){
			h = 70;
		}else if(exactD == 1.5){
			h = 75;
		}else if(exactD == 1.75){
			h = 80;
		}else if(exactD == 2){
			h = 90;
		}else if(exactD == 2.5){
			h = 95;
		}else if(exactD == 3){
			h = 100;
		}else if(exactD == 3.25){
			h = 100;
		}else if(exactD == 4){
			h = 105;
		}else if(exactD == 6){
			h = 110;
		}
		
		changestrokeandopacity();

		
	}
	
	obj.resetSimulation = function(){
		//alertify.alert("in reset simulation");
		changestrokeandopacity();
		
	}
	
	
	return {
		obj : obj
	}
	
})();
	