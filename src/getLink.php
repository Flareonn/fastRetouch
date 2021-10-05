<?php 
  $email = $_POST['email'];
  $name = $_POST['name'];
  $pluginName = $_POST['pluginName'];
  $link = $_POST['link'];

  $email = htmlspecialchars($email);
  $name = htmlspecialchars($name);
  $pluginName = htmlspecialchars($pluginName);
  $link = htmlspecialchars($link);

  $email = urldecode($email);
  $name = urldecode($name);
  $pluginName = urldecode($pluginName);
  $link = urldecode($link);

  $email = trim($email);
  $name = trim($name);
  $pluginName = trim($pluginName);
  $link = trim($link);

  if (
    mail($email,
    "Заявка с сайта",
    "
      Hello, ".$name."

      You can install the ".$pluginName." using the link to the Adobe Exchange website:
      
      ".$link."
      
      Kind regards,
      Kuafara team
    "
    ,"From: Kuafara WebSite \r\n")
  ) {
    echo "success";
  } else {
    echo "Error";
  }
?>