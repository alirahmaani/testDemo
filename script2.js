var body = document.querySelector('body');


var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var confirmPassword = document.getElementById('confirmPassword');

var signup = document.getElementById('btn');

var massage = document.getElementById('massage1');
var massage2 = document.getElementById('massage2');
var massage3 = document.getElementById('massage3');
var massage4 = document.getElementById('massage4');

var validEmail;
var validPass;
var confirmPass;

signup.addEventListener('click', check);

var error = ["You can't use from space.", "Username can't be \"username\"", "Please fill out this filed.", "Use numbers, some characters ._ and letters."] 

var validChar = 0;
let temp = 0;

// password
var lowerCaseLetters = /[a-z]/g;
var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/g;


function check(){
  massage.innerHTML = "";
  if(username.value === 'username'){
    massage.innerHTML = error[1];
    username.style.backgroundColor = "rgb(255, 190, 190)";
    validChar = 1;
  }

  
  for(let j = 0 ; j < username.value.length ; j++){
    if(username.value[j].charCodeAt(0) >= 0 && username.value[j].charCodeAt(0) <= 45 || username.value[j].charCodeAt(0) == 47){
      massage.innerHTML = error[3];
      validChar = 1;
    }

    if(username.value[j].charCodeAt(0) >= 58 && username.value[j].charCodeAt(0) <= 64){
      massage.innerHTML = error[3];
      validChar = 1;
    }

    if(username.value[j].charCodeAt(0) >= 91 && username.value[j].charCodeAt(0) <= 94){
      massage.innerHTML = error[3];
      validChar = 1;
    }

    if(username.value[j].charCodeAt(0) == 96 || username.value[j].charCodeAt(0) >= 123 && username.value[j].charCodeAt(0) <= 127){
      massage.innerHTML = error[3];
      validChar = 1;
    }
  }

  // check fiil out
  if(username.value == '' || username.value == null){
    massage.innerHTML = error[2];
    validChar = 1;
  }

  if(email.value == '' || email.value == null){
    massage2.innerHTML = error[2];
    validChar = 1;
  }

  if(password.value == '' || password.value == null){
    massage3.innerHTML = error[2];
    validChar = 1;
  }

  if(confirmPassword.value == '' && confirmPassword.value == null){
    massage4.innerHTML = error[2];
    validChar = 1;
  }


  // email
  (function ValidateEmail(mail){
    if(email.value !== ''){
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
      {
        validEmail = email.value;
        validChar = 0;
      } else{
        massage2.innerHTML = "This address is invalid :("
        validChar = 1;
      }
       
    }
    
  })();


  // password
  var er = [];
  (function ValidatePassword(){
    //var lowerCaseLetters = /[a-z]/g;
    //var upperCaseLetters = /[A-Z]/g;
    //var numbers = /[0-9]/g;
    
    if(password.value !== ''){
      if(password.value.match(lowerCaseLetters)){
        temp++;
      }else{
        er.push("use [a-z]")
      }
  
      if(password.value.match(upperCaseLetters)){
        temp++;
      } else{
        er.push("use [A-Z]");
      }
  
      if(password.value.match(numbers)){
        temp++;
      } else{
        er.push("use [0-9]");
      }
      if(temp == 3){
        validPass = password.value;
      }
  
      massage3.innerHTML = er.join(', ');
  
    }
    
    

    

  })();



  //confirm validation
  (function confirmPass(){
    if(temp === 3){
      if(validPass !== confirmPassword.value){
        massage4.innerHTML = "Please try again";
      }

      if(validPass === confirmPassword.value){
        validConfirm = validPass;
      }
      
    }
  })();

  pass();
  
   
}


/* onfocus */

//username
username.onfocus = function(){
  username.placeholder = '';
}

username.onblur = function(){
  username.placeholder = 'Username';
}

//email
email.onfocus = function(){
  email.placeholder = '';
}

email.onblur = function(){
  email.placeholder = 'Email';
}

//pass
password.onfocus = function(){
  password.placeholder = '';
}

password.onblur = function(){
  password.placeholder = 'Password';
}

//confirm
confirmPassword.onfocus = function(){
  confirmPassword.placeholder = '';
}

confirmPassword.onblur = function(){
  confirmPassword.placeholder = 'Confirm password';
}



// main
function pass(){
  if(validChar == 0 && temp == 3 && validConfirm == validPass){
    signup.style.backgroundColor = '#80ff80';
    signup.innerHTML = "Welcome :)"
  }
}



















