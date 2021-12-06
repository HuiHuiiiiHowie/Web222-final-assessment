/********************************************************************
**I declare that my assignment is wholly my own work in accordance with Seneca Academic Policy.
**No part of this assignment has been copied manually or electronically from any other source (including web sites)
**except for the information supplied by the WEB222 instructors and / or made available in this assignment for my use.
**I also declare that no part of this assignment has been distributed to other students.
**Name: Hui Chen
**Dated: 2021/12/5
********************************************************************/



function validateForm() {

    clearErrors(); // Clear error message area
    var result = validateFirstName();          // Call firstName validation function
        result = validateLastName() && result; // Call lastName validation function
        result = validatePassword() && result; // Call password and confirmPassword validation function
        result = validateUsername() && result; // Call username validation function
        result = checkEducationStatus() && result; // Call educationStatus validation function
        result = validateAge() && result;      // Call age validation function

    return result;

  }


//************************************************
//** This function is used to verify the firstName
//************************************************
function validateFirstName() {

    var FirstNameMessageRules="<p> - Please enter alphabetic characters with a capital letter in the first character</p>";

    var FirstName = document.querySelector("#firstName").value;
    FirstName = FirstName.trim();
    var FirstNameLength = FirstName.length;

    // check if the firstName is empty
    if (FirstNameLength == 0) {
      showErrors("<p><mark>FirstName</mark><br /> - The firstname field can not be left empty or just blank characters<br />" + FirstNameMessageRules + "</p>");
      document.querySelector('#firstName').focus();
      return false;
    }

    //check if the FirstName's first character is capital letter
    if (FirstName.charAt(0) === FirstName.charAt(0).toLowerCase()) {
      showErrors("<p><mark>FirstName</mark><br /> - Firstname's first character must appear in capital letter!<br />" + FirstNameMessageRules + "</p>")
      document.querySelector('#firstName').focus();
      return false;
    }

    var count = 0;
    FirstName = FirstName.toUpperCase();
    for (var i=0;i<FirstNameLength;i++ ) {
      if (! ( (FirstName.charCodeAt(i) > 64) && (FirstName.charCodeAt(i) < 91) ) ) {
       count++;
       break;
      }
    }

    //check if the firstname are all alphabetic characters
    if(count) {
      showErrors("<p><mark>FirstName</mark><br /> - Only alphabetic characters are allowed for the firstname<br />" + FirstNameMessageRules + "</p>");
      document.querySelector('#firstName').focus();
      return false;
    }

   return true;

}



//************************************************
//** This function is used to verify the lastName
//************************************************
function validateLastName() {

  var LastNameMessageRules="<p> - Please enter alphabetic characters with a capital letter in the first character</p>";

  var LastName = document.querySelector("#LastName").value;
  LastName = LastName.trim();
  var LastNameLength = LastName.length;

  // check if the lastname is empty
  if (LastNameLength == 0) {
    showErrors("<p><mark>LastName</mark><br /> - The lastname field can not be left empty or just blank characters<br />" + LastNameMessageRules + "</p>");
    document.querySelector('#LastName').focus();
    return false;
  }

  //check if the lastname's first character is capital letter
  if (LastName.charAt(0) === LastName.charAt(0).toLowerCase()) {
    showErrors("<p><mark>LastName</mark><br /> - Lastname's first character must appear in capital letter!<br />" + LastNameMessageRules + "</p>")
    document.querySelector('#LastName').focus();
    return false;
  }

  var countNonAlpha = 0;
  LastName = LastName.toUpperCase();
  for (var i=0;i<LastNameLength;i++ ) {
    if (! ( (LastName.charCodeAt(i) > 64) && (LastName.charCodeAt(i) < 91) ) ) {
     countNonAlpha++;
     break;
    }
  }

  // check if the lastName are all alphabetic characters
  if(countNonAlpha) {
    showErrors("<p><mark>LastName</mark><br /> - Only alphabetic characters are allowed for the lastname<br />" + LastNameMessageRules + "</p>");
    document.querySelector('#LastName').focus();
    return false;
  }

 return true;
}



//*******************************************************************
//** This function is used to verify the password and confirmPassword
//*******************************************************************
function validatePassword() {

  var PasswordMessageRules ="<p> - Please enter a minimum of 6 alphabetic characters with a uppercase first letter and with at least a dight</p>";

  var Password = document.querySelector("#Password").value;
  Password = Password.trim();
  var PasswordLength = Password.length;

  var ConfirmationPassword = document.querySelector("#ConfirmPassword").value;
  ConfirmationPassword = ConfirmationPassword.trim();
  var ConfirmPasswordLength = ConfirmationPassword.length;

  //check if Password is at least 6 characters
  if (PasswordLength < 6) {
    showErrors("<p><mark>Password</mark><br /> - Password must be at least 6 characters and can not be left empty or just blank characters<br />" + PasswordMessageRules + "</p>");
    document.querySelector('#Password').focus();
    return false;
  }

  var count1 = 0;
  var count2 = 0;
  for (i = 0; i < PasswordLength; i++) {
    if (Password.charCodeAt(i) >= 65 && Password.charCodeAt(i) <= 90) {
      count1 += 1;
    }
    if (Password.charCodeAt(i) >= 48 && Password.charCodeAt(i) <= 57) {
      count2 += 1;
    }
  }
  //check if have at least 1 uppercase letter
  if (count1 == 0) {
    showErrors("<p><mark>Password</mark><br /> - Password must have at least 1 uppercase letter!<br />" + PasswordMessageRules + "</p>");
    document.querySelector('#Password').focus();
    return false;
  }

  //check if have at least 1 digit
  if (count2 == 0) {
    showErrors("<p><mark>Password</mark><br /> - Password must have at least 1 digit!<br />" + PasswordMessageRules + "</p>");
    document.querySelector('#Password').focus();
    return false;
  }

  //check if start with an alphabet
  if (!((Password.charCodeAt(0) >= 65 && Password.charCodeAt(0) <= 90) ||
      (Password.charCodeAt(0) >= 97 && Password.charCodeAt(0) <= 122))) {
        showErrors("<p><mark>Password</mark><br /> - Password must start with an alphabet!<br />" + PasswordMessageRules + "</p>");
        document.querySelector('#Password').focus();
        return false;
  }

  //check if ConfirmPassword is empty
  if (ConfirmPasswordLength == 0) {
    showErrors("<p><mark>ConfirmPassword</mark><br /> - ConfirmPassword field can not be left empty or just blank characters<br /></p>");
    document.querySelector('#ConfirmPassword').focus();
    return false;
  }

  // Password matching
  if(Password != ConfirmationPassword){
    showErrors("<p><mark>ConfirmPassword</mark><br /> - The confirm password is not same with password, please check it and re-enter<br /></p>");
    document.querySelector('#ConfirmPassword').focus();
    return false;
  }

  return true;
}


//************************************************
//** This function is used to verify the username
//************************************************
function validateUsername() {

  var UsernameMessageRules ="<p> - Please enter a minimum of 6 alphabetic characters and start with an alphabet</p>";

  var username = document.querySelector("#Username").value;
  username = username.trim();
  var usernameLength = username.length;

    //check if Password is at least 6 characters
    if (usernameLength < 6) {
      showErrors("<p><mark>Username</mark><br /> - Username must be at least 6 characters and can not be left empty or just blank characters<br />" + UsernameMessageRules + "</p>");
      document.querySelector('#Username').focus();
      return false;
    }

    //check if start with an alphabet
    if (!((username.charCodeAt(0) >= 65 && username.charCodeAt(0) <= 90) ||
        (username.charCodeAt(0) >= 97 && username.charCodeAt(0) <= 122))) {

      showErrors("<p><mark>Username</mark><br /> - Username must start with an alphabet!<br />" + UsernameMessageRules + "</p>");
      document.querySelector('#Username').focus();
      return false;
    }

  return true;
}



//*****************************************************************************************
//** This function is used to check if user choose at least one option for Education Status
//*****************************************************************************************
function checkEducationStatus() {
  var radioNumber = document.signup.educationStatus.length;
  var oneChecked = false;

  for (var i = 0; i < radioNumber; i++) {
    if (document.signup.educationStatus[i].checked == true) {
      oneChecked = true;
    }
  }
  // check if user choose one button
  if (!oneChecked) {
     showErrors("<p><mark>Education Status</mark><br /> - None checked for education status, please choose one<br /></p>");
     return false;
  }

  return true;
}



//*****************************************************************************************
//** This function is used to verify age
//*****************************************************************************************
function validateAge() {

  var age = document.querySelector("#Age").value;
  age = age.trim();
  var AgeLength = age.length;

  //check if age field is empty
  if(AgeLength == 0){
    showErrors("<p><mark>Age</mark><br /> - Age field can not be left empty or just blank characters<br /></p>");
    document.querySelector('#Age').focus();
    return false;
  }

  //check if age is between 18 and 60
  if (age < 18 || age > 60){
    showErrors("<p><mark>Age</mark><br /> - Age field must between 18-60<br /></p>");
    document.querySelector('#Age').focus();
    return false;
  }
   return true;
}



// send errorMessage
function showErrors(messages) {
  document.querySelector('#errors').innerHTML += messages;
}


// clear errorMessage
function clearErrors() {
  document.querySelector('#errors').innerHTML = "";
 }