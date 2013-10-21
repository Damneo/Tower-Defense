<?php
	$tileSize = 20;
	$nbXtiles = 40;
	$nbYtiles = 20;
?>

<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="CSS/style.css">
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
</body>
</html>
