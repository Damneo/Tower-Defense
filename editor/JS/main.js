$(document).ready(function() {
	
	img_src = '';

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
});