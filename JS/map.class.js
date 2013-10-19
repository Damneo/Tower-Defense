function Map (jsonMapFile) {

	// properties

	this.tileSize	 	= 0,
	this.nbXtiles 		= 0,
	this.nbYtiles 		= 0,
	this.waves 			= [],

	// methods

	//Init the properties with json file map data
	this.init = function (json) {

		//1st check all data in the json
		var errors 	= "";

		errors	= (typeof json.tileSize == 'undefined') ? "Map : property 'tileSize' unset\n" : "";
		errors	= errors + ((typeof json.nbXtiles == 'undefined') ? "Map : property 'nbXtiles' unset\n" : "");
		errors	= errors + ((typeof json.nbYtiles == 'undefined') ? "Map : property 'nbYtiles' unset\n" : "");
		errors	= errors + ((typeof json.waves == 'undefined') ? "Map : property 'waves' unset\n" : "");


		//2nd we can set properties
		if (errors == "") {

			this.tileSize 		= json.tileSize;
			this.nbXtiles 		= json.nbXtiles;
			this.nbYtiles 		= json.nbYtiles;
			this.waves 			= json.waves;

			this.setCanvas(this.tileSize*this.nbXtiles, this.tileSize*this.nbYtiles);

			return true;
		} else {

			console.log(errors);
			return false;
		}
	},

	//Loads json map file.
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

	//Align and trace canvas border in the page
	this.setCanvas = function (width, height) {

		$("#container").css({"width":width, "height":height});
		$("#main_canvas").attr({"width":width, "height":height});
	},

	//Tool method : Display the cells of the map
	this.displayCells = function (canvasId) {

		var canvas 	= $("#"+canvasId)[0];
		var context = canvas.getContext('2d');

		context.beginPath();

		//trace vertical lines
		for (var i=1; i<this.nbXtiles; i++) {
	      	context.moveTo(i*this.tileSize+0.5, 0);
	      	context.lineTo(i*this.tileSize+0.5, this.nbYtiles*this.tileSize);
		};
		//trace horizontal lines
		for (var i=1; i<this.nbYtiles; i++) {
	      	context.moveTo(0, i*this.tileSize+0.5);
	      	context.lineTo(this.nbXtiles*this.tileSize, i*this.tileSize+0.5);
		};

		context.stroke();

		this.DisplayLake();
	},

	//Just for test. TO REMOVE
	this.DisplayLake = function () {
		this.drawSprite("main_canvas", "wtl", 40, 0);
		this.drawSprite("main_canvas", "w", 60, 0);
		this.drawSprite("main_canvas", "wtr", 80, 0);
		this.drawSprite("main_canvas", "w", 40, 20);
		this.drawSprite("main_canvas", "w", 60, 20);
		this.drawSprite("main_canvas", "w", 80, 20);
		this.drawSprite("main_canvas", "wbl", 40, 40);
		this.drawSprite("main_canvas", "w", 60, 40);
		this.drawSprite("main_canvas", "wbr", 80, 40);
	},

	this.drawSprite = function (canvasId, typeSprite, destX, destY) {

		var me 			= this;
		var canvas 		= $("#"+canvasId)[0];
		var context 	= canvas.getContext('2d');
		var imageObj 	= new Image();

		switch (typeSprite) {
			case "w":
				var sourceX = 0, sourceY = 0;
				break;
			case "wtl":
				var sourceX = 20, sourceY = 20;
				break;
			case "wtr":
				var sourceX = 40, sourceY = 0;
				break;
			case "wbl":
				var sourceX = 20, sourceY = 0;
				break;
			case "wbr":
				var sourceX = 0, sourceY = 20;
				break;
		}

		imageObj.onload = function() {
			context.drawImage(imageObj, sourceX, sourceY, me.tileSize, me.tileSize, destX, destY, me.tileSize, me.tileSize);
		};

		imageObj.src = 'maps/img/spritesheet.png';
	},

	this.next = function () {
		console.log("success");
		this.displayCells("main_canvas");
	}

	//Main call
	this.load(jsonMapFile);
}