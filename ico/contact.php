<?php
require_once __DIR__ . '/config.php';

if (isset($_POST['cmd'])) {
    $cmd = $_POST['cmd'];

    if ($cmd == 'sendMess') {
        $name = '';
        $email = '';
        $message = '';

        injPost();
        extract($_POST);

        $result = ['error' => 1, 'message' => ''];
        try {
            if (trim($name) == '') {
                $result['message'] = 'Please enter name.';
            } else if ($email == '') {
                $result['message'] = 'Please enter email';
            } else if (!filter_var(trim($email), FILTER_VALIDATE_EMAIL)) {
                $result['message'] = 'Invalid email. Please re-enter your email correctly.';
            } else if ($message == '') {
                $result['message'] = 'Please enter massage.';
            } else {
                $result['message'] = "Your information has been sent. The administrator will contact you as soon as possible.";
                // insert customer info or send mail
                @require_once __DIR__ . '/PHPMailer/PHPMailerAutoload.php';

                $mail = new PHPMailer();
                $mail->IsSMTP();
                $mail->CharSet = 'UTF-8';
                $mail->XMailer = ' ';
                $mail->isHTML();
                $mail->SMTPDebug = 'false';
                $mail->SMTPAuth = true;
                $mail->SMTPSecure = 'tls';
                $mail->Host = 'smtp.gmail.com';
                $mail->Port = '587';
                $mail->Username = 'nguyentruongpm@gmail.com';
                $mail->Password = 'truongnq@15121993';
                $mail->SetFrom('nguyentruongpm@gmail.com', 'MeyCoin Leader');
                $mail->Subject = "$name want to join MeyCoin!";
                $mail->Body = "Hello $name, you have a new contact from Landing Page: 
                        
                        Name: $name
                        Email: $email
                        Message: $message
                        
                        Please contact as soon as possible to help $name offline!
                        
                        Best regards,
                        MeyCoin Team";
                $mail->addAddress($email);
                $mail->addBcc("contact@meycoin.com");
                $mail->send();
                //end
            }
        } catch (Exception $ex) {
            $result = ['error' => 1, 'message' => ''];
        }

        echo json_encode($result);
    }
}

function inj($string, $entity = TRUE)
{
    global $conn;
    if ($entity) {
        $string = htmlspecialchars($string, ENT_QUOTES);
    }
    return $conn->real_escape_string($string);
}

function injPost($entity = TRUE)
{
    if ($_SERVER['REQUEST_METHOD'] != 'POST') {
        return;
    }

    foreach ($_POST as $key => $value) {
        $_POST[$key] = trim(inj($value, $entity));
    }
}