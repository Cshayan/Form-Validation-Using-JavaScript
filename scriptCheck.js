var pass = document.getElementById("psw");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var specialChar = document.getElementById("specialChar");
var passStatus = document.getElementById("passStatus");
var rePass = document.getElementById("rePsw");
// var emailVer = document.getElementById("email");

//emailChecker
var email = document.getElementById("email");

//for email
email.onfocus = function(){
    document.getElementById("messageEmail").style.display = "block";

}
email.onblur = function(){
    if(email.value === "")
    {
    document.getElementById("messageEmail").style.display = "none";
    }
    else
    {
    document.getElementById("messageEmail").style.display = "block";
    }
    document.getElementById("message2").style.display = "none";            
}
//emailChecking
email.onkeyup = function(){
    emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum|in)\b/;
    if(email.value.match(emailRegex))
    {
        mail.classList.remove("invalidEmail");
        mail.classList.add("validEmail");
        document.getElementById("message2").style.display = "block";        
        document.getElementById("emailVerify").innerHTML = "Valid email format!!";
        emailVerify.classList.remove("invalid");
        emailVerify.classList.add("valid");        
    }
    else
    {
        mail.classList.remove("validEmail");
        mail.classList.add("invalidEmail");
        document.getElementById("message2").style.display = "block";        
        document.getElementById("emailVerify").innerHTML = "Invalid email format!!";
        emailVerify.classList.remove("valid");
        emailVerify.classList.add("invalid");        
    }
}



//when user clicks the input feild for password
pass.onfocus = function(){
    document.getElementById("message").style.display = "block"; 
}
//when the input feild is not selected for password
pass.onblur = function(){
    document.getElementById("message").style.display = "none";
}

//when user starts typing
pass.onkeyup = function(){
    //validate small letters
    var lowerCaseLetters = /[a-z]/g;
    if(pass.value.match(lowerCaseLetters))
    {
         letter.classList.remove("invalid");
         letter.classList.add("valid");
    }
    else
    {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    //validate capital letters
    var capitalLetters = /[A-Z]/g;
    if(pass.value.match(capitalLetters))
    {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    }
    else
    {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    //valiadte numbers
    var numbers = /[0-9]/g;
    if(pass.value.match(numbers))
    {
        number.classList.add("valid");
        number.classList.add("invalid");
    }
    else
    {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    //validate length
    if(pass.value.length > 8)
    {
        length.classList.remove("invalid");
        length.classList.add("valid");
    }
    else
    {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }

    //validate special char
    var special = /[!@#\$%\^\&*\[\]{\}\\\|\>\<\?)\(+=._-]/g;
    if(pass.value.match(special))
    {
        specialChar.classList.remove("invalid");
        specialChar.classList.add("valid");
    }
    else
    {
        specialChar.classList.remove("valid");
        specialChar.classList.add("invalid");
    }
}

//toggling password visibility
function passwordToggle(){

    if(pass.type === "password")
    {
          pass.type = "text";
    }
    else
    {
        pass.type = "password";
    }
}



//passwordReVerifier
rePass.onfocus = function(){
    if(pass.value !=="")
    {
        if(rePass.value !=="")
        {
            if(pass.value === rePass.value)
            {
                passReVerify.classList.remove("invalid");
                passReVerify.classList.add("valid");
                document.getElementById("passReVerify").innerHTML = "Passwords matched!!";
                document.getElementById("rePsw").style.backgroundColor = "#55efc4";
            }
            else
            {
                document.getElementById("message1").style.display = "block";
                passReVerify.classList.remove("valid");
                passReVerify.classList.add("invalid");
                document.getElementById("passReVerify").innerHTML = "Two passwords do not match!";
                document.getElementById("rePsw").style.backgroundColor = "#FF9494";
            }
        }
    }
    if(pass.value === "" && rePass.value === "")
    {
    document.getElementById("message1").style.display = "none";
    document.getElementById("rePsw").style.backgroundColor = "#f1f1f1";
    }
}
rePass.onblur = function(){
    document.getElementById("message1").style.display = "none";
    document.getElementById("rePsw").style.backgroundColor = "#ddd";
    if(pass.value === "" && rePass.value === "")
    {
    document.getElementById("message1").style.display = "none";
    document.getElementById("rePsw").style.backgroundColor = "#f1f1f1";
    }

}

rePass.onkeyup = function(){
    document.getElementById("message1").style.display = "block";
    if(pass.value === rePass.value)
    {
        passReVerify.classList.remove("invalid");
        passReVerify.classList.add("valid");
        document.getElementById("passReVerify").innerHTML = "Passwords matched!!";
        document.getElementById("rePsw").style.backgroundColor = "#55efc4";
    }
    else
    {
        passReVerify.classList.remove("valid");
        passReVerify.classList.add("invalid");
        document.getElementById("passReVerify").innerHTML = "Two passwords do not match!";
        document.getElementById("rePsw").style.backgroundColor = "#FF9494";
    }
    if(pass.value === "" && rePass.value === "")
    {
      document.getElementById("message1").style.display = "none";
      document.getElementById("rePsw").style.backgroundColor = "#f1f1f1";
    }
}



