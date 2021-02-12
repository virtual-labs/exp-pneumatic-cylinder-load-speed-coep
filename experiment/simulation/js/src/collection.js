SINGLEACTINGCYLINDER.collection = (function() {
	var cylinderCollection  =  Backbone.Collection.extend({
		model : SINGLEACTINGCYLINDER.model.cylModel,
		
		getModel : function(id) {
			return this;
		}
	});
	
	return{
		cylinderCollection : cylinderCollection
	}
})();