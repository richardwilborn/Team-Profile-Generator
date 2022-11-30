const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, education) {
    super(name, id, email);
    this.education = education;
  }

  getRole() {
    return 'Intern';
  }

  getSchool() {
    return this.education;
  }   
}

module.exports = Intern;