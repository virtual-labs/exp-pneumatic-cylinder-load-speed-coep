// JavaScript Documentvar paper;


function vlave(){	
	paper = new Raphael(document.getElementById('diagram'), 1200, 700);
	
    x = 270;
	y = 20;
	
	var upperbodypart = paper.path('M'+(x+10)+' '+(y+10)+'l 40 0 l 0 80 l 440 0 l l 0 -80 l 40 0 l 0 120 l -520 0  z').attr({
	"stroke-width" : 2,
	fill : "90-#A9A9A9:5-#fff:55-#A9A9A9:95"
	});
	
	
	var lowerbodypart = paper.path('M'+(x+10)+' '+(y+240)+'l 520 0 l 0 120 l -40 0 l 0 -80 l -440 0 l 0 80 l -40 0 z ').attr({
	"stroke-width" : 2,
	fill : "90-#A9A9A9:5-#fff:55-#A9A9A9:95"
	});
	
	var dtlines = dottedlines(x, y);
	
	//var  drawdisk = paper.path('M'+(x+310)+' ' +(y+137)+'l -110 85 l 10 10 l 110 -85 z ').attr({
	//"stroke-width" : 1,
	//fill : "#C0C0C0"
	//});
	
	var drawrect = paper.rect((x+200), (y+180), 110, 12).attr({
	"stroke-width" : 2,
	fill : "90-#A9A9A9:5-#fff:55-#A9A9A9:95" 
	});
	drawrect.transform("r100");
	drawrect.toFront();
	
	var drawcolorrect = paper.rect((x+10), (y+131), 238, 108).attr({
	'stroke':'transparent',
	fill:"#87ceeb"
	});
	drawcolorrect.toBack();
	
	var drawcircle = paper.circle((x+256),(y+187), 8).attr({
	"stroke-width" : 2,
	fill : "90-#A9A9A9:5-#fff:55-#A9A9A9:95" 
	});
	
	
	
};


  var dottedlines = function(x,y){
  
    var dottedline1 =  paper.path('M'+(x+14)+' ' +(y+30)+'l 7 0 M'+(x+27)+' ' +(y+30)+'l 7 0 M'+(x+39)+' ' +(y+30)+'l 10 0');
    var dottedline2 =  paper.path('M'+(x+14)+' ' +(y+60)+'l 7 0 M'+(x+27)+' ' +(y+60)+'l 7 0 M'+(x+39)+' ' +(y+60)+'l 10 0');
	var dottedline3 =  paper.path('M'+(x+493)+' ' +(y+30)+'l 7 0 M'+(x+505)+' ' +(y+30)+'l 7 0 M'+(x+519)+' ' +(y+30)+'l 10 0');
	var dottedline4 =  paper.path('M'+(x+493)+' ' +(y+60)+'l 7 0 M'+(x+505)+' ' +(y+60)+'l 7 0 M'+(x+519)+' ' +(y+60)+'l 10 0');
	
	
	var dottedline5 =  paper.path('M'+(x+14)+' ' +(y+300)+'l 7 0 M'+(x+27)+' ' +(y+300)+'l 7 0 M'+(x+39)+' ' +(y+300)+'l 10 0');
	var dottedline6 =  paper.path('M'+(x+14)+' ' +(y+330)+'l 7 0 M'+(x+27)+' ' +(y+330)+'l 7 0 M'+(x+39)+' ' +(y+330)+'l 10 0');	
	var dottedline7 =  paper.path('M'+(x+493)+' ' +(y+300)+'l 7 0 M'+(x+505)+' ' +(y+300)+'l 7 0 M'+(x+519)+' ' +(y+300)+'l 10 0');
	var dottedline8 =  paper.path('M'+(x+493)+' ' +(y+330)+'l 7 0 M'+(x+505)+' ' +(y+330)+'l 7 0 M'+(x+519)+' ' +(y+330)+'l 10 0');
}

 var drawarrow = function(x,y){
 
    var arrow = paper.path('M'+(x+5)+' '+(y+175)+'l 0 20 l 40 0 l 0 7 l 45 -18 l -45 -17 l 0 7 z').attr({
	"stroke-width" : 1,
	fill : "90-#A9A9A9:5-#fff:55-#A9A9A9:95"
	});
	
	var arrow = paper.path('M'+(x+445)+' '+(y+175)+'l 0 20 l 40 0 l 0 7 l 45 -18 l -45 -17 l 0 7 z').attr({
	"stroke-width" : 1,
	fill : "90-#A9A9A9:5-#fff:55-#A9A9A9:95"
	});

}

  var labels = function(x1, y1, t) {
  var temp = paper.text((x+x1), (y+y1), t).attr({
  'font-size' : 20,
  'font-family' : 'helvetica',
  "font-weight" : "bold"
   });
  return temp;
  }