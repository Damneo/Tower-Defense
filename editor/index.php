<?php
	$tileSize = 20;
	$nbXtiles = 40;
	$nbYtiles = 20;
?>

<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Tower Defense Editor by Damien Rollot</title>
	<link rel="stylesheet" href="CSS/style.css">
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
	<script src="JS/main.js"></script>
</head>
<body>
	<div id="grid">
	<?php
		//generate grid
		for ($y=0; $y < $nbYtiles ; $y++) { 
			echo "<div class='clear'></div>";
			for ($x=0; $x < $nbXtiles; $x++) { 
				$class =  ($y == 0) ? ' top ' : '';
				$class .= ($x == 0) ? ' left ' : '';
				echo "<div class='cell".$class."' style='width:".$tileSize."px;height:".$tileSize."px;'></div>";
			}
		}
	?>
	</div>

	<div id="tool">
		<div id="tiles" class="section">tiles</div>
		<div class="tiles content">
			<?php
				$main_folder 	= "tiles";
				$tiles_folder 	= scandir($main_folder);

				foreach ($tiles_folder as $folder) {
					if ($folder != '.' && $folder != '..') {
						echo "<div class='title-tiles'>".ucfirst($folder)."</div>";
						$imgfiles = scandir($main_folder."/".$folder);
						foreach ($imgfiles as $image) {
							if ($image != '.' && $image != '..') {
								echo "<img src='".$main_folder."/".$folder."/".$image."' />";
							}
						}
						echo "<img style='width:".$tileSize."px;height:".$tileSize."px;' src='' />";
					}
				}
			?>
		</div>
	</div>
</body>
</html>
