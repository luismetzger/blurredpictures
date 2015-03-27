<?php
  include 'index.php';

  if ($_POST['ID'] == 'Photography') {
    echo include_output('portafolio_photography.html');
  }
  if ($_POST['ID'] == 'Developer') {
    echo include_output('portafolio_developer.html');
  }

?>
