<?php

    /* $conn is a way to declear variable, 
          mysqli_connect is a function which return the argument ,
          localhost,root etc. these are a variable and
          die() is a function which execute when mysqli_connect is failed. */
    $conn = mysqli_connect('localhost','root','','contact_db1') or die('connection failed');  // This is the function call that establishes the database connection. 

    /* isset() is a function which checks that the argument variable exists or not
        //while $_POST is a PHP super global variable which is used to collect form data
         after submitting an HTML form with method="post". */

   if(isset($_POST['submit'])){

      $name = mysqli_real_escape_string($conn, $_POST['name']); //mysqli_real_escape_string is used to prevent from the SQL Injection.
      $email = mysqli_real_escape_string($conn, $_POST['email']);
      $number = $_POST['number'];
      $specialist = $_POST['specialist'];
      $doctor = $_POST['doctor'];
      $date = $_POST['date'];

      $insert = mysqli_query($conn, "INSERT INTO `contact_form1`(name, email, number, specialist, doctor, date) VALUES('$name','$email','$number','$specialist','$doctor','$date')") or die('query failed');

      if($insert){
        $message[] = 'appointment made successfully!'; //appointment made successfully!
      }else{
        $message[] = 'appointment failed!';
      }
   }
?>






<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HelthCare Website</title>

    <!-- font awesome cdn lik -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css">

    <!-- bootstrap cdn link -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.1/css/bootstrap.min.css">

    <!-- custome css file link -->
    <link rel="stylesheet" href="style.css">

    <!--for scrolling image css-->
    <!--link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"-->

    <!-- font awesome cdn link  >
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"-->

    <!-- swiper css link  -->
    <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css">
</head>



<body>
<!-- header section start -->
<header class="header fixed-top">
  <div class="container">
    <div class="row align-items-centre justify-content-between">
    
       <a href="#home" class="logo">Health<span>Care.</span></a>
       <nav class="nav">
         <a href="#home">home</a>
         <a href="#about">about</a>
                        + "<br><hr> Email:  " + document.getElementById("email").value
                        + "<br><hr> Specialist Type:  " + document.getElementById("option1").value
                        + "<br><hr> Doctor name:  " + document.getElementById("option2").value
                        + "<br><hr> Date-Time:  " + document.getElementById("datetime").value
                        + "<br><hr> Message:  " + document.getElementById("message").value
                        + "<br><hr>"
            
            }).then(
            message => alert("Message Sent Succesfully")
            );
        }
    </script-->


  <!--it is used for sending messag on database only-->
  <!--script>
    function sendEmail() {
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "rashidiqbalbih@gmail.com",
            Password: "BAE6DB226F6C775EAB64FA92C46893C8D60D",
            To: 'rk6612262@gmail.com',
            From: "rashidiqbalbih@gmail.com",
            Subject: "Appointment Form",
            Body: "Name: " + document.getElementById("name").value +
                "<br><hr> Phone no: " + document.getElementById("phone").value +
                "<br><hr> Email: " + document.getElementById("email").value +
                "<br><hr> Specialist Type: " + document.getElementById("option1").value +
                "<br><hr> Doctor name: " + document.getElementById("option2").value +
                "<br><hr> Date-Time: " + document.getElementById("datetime").value +
                "<br><hr> Message: " + document.getElementById("message").value +
                "<br><hr>"
        }).then(function (message) {
            alert("Message Sent Successfully");
        });
    }
  </script-->



</section>
<!--Contact section 2 end-->









<!--footer section starts -->
<section class="footer" >
     <div class="box-container container">

         <div class="box">
            <a href="tel:+91123456789"><i class="fas fa-phone"></i></a>
            <h3>phone number</h3>
            <p>+123-456-7890</p>
         </div>
         
         <div class="box">
            <a href="https://maps.app.goo.gl/4CbHDWfABDUEnU8E9"><i class="fas fa-map-marker-alt"></i></a>
            <h3>our address</h3>
            <p>Kolkata , India - 700109</p>
         </div>

         <div class="box">
            <i class="fas fa-clock"></i>
            <h3>opening hour</h3>
            <p>10:00am - 08:00pm</p>
         </div>

         <div class="box">
            <a href="mailto:rk6612262@gmail.com"><i class="fas fa-envelope"></i></a>
            <h3>email address</h3>
            <p>rk6612262@gmail.com</p>
         </div>
     </div>

     <div class="credit"> 
          &copy; copyright @ 2023 by  <span>Rashid Iqbal</span>
     </div>
</section>
<!--footer section end -->






<!--it is used for team section to scroll left and right - 1 -->
<!--swiper js link  -->
<script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>





<!--its is used for image sliding-->
<!--script>
  var myIndex = 0;
  carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
</script-->
  




<!-- custom js file link  -->
<script src="script.js"></script>

</body>
</html>
