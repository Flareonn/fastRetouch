<?php 
  $email = $_POST['email'];
  $name = $_POST['name'];
  $system = $_POST['system'];
  $version = $_POST['version'];
  $language = $_POST['language'];
  $text = $_POST['text'];
  $file = $_POST['file'];

  $email = htmlspecialchars($email);
  $name = htmlspecialchars($name);
  $system = htmlspecialchars($system);
  $version = htmlspecialchars($version);
  $language = htmlspecialchars($language);
  $text = htmlspecialchars($text);

  $email = urldecode($email);
  $name = urldecode($name);
  $system = urldecode($system);
  $version = urldecode($version);
  $language = urldecode($language);
  $text = urldecode($text);

  $email = trim($email);
  $name = trim($name);
  $system = trim($system);
  $version = trim($version);
  $language = trim($language);
  $text = trim($text);

  if (
    mail("appavel2011@yandex.ru",
    "Заявка с сайта",
    "email:".$email.". name: ".$name."system: ".$system."file: ".$file
    ,"From: Your WebSite \r\n")
  ) {
    echo "Success";
  } else {
    echo "Error";
  }?>
?>