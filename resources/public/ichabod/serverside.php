<?
 header('Cache-Control: no-cache, must-revalidate');
 header('Expires: Mon, 26 Jul 2020 05:00:00 GMT');
 header('Content-type: application/json');
 session_start();
// Get value of clicked button
$button = $_GET['button'];


if (!isset($_SESSION["curr"])) {
	$_SESSION["curr"] = 1;
}
if (!isset($_SESSION["attractor"])) {
	$_SESSION["repeller"] = 2;
	$_SESSION["attractor"] = 3;
	$_SESSION["tick"] = 10;
	$_SESSION["tock"] = 3;

}
else if ($button == "next") {
	$_SESSION["curr"]++;
}
else if ($button == "prev") {
	$_SESSION["curr"]--;
}

else if ($button == "reset") {
	session_start();
	$_SESSION["curr"] = 1;
	$_SESSION["repeller"] = 2;
	$_SESSION["attractor"] = 3;
	$_SESSION["tick"] = 10;
	$_SESSION["tock"] = 3;
}


if (isset($_SESSION["attractor"])) {
	 if (($_SESSION["attractor"]-$_SESSION["repeller"])%2 == 0) {
		$_SESSION["repeller"]++;
		$_SESSION["tick"] = $_SESSION["tick"] + 3;
		$_SESSION["tock"] = $_SESSION["tock"] -1;
	} else {
		$_SESSION["attractor"]++;
		$_SESSION["tick"]--;
		$_SESSION["tock"] = $_SESSION["tock"] + 3;
	}
}

 
// carousel array of images
$revolver = array('concentric-rinds.jpg', 'concentric-rinds2.jpg', 'sphere-spirals.jpg', 'sphere-fish.jpg', 'circle-limit.jpg', 'double-planet.jpg', 'gravity.jpg', 'stars1.jpg', 'stars2.jpg', 'drawing-hands.jpg');
$gyre = array($_SESSION["repeller"],$_SESSION["attractor"],$_SESSION["tick"],$_SESSION["curr"]-1,$_SESSION["curr"],$_SESSION["curr"]+1,$SESSION["tock"]);
// $_SESSION["attractor"] = $gyre[0];
// $reflector = $gyre[1];
// $tick = $gyre[2];
// $tock = $gyre[6];




// Combine red and white tables into one multidimensional table
$carousel = array(
  "curr" => $_SESSION["curr"] % 10,
  "prev" => ($_SESSION["curr"] -1) % 10,
  "next" => ($_SESSION["curr"] +1) % 10,
  "revolver" => $revolver,
   "attractor" => $_SESSION["attractor"] % 6,
   "repeller" => $_SESSION["repeller"] % 6,
   "tick" => ($_SESSION["tick"] -2) % 10,
   "tock" => ($_SESSION["tock"] -1) % 10,
   "gyre" => $gyre,
);

  // "attractor" => $gyre[0],
  // "repeller" => $gyre[1],
// Finally depending on the button value, JSON encode our winetable and print it
if ($button == "next") {

  print json_encode($carousel);
}
else if ($button == "prev") {
  print json_encode($carousel);
}
else {
  print json_encode($carousel);
}
 
?>