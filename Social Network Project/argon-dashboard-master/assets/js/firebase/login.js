//Sign In
const $btnLogin = document.querySelector("#sign-in");
$btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  const $loginForm = document.querySelector("#login-form");
  //get info
  let email = $loginForm["login-email"].value;
  let password = $loginForm["login-password"].value;
  if (email == "" || password == "") {
    alert("Không được bỏ trống");
  } else {
    //login the user
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        window.location.href = "./src/index.html";
      })
      .catch(() => {
        alert("Tài khoản hoặc mật khẩu không đúng ! ");
      });
  }
});
