<?php
  include 'index.php';

  $idNav = $_POST['ID'];
  $filename = "blog/blog_" . $idNav . ".html";

  echo include_output($filename);
?>
