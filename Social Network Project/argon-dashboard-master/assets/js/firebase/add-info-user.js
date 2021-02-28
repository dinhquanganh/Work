auth.onAuthStateChanged((user) => {
  user ? getData(user) : getData("");
});

const $btnSignUpV2 = document.querySelector("#btn-signup-v2");
const $ = document.querySelector.bind(document);
$btnSignUpV2.addEventListener("click", (e) => {
  e.preventDefault();
  if ($("#input-address")!==undefined) auth.
});
