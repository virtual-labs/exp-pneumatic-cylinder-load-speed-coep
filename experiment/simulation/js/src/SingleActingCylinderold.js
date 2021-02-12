// JavaScript Documentvar paper;

var democircle, drawshape, inletpipe, animatedobj, exhaustline, bloker1, bloker2, piston,lowerspring,upperspring, buttonCircle;
var middleline;
var onflag = 0;

function vlave(){	
	paper = new Raphael(document.getElementById('diagram'), '100%', 700);
	
    //x = 310;
	//y = 160;
	
	x1 = 110;
	y1 = 50;
	
	
	
	//.attr({
	//"stroke-width" : 1,
	//fill:"#87ceeb"
	//});
	//var animation;
	//var rotaterect = drawrectforanimation(310, 120);
	
	//rotaterect.node.id = 'r1';
	//drawrectanimation(310,120,rotaterect);
	
     var uppercylinder = drawuppercylinder(x1, y1);
	 var lowercylinder = drawlowercylinder(x1, y1);
	// var rect1 = drawrect1(x1, y1, 10, 67, 130, 15);
	 //var halfcircle = drawhalfcircle(x1, y1);
	 
	 piston = paper.path('M'+(x1+25)+' '+(y1-18)+'l 10 0 l 0 27 l 130 0 l 0 15 l -130 0 l 0 25 l -10 0 l 0 -68').attr({
	"stroke-width" : 1,
	fill : "#665E5B"
	}); 
	
	upperspring = paper.path('M'+(x1+34)+' '+(y1+42)+'l 12 -50 l 12 50 l 12 -50 l 12 50 l 12 -50 l 12 50 l 12 -50 l 12 50 l 12 -50 ').attr({
	"stroke-width" : 2});
	
	 drawshape = paper.path('M'+(x1-30)+' '+(y1+190)+'l 0 5 A 5, -5 95 0, 1 '+(x1-30)+','+(y1+170)+'l 0 5 l 54 0 l 0 -21 l 150 0 l 0 57 l -150 0 l 0 -21 l -54 0 ').attr({
	"stroke-width" : 0,
	fill : "#989492"
	}); 
	
	 inletpipe = paper.path('M'+(x1+55)+' '+(y1+154)+'l 9 0 l 0 58 l -9 0 l 0 -58').attr({
	"stroke-width" : 0,
	fill : "#FFFFFF"
	});
	
	middleline = paper.path('M'+(x1+95)+' '+(y1+154)+'l 0 58').attr({
	"stroke-width" : 1	});
	
	 bloker1 = paper.path('M'+(x1+75)+' '+(y1+210)+'l 0 -8 l -5 0 l 0 -5 l 19 0, l 0 5, l -5 0, l 0 8').attr({
	"stroke-width" : 1,
	fill : "#FFFFFF"
	}); 
	
	 bloker2 = paper.path('M'+(x1+105)+' '+(y1+211)+'l 0 -8 l -5 0 l 0 -5 l 19 0, l 0 5, l -4 0, l 0 8').attr({
	"stroke-width" : 1,
	fill : "#FFFFFF"
	}); 
	
	 exhaustline = paper.path('M'+(x1+106)+' '+(y1+154)+'l 9 0 l 29 58 l -9 0 l -29 -58').attr({
	"stroke-width" : 0,
	fill : "#FFFFFF"
	});
	
	lowerspring = paper.path('M'+(x1+174)+' '+(y1+170)+'l 5 30 l 5 -30 l 5 30 l 5 -30 l 5 30 l 5 -30 l 5 30 l 5 -30 l 8 30').attr({
	"stroke-width" : 2});
	
	buttonCircle = paper.circle((x1-30),(y1+182), 13).attr({
	"stroke-width" : 0,
	fill : "#989492"
	}); 
	
	
};



   var drawuppercylinder = function(x1, y1){
   
    var part1 = paper.path('M'+(x1+5)+' ' +(y1+50)+'l 0 8 l -15 0 l 0 -85 l 160 0 l 0 35 l -8 0 l 0 -27 l -144 0 l 0 69 z').attr({
	"stroke-width" : 1,
	fill : "90-#A9A9A9:5-#fff:55-#A9A9A9:95"
	});
	var part2 = paper.path('M'+(x1+142)+' '+(y1+25)+'l 8 0 l 0 33 l -20 0 l 0 -7 l 12 0 z').attr({
	"stroke-width" : 1,
	fill : "90-#A9A9A9:5-#fff:55-#A9A9A9:95"
	});
	var part3 = paper.path('M'+(x1+15)+' '+(y1+50)+'l 100 0 l 0 8 l -100 0 l 0 -8 z').attr({
	"stroke-width" : 1,
	fill : "90-#A9A9A9:5-#fff:55-#A9A9A9:95"
	});
	var part4 = paper.path('M'+(x1+5)+' '+(y1+50)+'l 0 50 l 100 0 l 0 55')
	var part5 = paper.path('M'+(x1+15)+' '+(y1+50)+'l 0 40 l 100 0 l 0 65')
   
   }
   
   var drawlowercylinder = function(x1, y1){
    
	var lpart1 = paper.path('M'+(x1+23)+' '+(y1+175)+'l -8 0 l 0 -30 l 90 0 l 0 9 l -82 0 z')
	var lpart2 = paper.path('M'+(x1+115)+' '+(y1+145)+'l 119 0 l 0 75 l -90 0 l 0 -8 l 80 0 l 0 -58 l -108 0 z')
    var lpart3 = paper.path('M'+(x1+115)+' '+(y1+212)+'l 20 0 l 0 8 l -20 0 l 0 -8 ') 
    var lpart4 = paper.path('M'+(x1+105)+' '+(y1+212)+'l 0 8 l -90 0 l 0 -30 l 8 0 l 0 22 z')
	var lpart5 = paper.path('M'+(x1+105)+' '+(y1+212)+'l 0 75 l 10 0l 0 -75')
	var lpart6 = paper.path('M'+(x1+135)+' '+(y1+212)+'l 0 55 l 60 0 l 10 -10 l -60 0 l 0 -45')
   
   }
   var drawrect1 = function(x1, y1, w ,h, w1, h1){
   
    var rect1 = paper.rect((x1+25), (y1-18), w, h).attr({
	"stroke-width" : 1,
	fill : "#665E5B"
	}); 
    var rect2 = paper.rect((x1+35), (y1+9), w1, h1).attr({
	"stroke-width" : 1,
	fill : "#665E5B"
	}); 
   
   }
   
   
  var drawhalfcircle = function(x1, y1){
	
	var drawshape = paper.path('M'+(x1-30)+' '+(y1+190)+'l 0 5 A 5, -5 95 0, 1 '+(x1-30)+','+(y1+170)+'l 0 5 l 54 0 l 0 -21 l 150 0 l 0 57 l -150 0 l 0 -21 l -54 0 ').attr({
	"stroke-width" : 0,
	fill : "#989492"
	}); 
	//var rect1 = paper.rect((x1+55), (y1+154), 9, 58).attr({
	//"stroke-width" : 0,
	//fill : "#FFFFFF"
	//});
	
	var inletpipe = paper.path('M'+(x1+55)+' '+(y1+154)+'l 9 0 l 0 58 l -9 0 l 0 -58').attr({
	"stroke-width" : 0,
	fill : "#FFFFFF"
	});
	
	var bloker1 = paper.path('M'+(x1+75)+' '+(y1+210)+'l 0 -8 l -5 0 l 0 -5 l 19 0, l 0 5, l -5 0, l 0 8').attr({
	"stroke-width" : 1,
	fill : "#FFFFFF"
	}); 
	
	var bloker2 = paper.path('M'+(x1+105)+' '+(y1+211)+'l 0 -8 l -5 0 l 0 -5 l 19 0, l 0 5, l -4 0, l 0 8').attr({
	"stroke-width" : 1,
	fill : "#FFFFFF"
	}); 
	
	var exhaustline = paper.path('M'+(x1+106)+' '+(y1+154)+'l 9 0 l 29 58 l -9 0 l -29 -58').attr({
	"stroke-width" : 0,
	fill : "#FFFFFF"
	});
    	
}

var drawhalfcircle1 = function(x1, y1){

	var drawhalfcircle1obj = paper.set();
	
	var drawshape = paper.path('M'+(x1-30)+' '+(y1+190)+'l 0 5 A 5, -5 95 0, 1 '+(x1-30)+','+(y1+170)+'l 0 5 l 54 0 l 0 -21 l 150 0 l 0 57 l -150 0 l 0 -21 l -54 0 ').attr({
	"stroke-width" : 0,
	fill : "#989492"
	}); 
	
	var inletpipe = paper.path('M'+(x1+55)+' '+(y1+154)+'l 9 0 l 0 58 l -9 0 l 0 -58').attr({
	"stroke-width" : 0,
	fill : "#FFFFFF"
	});
	var bloker1 = paper.path('M'+(x1+75)+' '+(y1+210)+'l 0 -8 l -5 0 l 0 -5 l 19 0, l 0 5, l -5 0, l 0 8').attr({
	"stroke-width" : 1,
	fill : "#FFFFFF"
	}); 
	
	var bloker2 = paper.path('M'+(x1+105)+' '+(y1+211)+'l 0 -8 l -5 0 l 0 -5 l 19 0, l 0 5, l -4 0, l 0 8').attr({
	"stroke-width" : 1,
	fill : "#FFFFFF"
	}); 
	
	var exhaustline = paper.path('M'+(x1+106)+' '+(y1+154)+'l 9 0 l 29 58 l -9 0 l -29 -58').attr({
	"stroke-width" : 0,
	fill : "#FFFFFF"
	});
	
	drawhalfcircle1obj.push(drawshape,rect1,bloker1,bloker2,exhaustline);
	return drawhalfcircle1obj;
    	
}

  
   var drawhalfcircledashed = function(x1, y1){
	
	var drawshape = paper.path('M'+(x1-30)+' '+(y1+190)+'l 0 5 A 5, -5 95 0, 1 '+(x1-30)+','+(y1+170)+'l 0 5 l 54 0 l 0 -21 l 150 0 l 0 57 l -150 0 l 0 -21 l -54 0 ').attr({
	fill: "none", stroke: "#665E5B", "stroke-dasharray": "- "
	}); 
	
	var inletpipe = paper.path('M'+(x1+55)+' '+(y1+154)+'l 9 0 l 0 58 l -9 0 l 0 -58').attr({
	fill: "none", stroke: "#665E5B", "stroke-dasharray": "- "
	}); 
	
	
	
	var bloker1 = paper.path('M'+(x1+75)+' '+(y1+210)+'l 0 -8 l -5 0 l 0 -5 l 19 0, l 0 5, l -5 0, l 0 8').attr({
	fill: "none", stroke: "#665E5B", "stroke-dasharray": "- "
	}); 
	
	var bloker2 = paper.path('M'+(x1+105)+' '+(y1+211)+'l 0 -8 l -5 0 l 0 -5 l 19 0, l 0 5, l -4 0, l 0 8').attr({
	fill: "none", stroke: "#665E5B", "stroke-dasharray": "- "
	}); 
	
	var exhaustline = paper.path('M'+(x1+106)+' '+(y1+154)+'l 9 0 l 29 58 l -9 0 l -29 -58').attr({
	fill: "none", stroke: "#665E5B", "stroke-dasharray": "- "
	}); 
	}
  
   var arrow = function (x1, y1) {
              var arrowobject = paper.path(["M", x1, y1] + "m-10-10l20,0 0-6 10,16 -10,16 0-6 -20,0 0,6 -10-16 10-16z");
			  return arrowobject;
            };


	  
function onclickevent(){
//alert("in alert");
//'M'+(x1-30)+' '+(y1+190)+'l 0 5 A 5, -5 95 0, 1 '+(x1-30)+','+(y1+170)+'l 0 5 l 54 0 l 0 -21 l 150 0 l 0 57 l -150 0 l 0 -21 l -54 0 '
drawshape.animate({path:"M"+(x1+10)+" "+(y1+190)+" l 0 5 A 5, 5 75 0, 1,"+(x1+10)+","+(y1+170)+" l 0 5 l 60 0 l 0 -21 l 140 0 l 0 57 l -140 0 l 0 -21 l -60 0"}, 3000);
//buttonCircle = paper.circle((x1-33),(y1+182), 13)
buttonCircle.animate({cx:(x1+3), cy:(y1+182)}, 3000);

//'M'+(x1+55)+' '+(y1+154)+'l 9 0 l 0 58 l -9 0 l 0 -58'
inletpipe.animate({path:"M"+(x1+106)+" "+(y1+154)+"l 8 0 l 0 58 l -8 0 l 0 -58"},3000);
//middleline = paper.path('M'+(x1+95)+' '+(y1+154)+'l 0 58')
middleline.animate({path:"M"+(x1+155)+" "+(y1+154)+"l 0 58"}, 3000);

//'M'+(x1+75)+' '+(y1+210)+'l 0 -8 l -5 0 l 0 -5 l 19 0, l 0 5, l -5 0, l 0 8'
bloker1.animate({path:"M"+(x1+135)+" "+(y1+210)+"l 0 -8 l -5 0 l 0 -5 l 19 0, l 0 5, l -5 0, l 0 8"}, 3000);
//'M'+(x1+105)+' '+(y1+211)+'l 0 -8 l -5 0 l 0 -5 l 19 0, l 0 5, l -4 0, l 0 8'
bloker2.animate({path:"M"+(x1+165)+" "+(y1+210)+"l 0 -8 l -5 0 l 0 -5 l 19 0, l 0 5, l -5 0, l 0 8"}, 3000);
//exhaustline = paper.path('M'+(x1+106)+' '+(y1+154)+'l 9 0 l 29 58 l -9 0 l -29 -58')
exhaustline.animate({path:"M"+(x1+170)+" "+(y1+154)+"l 9 0 l 29 58 l -9 0 l -29 -58"},3000)
//lowerspring = paper.path('M'+(x1+174)+' '+(y1+170)+'l 5 30 l 5 -30 l 5 30 l 5 -30 l 5 30 l 5 -30 l 5 30 l 5 -30')
lowerspring.animate({path:"M"+(x1+210)+' '+(y1+170)+'l 3 30 l 3 -30 l 3 30 l 3 -30 l 0.5 30 l 0.5 -30 l 0.5 30 l 0.5 -30'}, 3000);

//onflag++;
//setTimeout("anmateairflow();",3200);

setTimeout("animatepiston();",3500);
}


function anmateairflow(){
//alert("in airanimation");
var r = []
if(onflag == 1){
         r[0] = paper.rect((x1+106), (y1+285), 8, 0).attr({'fill':'skyBlue', 'stroke': 'transparent'});	
		 r[0].animate({y:(y1+91),height:195}, 1000, function(){
		 r[1] = paper.rect((x1+105),(y1+91), 0, 8).attr({'fill':'skyBlue', 'stroke': 'transparent'});
         r[1].animate({x:(x1+6),width:108},1000, function(){
		 r[2] = paper.rect((x1+6),(y1+91), 8, 0).attr({'fill':'skyBlue', 'stroke': 'transparent'});
		 r[2].animate({y:(y1+49),height:51},1000,function(){
		 r[3] = paper.rect((x1-1),(y1+50), 25, 0).attr({'fill':'skyBlue', 'stroke': 'transparent'});
		 r[3].animate({y:(y1-18),height:67}, 1000);
		 });
		 });
		 });
   

}
setTimeout("animatepiston();",4200);



}

function animatepiston(){

/*var r = []
if(onflag == 1){
r[0] = paper.rect((x1+23), (y1-18), 0, 67).attr({'fill':'skyBlue', 'stroke': 'transparent'}).toBack();
r[0].animate({x:(x1+23),width:86}, 3002);
}*/


//alert("in alert");
//piston = paper.path('M'+(x1+25)+' '+(y1-18)+'l 10 0 l 0 27 l 130 0 l 0 15 l -130 0 l 0 25 l -10 0 l 0 -68')
piston.animate({path:"M"+(x1+110)+" "+(y1-18)+"l 10 0 l 0 27 l 130 0 l 0 15 l -130 0 l 0 25 l -10 0 l 0 -68"},3000);

//upperspring = paper.path('M'+(x1+34)+' '+(y1+42)+'l 12 -50 l 12 50 l 12 -50 l 12 50 l 12 -50 l 12 50 l 12 -50 l 12 50 l 12 -50 ')
upperspring.animate({path:'M'+(x1+120)+' ' +(y1+42)+'l 5 -50 l 5 50 l 5 -50 l 3 50 l 3 -50 l 0.1 50 l 0.1 -50 l 0.1 50 l 0.1 -50'},3000);


}
  
function offclickevent(){

//alert("in alert");
//'M'+(x1-30)+' '+(y1+190)+'l 0 5 A 5, -5 95 0, 1 '+(x1-30)+','+(y1+170)+'l 0 5 l 54 0 l 0 -21 l 150 0 l 0 57 l -150 0 l 0 -21 l -54 0 '
drawshape.animate({path:"M"+(x1-30)+" "+(y1+190)+" l 0 5 A 5, 5 75 0, 1,"+(x1-30)+","+(y1+170)+" l 0 5 l 54 0 l 0 -21 l 150 0 l 0 57 l -150 0 l 0 -21 l -54 0"}, 3000);
//buttonCircle = paper.circle((x1-33),(y1+182), 13)
buttonCircle.animate({cx:(x1-33), cy:(y1+182)}, 3000);

//'M'+(x1+55)+' '+(y1+154)+'l 9 0 l 0 58 l -9 0 l 0 -58'
inletpipe.animate({path:"M"+(x1+55)+" "+(y1+154)+"l 9 0 l 0 58 l -9 0 l 0 -58"},3000);
//middleline = paper.path('M'+(x1+95)+' '+(y1+154)+'l 0 58')
middleline.animate({path:"M"+(x1+95)+" "+(y1+154)+"l 0 58"}, 3000);

//'M'+(x1+75)+' '+(y1+210)+'l 0 -8 l -5 0 l 0 -5 l 19 0, l 0 5, l -5 0, l 0 8'
bloker1.animate({path:"M"+(x1+75)+" "+(y1+210)+"l 0 -8 l -5 0 l 0 -5 l 19 0, l 0 5, l -5 0, l 0 8"}, 3000);
//'M'+(x1+105)+' '+(y1+211)+'l 0 -8 l -5 0 l 0 -5 l 19 0, l 0 5, l -4 0, l 0 8'
bloker2.animate({path:"M"+(x1+105)+" "+(y1+211)+"l 0 -8 l -5 0 l 0 -5 l 19 0, l 0 5, l -5 0, l 0 8"}, 3000);
//exhaustline = paper.path('M'+(x1+106)+' '+(y1+154)+'l 9 0 l 29 58 l -9 0 l -29 -58')
exhaustline.animate({path:"M"+(x1+106)+" "+(y1+154)+"l 9 0 l 29 58 l -9 0 l -29 -58"},3000)
//lowerspring = paper.path('M'+(x1+174)+' '+(y1+170)+'l 5 30 l 5 -30 l 5 30 l 5 -30 l 5 30 l 5 -30 l 5 30 l 5 -30')
lowerspring.animate({path:"M"+(x1+174)+' '+(y1+170)+'l 5 30 l 5 -30 l 5 30 l 5 -30 l 5 30 l 5 -30 l 5 30 l 5 -30 l 9 30'}, 3000);

setTimeout("animatePistonbackToDirection();",3500);


}
  
 function animatePistonbackToDirection(){
 //piston = paper.path('M'+(x1+25)+' '+(y1-18)+'l 10 0 l 0 27 l 130 0 l 0 15 l -130 0 l 0 25 l -10 0 l 0 -68')
piston.animate({path:"M"+(x1+25)+" "+(y1-18)+"l 10 0 l 0 27 l 130 0 l 0 15 l -130 0 l 0 25 l -10 0 l 0 -68"},3000);

//upperspring = paper.path('M'+(x1+34)+' '+(y1+42)+'l 12 -50 l 12 50 l 12 -50 l 12 50 l 12 -50 l 12 50 l 12 -50 l 12 50 l 12 -50 ')
upperspring.animate({path:'M'+(x1+34)+' ' +(y1+42)+'l 12 -50 l 12 50 l 12 -50 l 12 50 l 12 -50 l 12 50 l 12 -50 l 12 50 l 12 -50'},3000);

 
 
 
 
 }
  
  
  