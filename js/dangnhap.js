import { auth } from "./config.js"
import { signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// lay the email va password
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const button = document.querySelector('.login-btn')

const xulyDangNhap= () =>{
    //lay value nguoi dung nhap vao
    const email = emailInput.value
    const password = passwordInput.value
  
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert ('ok đăng nhập thành công')
    window.location='./index.html'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
}
button.addEventListener('click', xulyDangNhap)