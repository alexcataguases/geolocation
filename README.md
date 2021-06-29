# geolocation

sendtodevice

1- alterei
io.ionic.starter
para
com.alexcataguases.gpspush

2- criei conta no firebase
3- inseri o google-services.json
4- executei o npm install @capacitor/push-notifications
5- executei ionic cap sync
6- alteriei o código do ts, colocando tudo no onInit
7- gerei o apk e coloquei no cel
8- copiei o token e colei no console
9- mandei a msg (Firebase -> Engajamento -> Cloud Messaging)

meu celular
c-hCXdqnReG1leED4s7Cr7:APA91bEI3wG-P5ekeegAtuFmFnCvxc1cXwip-0BjJCeoSD0Crx5nmqTSoVVXqAupStVmqSy80kmAeLbaWWpwIv42U-Deaeer3I8ajWlG8qmbPlRgQbMnVp595UUlvTbgQwijyCdBfD4M

key do servidor
AAAAUUYmMDQ:APA91bEfssKsr3jdGhCjlEoQhPqRBh7KrmT9BMKl5cTj1Z3fVUCLLi0P7tQV9Yry8sm9URSryPKXQ66jR1iZI5h6gifjgU0C0DEG6daaOWV6LHu0iO9dsoVfjN5-qEV7JUpJeAAGPQfK


REFERÊNCIAS
https://console.firebase.google.com/u/2/project/primeiropushionic/overview
https://capacitorjs.com/docs/apis/push-notifications
https://capacitorjs.com/docs/guides/push-notifications-firebase
https://www.youtube.com/watch?v=YUr8pw0nO7Y
https://www.youtube.com/watch?v=SxP9yNFNeXk
https://www.youtube.com/watch?v=Oh0nfzpBbqo

--------------------

Enviar pelo php

https://github.com/hansemannn/titanium-firebase-cloud-messaging/blob/master/README.md
https://firebase.google.com/docs/cloud-messaging/http-server-ref?hl=pt


//----------------------------

<?php
function enviar($r, $t, $m)
    {
    // API access key from Google API's Console
        if (!defined('API_ACCESS_KEY')) define( 'API_ACCESS_KEY', 'AAAAUUYmMDQ:APA91bEfssKsr3jdGhCjlEoQhPqRBh7KrmT9BMKl5cTj1Z3fVUCLLi0P7tQV9Yry8sm9URSryPKXQ66jR1iZI5h6gifjgU0C0DEG6daaOWV6LHu0iO9dsoVfjN5-qEV7JUpJeAAGPQfK' );
        $tokenarray = array($r);
        // prep the bundle
        $msg = array
        (
            'title'     => $t,
            'message'     => $m,
            'vibrate'   => true,
             'body'  => $m,
             'image' => "https://www.togniodontologia.com.br/wp-content/uploads/2018/08/togni-1.jpg",
            'force_show_in_foreground'=> true,
            'sound'     => 1

        );
        $fields = array
        (
            'registration_ids'     => $tokenarray,
            'data'            => $msg,
            'notification'          => $msg,
            'badge'            => 2
        );

        $headers = array
        (
            'Authorization: key=' . API_ACCESS_KEY,
            'Content-Type: application/json'
        );

        $ch = curl_init();
        curl_setopt( $ch,CURLOPT_URL, 'https://fcm.googleapis.com/fcm/send' );
        curl_setopt( $ch,CURLOPT_POST, true );
        curl_setopt( $ch,CURLOPT_HTTPHEADER, $headers );
        curl_setopt( $ch,CURLOPT_RETURNTRANSFER, true );
        curl_setopt( $ch,CURLOPT_SSL_VERIFYPEER, false );
        curl_setopt( $ch,CURLOPT_POSTFIELDS, json_encode( $fields ) );
        $result = curl_exec($ch );
        echo $result;
        curl_close( $ch );
        
    }

enviar("c-hCXdqnReG1leED4s7Cr7:APA91bEI3wG-P5ekeegAtuFmFnCvxc1cXwip-0BjJCeoSD0Crx5nmqTSoVVXqAupStVmqSy80kmAeLbaWWpwIv42U-Deaeer3I8ajWlG8qmbPlRgQbMnVp595UUlvTbgQwijyCdBfD4M", "titulo msg php", "msg php feita agora");
?>






