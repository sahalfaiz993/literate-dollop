// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
// import { getFirestore ,collection, addDoc} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { getAuth ,createUserWithEmailAndPassword,  } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const firebaseConfig = {
 apiKey: "AIzaSyAtsHf_mRn4eAqPBsZT3eO6dIHilet2LvE",
 authDomain: "hackatone-5a5ec.firebaseapp.com",
 projectId: "hackatone-5a5ec",
 storageBucket: "hackatone-5a5ec.appspot.com",
 messagingSenderId: "951760425437",
 appId: "1:951760425437:web:b26c41c2447900c272e634"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

var btn = document.getElementById("btn")
btn.addEventListener("click",()=>{

var email=document.getElementById("email").value
var password=document.getElementById("password").value;
var fname=document.getElementById("fname").value
var lname=document.getElementById("lname").value
   
createUserWithEmailAndPassword(auth, email, password,fname,lname)
 .then(async(userCredential)=> {

   // Signed in 
   const user = userCredential.user;
   swal("Good job!", "YOUR SIGNUP IS !", "success");
   window.location.href="./login.html"
   // ...
 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   console.log(errorCode,"errorCode");
   console.log(errorMessage,"errorMessage");
   // ..
 });

})






