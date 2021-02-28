const $logout = document.getElementById("logout");
$logout.addEventListener("click", () => {
  auth.signOut().then(() => {
    auth.signOut();
    window.location.href = "../login.html";
  });
});
