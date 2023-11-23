/*function submitForm() {
    // Prevent the form from submitting normally
    Event.preventDefault();

    // Collect form data
    var name = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var email = document.getElementById("email").value;
    var specialist = document.getElementById("option1").value;
    var doctor = document.getElementById("option2").value;
    var date = document.getElementById("date").value;

    // Make an AJAX call to your PHP script to save the data
    var xhr = new XMLHttpRequest();
    var url = "save_data.php";
    var params = "name=" + encodeURIComponent(name) +
                 "&number=" + encodeURIComponent(number) +
                 "&email=" + encodeURIComponent(email) +
                 "&specialist=" + encodeURIComponent(specialist) +
                 "&doctor=" + encodeURIComponent(doctor) +
                 "&date=" + encodeURIComponent(date);

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Handle the response from the server if needed
            if (xhr.responseText === "Success") {
                alert("Data saved successfully. Appointment confirmed!");
            } else {
                alert("Error: " + xhr.responseText);
            }
        }
    };

    xhr.send(params);
}


*/


/* 
The provided JavaScript code defines a function called submitForm(),
 which is intended to be called when a form is submitted. 
 This function is designed to collect form data,
  send it to a server using AJAX (Asynchronous JavaScript and XML),
   and handle the server's response. Here's a breakdown of the code:

Event.preventDefault();: This line attempts to prevent the form from submitting normally, 
which would result in a page reload. However, there is a mistake in this line. 
It should be event.preventDefault(); (with a lowercase "e") since JavaScript is case-sensitive.

The following lines extract values from various form fields using document.getElementById() and store them in variables:

name, number, email, specialist, doctor, and date are variables that hold the values
 entered by the user in respective form fields.
An AJAX call is initiated to send the form data to a server-side script (presumably PHP)
 for processing and saving. Here's what happens within this section:

var xhr = new XMLHttpRequest();: A new XMLHttpRequest object is created,
 which allows you to make HTTP requests from JavaScript.
var url = "save_data.php";: The URL to which the data will be sent is defined. 
In this case, it's assumed that there's a server-side PHP script named "save_data.php" that will handle the data.
var params = ...: Form data is collected and encoded into a query string format to be sent as parameters to the server.
The xhr.open("POST", url, true); line sets up the AJAX request. 
It specifies that it will be a POST request to the specified URL and is asynchronous (true).

xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); 
sets the request header to indicate that the content type is form data.

xhr.onreadystatechange = function () {...} defines a callback function to handle the response from the server.
 The function is executed when the state of the XMLHttpRequest changes.

Inside the callback function:

if (xhr.readyState === 4 && xhr.status === 200) {...} checks if the request has completed successfully 
(readyState 4) and the response status code is 200 (OK).
If the response text from the server is "Success," it displays an alert indicating that 
the data has been saved successfully.
If the response text is anything other than "Success," it displays an alert with an error message.
Finally, xhr.send(params); sends the POST request to the server with the form data as parameters.

Keep in mind that for this code to work as intended, 
you need to make sure that you have a server-side script named "save_data.php" that can handle 
the received data and respond with either "Success" or an error message. 
Additionally, you should correct the event handling by using event.preventDefault(); instead of Event.preventDefault();.





Can you provide an exampl

*/