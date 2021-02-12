// JavaScript Documentvar paper;


function vlave(){	
	paper = new Raphael(document.getElementById('diagram'), 1200, 700);
	
    x = 310;
	y = 160;
	
	
	var animation;
	var rotaterect = drawrectforanimation(310, 120);
	
	//rotaterect.node.id = 'r1';
	drawrectanimation(310,120,rotaterect);
	
	
	var middlebodypart = paper.path('M'+(x+235)+' ' +(y-70)+'l 140 0 l 0 100 l 30 0 l 0 30 l -33 0 l -15 -15 l 0 -65 l -105 0 l 0 65 l -15 15 l -33 0 l 0 -30 l 30 0 z').attr({fill : "90-#A9A9A9:5-#fff:55-#A9A9A9:95"});
	
	
	var centerrect = drawrect(x, y, 10, 130)
	var siderect1 = paper.rect((x+288), (y-76), 12, 62).attr({fill : "#A10000" , 'stroke':'transparent'});
	var siderect2 = paper.rect((x+310), (y-76), 12, 62).attr({fill : "#A10000", 'stroke':'transparent'});
	//var line1 = paper.path('M'+(x+257)+' '+(y-5)+'l 94 0')
	var circularpart1 = drawcircularpart(x, y);
	var rubberpart = drawrubberpart(x, y);
	//var ellipse1 = paper.path('M'+(x+239)+' '+(y+61)+'A 53, 16 0 1, 1 670, 211 l 41 0 l 0 8 l -41 0 ')
	
	
	 
	
	var leftbodypart = paper.path('M'+(x+115)+' '+(y-10)+'l 30 0 l 0 80 l 90 0 l 0 20 l -25 10 l -95 0 l 0 -110').attr({
	"stroke-width" : 1,
	fill : "90-#A9A9A9:5-#fff:55-#A9A9A9:95"
	});
	var leftscrewrect1 = paper.rect((x+217), (y+5), 7, 85).attr({fill : "#111010"});
	
	var rightbodypart = paper.path('M'+(x+463)+' '+(y-10)+'l 30 0 l 0 110 l -95 0 l -25 -10 l 0 -20 l 90 0 l 0 -80').attr({
	"stroke-width" : 1,
	fill : "90-#A9A9A9:5-#fff:55-#A9A9A9:95"
	});
	
	var rightscrewrect = paper.rect((x+387), (y+5), 7, 85).attr({fill : "#111010"});
	
	 paper.rect((x+205), (y+22), 8 ,8).attr({fill : "#90-#A9A9A9:5-#fff:55-#A9A9A9:95"});
	 paper.rect((x+213), (y+22), 14 ,8).attr({fill : "#90-#A9A9A9:5-#fff:55-#A9A9A9:95"});
	 paper.rect((x+227), (y+22), 8 ,8).attr({fill : "#90-#A9A9A9:5-#fff:55-#A9A9A9:95"});
	
	 paper.rect((x+376), (y+22), 8 ,8).attr({fill : "#90-#A9A9A9:5-#fff:55-#A9A9A9:95"});
	 paper.rect((x+384), (y+22), 14 ,8).attr({fill : "#90-#A9A9A9:5-#fff:55-#A9A9A9:95"});
	 paper.rect((x+398), (y+22), 8 ,8).attr({fill : "#90-#A9A9A9:5-#fff:55-#A9A9A9:95"});
	 
	 
	  
	var lowerbodypart = paper.path('M'+(x+115)+' '+(y+176)+'l 110 0 l 35 -23 l 30 -40 l 3 -22 l 20 0 l 3 22 l 30 40 l 35 23 l 113 0 l 0 90 l -30 0 l 0 -60 l -320 0 l 0 60 l -30 0 z').attr({
	"stroke-width" : 1,
	fill : "90-#A9A9A9:5-#fff:55-#A9A9A9:95"
	});
	var dottedline = dottedlines(x, y);
	
};

   var drawrect = function(x, y, w ,h){
   
   paper.rect((x+300), (y-135), w, h).attr({fill : "90-#A9A9A9:5-#fff:55-#A9A9A9:95"});
   
   }
   var drawcircularpart = function(x,y){
   var line2  = paper.path('M'+(x+257)+' '+(y+5)+'l 0 -10 l 94 0 l 0 10').attr({fill : "90-#A9A9A9:5-#fff:55-#A9A9A9:95"});	
	var ellipse = paper.path('M'+(x+257)+' '+(y+5)+'A 40, 30 0 1, 0 '+(x+351)+','+(y+5)).attr({fill : "90-#A9A9A9:5-#fff:55-#A9A9A9:95"});
  }
  
  var drawrubberpart = function(x, y){
  
      var rubberpart = paper.path('M'+(x+198)+' '+(y+69)+' l 0 -8 l 41 0 A 53, 16 0 1,1 '+(x+370)+' '+(y+61)+ ' l 41 0 l 0 8 l -41 0 A 50, 16 0 1 ,0 '+(x+239)+' '+(y+69)+ ' l -41 0').attr({fill : "#c23af2", 'stroke':'transparent'});

   
  }
  var dottedlines = function(x,y){
  
    var dottedline1 =  paper.path('M'+(x+115)+' ' +(y+15)+'l 7 0 M'+(x+128)+' ' +(y+15)+'l 7 0 M'+(x+139)+' ' +(y+15)+'l 7 0');
  // var dottedline = paper.path('M'+(x+115)+' '+(y+15)+'l 5 0').attr({'stroke-dasharray' : "--"});
    var dottedline2 =  paper.path('M'+(x+115)+' ' +(y+40)+'l 7 0 M'+(x+128)+' ' +(y+40)+'l 7 0 M'+(x+139)+' ' +(y+40)+'l 7 0');
	var dottedline3 =  paper.path('M'+(x+463)+' ' +(y+15)+'l 7 0 M'+(x+475)+' ' +(y+15)+'l 7 0 M'+(x+486)+' ' +(y+15)+'l 7 0');
	var dottedline4 =  paper.path('M'+(x+463)+' ' +(y+40)+'l 7 0 M'+(x+475)+' ' +(y+40)+'l 7 0 M'+(x+486)+' ' +(y+40)+'l 7 0');
	
	
	var dottedline5 =  paper.path('M'+(x+115)+' ' +(y+225)+'l 7 0 M'+(x+125)+' ' +(y+225)+'l 7 0 M'+(x+137)+' ' +(y+225)+'l 7 0');
	var dottedline6 =  paper.path('M'+(x+115)+' ' +(y+250)+'l 7 0 M'+(x+125)+' ' +(y+250)+'l 7 0 M'+(x+137)+' ' +(y+250)+'l 7 0');	
	var dottedline7 =  paper.path('M'+(x+463)+' ' +(y+225)+'l 7 0 M'+(x+475)+' ' +(y+225)+'l 7 0 M'+(x+486)+' ' +(y+225)+'l 7 0');
	var dottedline8 =  paper.path('M'+(x+463)+' ' +(y+250)+'l 7 0 M'+(x+475)+' ' +(y+250)+'l 7 0 M'+(x+486)+' ' +(y+250)+'l 7 0');
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

	var drawrectforanimation = function(x,y){
	var centerrect1 = paper.rect(x, y, 100, 10 ,5);
	return centerrect1
	}
	var drawrectanimation = function(x,y,rotaterect)
	{
	var rect1 = rotaterect;
	//var id = '#r1';
	//if($(id).html == 1){
	rect1.remove();
	var centerrect1 = paper.rect(x, y, 100, 10 ,5);
	//var revolve = Raphael.animation({transform:'r360'},4000,"easein");
				        var rotate = Raphael.animation({transform:'r360'},4000,"linear");
				        animation = centerrect1.animate(rotate)
				      //  animation.animate(rotate);
				        setTimeout(function(){
				        	drawrectanimation(x, y)}, 1000);
	
   //    }	
	}
	  
  var labels = function(x1, y1, t) {
  var temp = paper.text((x+x1), (y+y1), t).attr({
  'font-size' : 20,
  'font-family' : 'helvetica',
  "font-weight" : "bold"
   });
  return temp;
  }