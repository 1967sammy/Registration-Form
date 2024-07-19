const firebaseConfig = {
    apiKey: "AIzaSyBpc0cXdSUVzbhwlM86WKIBI8mV9l9quXQ",
    authDomain: "registrationform-aebd2.firebaseapp.com",
    databaseURL: "https://registrationform-aebd2-default-rtdb.firebaseio.com",
    projectId: "registrationform-aebd2",
    storageBucket: "registrationform-aebd2.appspot.com",
    messagingSenderId: "83963639874",
    appId: "1:83963639874:web:f79640a4ffaeb2d72015db",
    measurementId: "G-Q9CJK2P6HL"
  };

  /// initialize firebase
firebase.initializeApp(firebaseConfig);


// reference your database
var registrationFormDB = firebase.database().ref("registrationForm");

document.getElementById("registrationForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var studentid = getElementVal("studentid");
  var dateofbirth = getElementVal("dateofbirth");
  var phonenumber = getElementVal("phonenumber");
  var address = getElementVal("address");
  var gender = getElementVal("check");
  var courseenrolled = getElementVal("courseenrolled");
  var yearofstudy = getElementVal("yearofstudy");

  saveMessages(name,email,studentid,dateofbirth,phonenumber,address,courseenrolled,yearofstudy,check);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("registrationForm").reset();
}

const saveMessages = (name, email,studentid,dateofbirth,phonenumber,address,courseenrolled,yearofstudy,check) => {
  var newRegistrationForm = registrationFormDB.push();

  newRegistrationForm.set({
    name: name,
    email: email,
    studentid:studentid ,
    dateofbirth:dateofbirth,
    phonenumber:phonenumber,
    address:address,
    courseenrolled:courseenrolled,
    yearofstudy:yearofstudy,
    Gender:check,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};