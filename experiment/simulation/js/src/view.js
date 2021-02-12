var SINGLEACTINGCYLINDER = SINGLEACTINGCYLINDER || {};

$(document).ready(function() {


	var cylinderView = new SINGLEACTINGCYLINDER.View.cylinderView();
	var calculationView = new SINGLEACTINGCYLINDER.View.calculationView();
	
	
});

SINGLEACTINGCYLINDER.View = (function() {
	
	
	var cylinderView = Backbone.View.extend({
				
		initialize : function() {
			SINGLEACTINGCYLINDER.controller.obj.drawlowercylinder(0.5);
			SINGLEACTINGCYLINDER.controller.obj.drawuppercylinder(0.2);
		},
		
	});

	
	var calculationView = Backbone.View.extend({
		
		
		el:'#calculation',
		events:{
			'click #CalculateForce':'CalculateForce',
			'click #CalculateFS':'CalculateFS',
			'click #CalculateCylinderArea':'CalculateCylinderArea',
			'click #submitdiameter':'submitDiameter'	
		},
		
		CalculateForce: function(){
			
	       var wghtofload = $("#load").val();
           var inclinationAngle = $("#angleofinclination option:selected").val();
		   
		   SINGLEACTINGCYLINDER.controller.obj.calculateForce(wghtofload, inclinationAngle);		
		},		
		CalculateFS: function(){
			
			var speed = $("#speed option:selected").val();
			
		    SINGLEACTINGCYLINDER.controller.obj.calculateFS(speed);			
		},
		CalculateCylinderArea:function(){
			
			var airpressure = $("#airpressure").val();
			
			SINGLEACTINGCYLINDER.controller.obj.calculateCylinderArea(airpressure);
			
		},
		submitDiameter:function(){
			
			//var requiredDiameter = $("#cylinderDiameter").val();			
			SINGLEACTINGCYLINDER.controller.obj.submitDiameter();
					
		}
		
		
	});
	
	
	return {
		cylinderView : cylinderView,
		calculationView: calculationView
	}

	
})();;
