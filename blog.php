<?php
  include 'index.php';

  if ($_POST['ID'] == 'blog') {
    echo include_output('blog.html');
  }

?>
