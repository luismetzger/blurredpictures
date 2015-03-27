<?php
  include 'index.php';

  $idNav = $_POST['IDnav'];
  $filename = "portafolio/item_" . $idNav . ".html";

  echo include_output($filename);
?>
