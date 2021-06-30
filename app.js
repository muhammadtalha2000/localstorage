// var username = document.getElementById("username");
// var email = document.getElementById("email");
// var password = document.getElementById("password");
// var contact_number = document.getElementById("contact");

var heading1 = document.getElementById("heading1");
var heading2 = document.getElementById("heading2");
var heading3 = document.getElementById("heading3");
var heading4 = document.getElementById("heading4");



var login_details = {
    name: "",
    email_address: "",
    password_user: "",
    contact_no: "",
}



function submit() {
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var contact_number = document.getElementById("contact");
    login_details.name = username.value;
    login_details.email_address = email.value;
    login_details.password_user = password.value;
    login_details.contact_no = contact_number.value;
    localStorage.setItem("login_details", JSON.stringify(login_details))
    username.value = ""
    email.value = ""
    password.value = ""
    contact_number.value = ""
}

function showDetails() {
    var data = localStorage.getItem("login_details")
    var convert = JSON.parse(data)
    heading1.innerText = "Name :" + " " + login_details.name;
    heading2.innerText = "Email :" + " " + login_details.email_address;
    heading3.innerText = "Password : " + " " + login_details.password_user;
    heading4.innerText = "Contact Number :" + " " + login_details.contact_no;

}

function clearDetails(){
    localStorage.clear("login_details");
    heading1.innerText = ""
    heading2.innerText = ""
    heading3.innerText = ""
    heading4.innerText = ""
    

    
}