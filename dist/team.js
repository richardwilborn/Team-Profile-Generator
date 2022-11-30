function executeTemplate(teamMember) {

  return new Promise((resolve, reject) => {
    var name = teamMember.getName();
    var occupation = teamMember.getRole();
    var id = teamMember.getId();
    var email = teamMember.getEmail();
    var info = "";

    if (occupation === "Manager") {
      var phoneNumber = teamMember.getPhoneNumber();
      info =
    `<div class="container">
      <div class="infoContainer">
          <div class="card">
            <h1>${name}</h1>
            <h2>Manager</h2>
            <ul>
              <p>ID Number: ${id}</p>
              <p>Email Address: ${email}</p>
              <p>Phone Number: ${phoneNumber}</p>
            </ul>
          </div>
        </div>
      </div>`;
    } 

    else if (occupation === "Engineer") {
      var githubAccount = teamMember.getGithub();
      info = 
    `<div class="container">
      <div class="infoContainer">
          <div class="card">
            <h1>${name}</h1>
            <h2>Engineer</h2>
            <ul>
              <p>ID Number: ${id}</p>
              <p>Email Address: ${email}</p>
              <p>Github: ${githubAccount}</p>
            </ul>
          </div>
        </div>
      </div>`;
    } 

    else {
      var education = teamMember.getSchool();
      info = 
    `<div class="container">
      <div class="infoContainer">
          <div class="card">
            <h1>${name}</h1>
            <h2>Intern</h2>
            <ul>
              <p>ID Number: ${id}</p>
              <p>Email Address: ${email}</p>
              <p>School: ${education}</p>
            </ul>
          </div>
        </div>
      </div>`;
    }

    resolve(info);
});
}

module.exports = executeTemplate;