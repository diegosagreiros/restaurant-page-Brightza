
const bodyPage = document.getElementById('bodyPage');
let navBar = document.getElementById('navBar');

window.onload = function(){
const menu = document.getElementById("menu")
const navBar = document.getElementById("nav");
const menubg = document.getElementById("menu-bg")
menu.addEventListener("click",function(){
 menu.classList.toggle("change")
navBar.classList.toggle("change")
menubg.classList.toggle("change-bg")
},false);
}
const firebaseConfig = {
    apiKey: "AIzaSyAGLUfS2vh_cnLXykSupfoIyPlrfgUnkXk",
    authDomain: "brightza-booked-tables.firebaseapp.com",
    databaseURL: "https://brightza-booked-tables-default-rtdb.firebaseio.com",
    projectId: "brightza-booked-tables",
    storageBucket: "brightza-booked-tables.appspot.com",
    messagingSenderId: "775715306829",
    appId: "1:775715306829:web:994775d2c5b42cf6a70b04"
  };


 const firebase = initializeApp(firebaseConfig);
  var firestore = firebase.firestore();


let clientNameForm = document.getElementById('clientNameForm')
let clientLastNameForm = document.getElementById('clientLastNameForm')
let selectDateForm = document.getElementById('selectDateForm')
let numberOfAdults = document.getElementById('numberOfAdults')
let numberOfChildren = document.getElementById("numberOfChildren");
let submitButtonForm=document.getElementById("submitButtonForm")



const db = firestore.collection("contactData")

submitButtonForm.addEventListener('click',function(){
    clientNameInput = clientNameForm.value
    clientLastNameInput = clientLastNameForm.value
    selectDateInput = selectDateForm.value
    numberOfAdultsInput = numberOfAdults.value
    numberOfChildrenInput = numberOfChildren.value

    db.doc()
    .set({
name: clientNameInput,
lastName: clientLastNameInput,
date: selectDateInput,
adults: numberOfAdultsInput,
children: numberOfChildrenInput
    })
    .then(function(){
        console.log("Data Saved")
    })
    .catch(function(error) {
        console.log(error);
    })
})