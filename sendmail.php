<?php
  require 'vendor/autoload.php';
  use \Mailjet\Resources;
  $mj = new \Mailjet\Client('380482a5b1e13616b3c09e6f58776515','b75e9db1961e28513708dd1f35128449',true,['version' => 'v3.1']);
  $body = [
    'Messages' => [
      [
        'From' => [
          'Email' => "thomasdoret81@gmail.com",
          'Name' => "Thomas"
        ],
        'To' => [
          [
            'Email' => "thomasdoret81@gmail.com",
            'Name' => "Thomas"
          ]
        ],
        'Subject' => $_POST['name'],
        'TextPart' => [$_POST['mail'], $_POST['message']],
      ]
    ]
  ];
  $response = $mj->post(Resources::$Email, ['body' => $body]);
  $response->success();
?>
