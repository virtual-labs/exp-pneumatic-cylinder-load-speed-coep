// JavaScript Documentvar paper;


function vlave(){	
	paper = new Raphael(document.getElementById('diagram'), 1200, 700);
	
    x = 270;
	y = 30;
	
	var upperbodypart = paper.path('M'+(x+10)+' '+(y+10)+'l 40 0 l 0 100 l 140 0 l 70 -45 l 70 0 l 63 45 l 80 0 l 0 -100 l 40 0 l 0 130 l -125 0 l -65 -45 l -57 0 l -65 45 l -190 0 l 0 -130 ').attr({
	"stroke-width" : 2,
	fill : "90-#A9A9A9:5-#fff:55-#A9A9A9:95"
	});
	
	
	var lowerbodypart = paper.path('M'+(x+10)+' '+(y+240)+'l 190 0 l 65 45 l 57 0 l 65 -45 l 125 0 l 0 130 l -40 0 l 0 -100 l -68 0 l -75 45 l -70 0 l -75 -45 l -134 0 l 0 100 l -40 0 l 0 -130').attr({
	"stroke-width" : 2,
	fill : "90-#A9A9A9:5-#fff:55-#A9A9A9:95"
	});
	
	
	var dtlines = dottedlines(x, y);
	
	var arrow = drawarrow(x,y);
	
	//labels(120, 182, "Inlet");
	
	//labels(400, 182, "Outlet");
	
	var drawcircle = paper.circle((x+243),(y+196), 11).attr({
	"stroke-width" : 2,
	fill : "90-#A9A9A9:5-#fff:55-#A9A9A9:95"
	});
	
	var  drawdisk = paper.path('M'+(x+273)+' ' +(y+127)+'l -110 85 l 10 10 l 49 -38 l 12 12 l 10 -8 l -12 -12 l 50 -40 z').attr({
	"stroke-width" : 2,
	fill : "90-#A9A9A9:5-#fff:55-#A9A9A9:95"
	});
	
};


  var dottedlines = function(x,y){
  
    var dottedline1 =  paper.path('M'+(x+14)+' ' +(y+30)+'l 7 0 M'+(x+27)+' ' +(y+30)+'l 7 0 M'+(x+39)+' ' +(y+30)+'l 10 0');
    var dottedline2 =  paper.path('M'+(x+14)+' ' +(y+60)+'l 7 0 M'+(x+27)+' ' +(y+60)+'l 7 0 M'+(x+39)+' ' +(y+60)+'l 10 0');
	var dottedline3 =  paper.path('M'+(x+476)+' ' +(y+30)+'l 7 0 M'+(x+489)+' ' +(y+30)+'l 7 0 M'+(x+502)+' ' +(y+30)+'l 10 0');
	var dottedline4 =  paper.path('M'+(x+476)+' ' +(y+60)+'l 7 0 M'+(x+489)+' ' +(y+60)+'l 7 0 M'+(x+502)+' ' +(y+60)+'l 10 0');
	
	
	var dottedline5 =  paper.path('M'+(x+14)+' ' +(y+300)+'l 7 0 M'+(x+27)+' ' +(y+300)+'l 7 0 M'+(x+39)+' ' +(y+300)+'l 10 0');
	var dottedline6 =  paper.path('M'+(x+14)+' ' +(y+330)+'l 7 0 M'+(x+27)+' ' +(y+330)+'l 7 0 M'+(x+39)+' ' +(y+330)+'l 10 0');	
	var dottedline7 =  paper.path('M'+(x+476)+' ' +(y+300)+'l 7 0 M'+(x+489)+' ' +(y+300)+'l 7 0 M'+(x+502)+' ' +(y+300)+'l 10 0');
	var dottedline8 =  paper.path('M'+(x+476)+' ' +(y+330)+'l 7 0 M'+(x+489)+' ' +(y+330)+'l 7 0 M'+(x+502)+' ' +(y+330)+'l 10 0');
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