import { auth } from "./config.js"
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// lay the email va password
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const button = document.getElementById("loginButton");

const xulyDangKy= () =>{
    //lay value nguoi dung nhap vao
    const email = emailInput.value
    const password = passwordInput.value
  
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert('ok đã đăng ký thành công')
    window.location='./dangnhap.html'
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
}
button.addEventListener('click', xulyDangKy)