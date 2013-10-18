function Map (jsonMapFile) {

	// properties

	this.width 			= 0,
	this.height 		= 0,
	this.tileSize	 	= 0,
	this.waves 			= [],

	// methods

	this.init = function (json) {

		//1st check all data in the json
		var errors 	= "";

		errors	= (typeof json.width == 'undefined') ? "Map : property 'width' unset\n" : "";
		errors	= errors + ((typeof json.height == 'undefined') ? "Map : property 'height' unset\n" : "");
		errors	= errors + ((typeof json.tileSize == 'undefined') ? "Map : property 'tileSize' unset\n" : "");
		errors	= errors + ((typeof json.waves == 'undefined') ? "Map : property 'waves' unset\n" : "");


		//2nd we can set properties
		if (errors == "") {

			this.width 			= json.width;
			this.height 		= json.height;
			this.tileSize 		= json.tileSize;
			this.waves 			= json.waves;

			return true;
		} else {

			console.log(errors);
			return false;
		}
	},

	this.load = function (jsonFile) {

		var me = this;
		$.ajax({
			dataType: "json",
		  	url: "maps/"+jsonFile,
		  	success: function (data) {
		  		if (me.init(data)) {
			    	me.next();
			    } else {
			    	console.log("Map file is not valid");
			    }
		  	},
		  	error: function () {
		  		console.log("Error loading json map file");
		  	}
		});
	},

	this.next = function () {
		console.log("success");
		console.log(this.waves);
	}

	this.load(jsonMapFile);
}