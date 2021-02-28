const $btnSignUpV1 = document.querySelector("#btn-signup-v1");


$btnSignUpV1.addEventListener("click", (e) => {
  e.preventDefault();
  const $signupForm = document.querySelector("#signup-form");
  //   get user info
  let email = $signupForm["signup-email"].value;
  let password = $signupForm["signup-password"].value;
  let rePassword = $signupForm["signup-repassword"].value;
  let fName = $signupForm["signup-name"].value;
  if (password != rePassword) {
    alert("Xác nhận mật khẩu chưa đúng !");
  } else {
    //sign up the user
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        return db.collection("Users").doc(cred.user.uid).set({
          name: fName,
          email: email,
        });
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use": {
            alert(err.message);
            break;
          }
          case "auth/invalid-password": {
            alert(err.message);
            break;
          }
          case "auth/weak-password": {
            alert(err.message);
            break;
          }
          case "auth/invalid-email": {
            alert(err.message);
            break;
          }
        }
        return false;
      })
      .then((check) => {
        if (check !== false) window.location.href = "src/redirect-create.html";
      });
  }
});


