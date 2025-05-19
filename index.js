function sendMail() {
  var params = {
    password: document.getElementById("password").value,
    email: document.getElementById("email").value,

  };

  const serviceID = "service_lp7zq1o";
  const templateID = "template_nk0wzlu";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("password").value = "";
        document.getElementById("email").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}
