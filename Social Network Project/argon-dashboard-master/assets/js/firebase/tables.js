// listen for auth status changes
auth.onAuthStateChanged((user) => {
  user ? getData(user) : getData("");
});

// Get data
var getData = (user) => {
  if (user !== "") {
    getInfomationPersons(user);
  }
};

var getInfomationPersons = async (user) => {
  let result = await db.collection("Users").get(),
    tablePerson = [],
    listFamilar = "";
  await result.docs.map((doc) => {
    if (doc.id !== user.uid) tablePerson.push({ id: doc.id, ...doc.data() });
  });
  console.log(tablePerson);

  for (let person of tablePerson) {
    listFamilar += `  <tr>
                      <th scope="row">
                        <div class="media align-items-center">
                          <a href="#" class="avatar rounded-circle mr-3">
                            <img alt="Image placeholder" src="../assets/img/theme/team-1.jpg">
                          </a>
                          <div class="media-body">
                            <span class="name mb-0 text-sm">${person.name}</span>
                          </div>
                        </div>
                      </th>
                      <td></td>
                      <td class="address">
                        Ha Noi
                      </td>
                      <td>
                        <div class="avatar-group">
                          <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip"
                            data-original-title="Ryan Tompson">
                            <img alt="Image placeholder" src="../assets/img/theme/team-1.jpg">
                          </a>
                          <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip"
                            data-original-title="Romina Hadid">
                            <img alt="Image placeholder" src="../assets/img/theme/team-2.jpg">
                          </a>
                          <a href="#" class="avatar avatar-sm rounded-circle" data-toggle="tooltip"
                            data-original-title="Alexander Smith">
                            <img alt="Image placeholder" src="../assets/img/theme/team-3.jpg">
                          </a>
                        </div>
                      </td>
                      <td>
                        <a href="./profile-gs.html" class="btn btn-sm btn-primary" id="${person.id}" onclick="saveID(this)">View Profile</a>
                      </td>
                      <td>
                        <a href="#!" class="btn btn-sm btn-primary">Add Friend</a>
                      </td>
                      <td class="text-right">
                        <div class="dropdown">
                          <a class="btn btn-sm btn-icon-only text-light" href="#" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-ellipsis-v"></i>
                          </a>
                          <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                          </div>
                        </div>
                      </td>
                    </tr>`;
  }
  document.getElementById("list-familiar").innerHTML = listFamilar;
};

function saveID(info) {
  console.log(info.id)
  localStorage.setItem("azum-id-person", info.id);
}
