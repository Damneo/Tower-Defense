$(document).ready(function() {
	
	img_src 	= '';
	is_clicked 	= false;

	//Choose a tile
	$(".tiles.content img").click(function() {
		//Select the chosen element
		$(".tiles.content img").removeClass('selected');
		$(this).addClass('selected');
		//store img src
		img_src = $(this).attr('src');
	});

	//Insert the chosen tile in the grid
	$("#grid .cell").click(function() {
		$(this).css('background', 'url(' + img_src + ') no-repeat');
	});

	// hide/show panel in tool option
	$("#tool .section").click(function() {
		var content = $(this).next(".content")[0];
		$(content).slideToggle("fast");
	});

	//set state is clicked
	$("#grid")
		.mouseup(function(event) {
			is_clicked 	= false;
		})
		.mousedown(function() {
	    	is_clicked 	= true;
	});

	//Insert the chosen tile in the grid
	$("#grid .cell").hover(function() {
		if (is_clicked) {
			$(this).css('background', 'url(' + img_src + ') no-repeat');
		}
	});
});