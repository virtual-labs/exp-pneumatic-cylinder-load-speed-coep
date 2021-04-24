SINGLEACTINGCYLINDER.model = (function(){
	
	var cylModel =  Backbone.Model.extend ({
		
            initialize: function() {
               document.write("Welcome to TutorialsPoint..");
            },
			
			defaults : {
               "ht": 0
               
            }
    });
	
	return{
		
		cylModel : cylModel
		
	}
	
})();