// Profile-gs

var idName = localStorage.getItem("azum-id-person");
(async (id) => {
  let result = await db.collection("Users").doc(id).get();
  result = result.data();
  document.getElementById("name-person").innerText = result.name;
})(idName);
