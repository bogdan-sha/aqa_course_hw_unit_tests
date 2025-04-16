class Employee {
  #salary;

  constructor(firstName, lastName, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this.#salary = salary;
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    if (typeof value !== 'string' || value.length < 2 || value.length > 50 || !/^[A-Za-z]+$/.test(value)) throw new Error('Invalid first name');
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    if (typeof value !== 'string' || value.length < 2 || value.length > 50 || !/^[A-Za-z]+$/.test(value)) throw new Error('Invalid last name');
    this._lastName = value;
  }

  get salary() {
    return this.#salary;
  }
  set salary(value) {
    if (typeof value !== 'number' || Number.isNaN(value) || value <= 0 || value >= 10000) throw new Error('Invalid salary');
    this.#salary = value;
  }

  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

class Developer extends Employee {
  constructor(firstName, lastName, salary, programmingLanguages = []) {
    super(firstName, lastName, salary);
    this.programmingLanguages = programmingLanguages;
  }

  addProgrammingLanguage(language) {
    if (typeof language !== 'string' || !language.trim()) {
      throw new Error('Invalid programming language');
    }
    this.programmingLanguages.push(language);
  }
}

class Manager extends Employee {
  constructor(firstName, lastName, salary, teamSize = 0) {
    super(firstName, lastName, salary);
    this.teamSize = teamSize;
  }

  increaseTeamSize(value = 1) {
    if (typeof value !== 'number' || Number.isNaN(value) || value < 0) throw new Error('Invalid team size');
    this.teamSize += value;
  }
}

class Designer extends Employee {

  constructor(firstName, lastName, salary, designTools = []) {
    super(firstName, lastName, salary);
    this.designTools = designTools;
  }

  addDesignTool(tool) {
    if (typeof tool !== 'string' || !tool.trim()) {
      throw new Error('Invalid design tools');
    }
    this.designTools.push(tool);
  }

}

class Company {
  #employees = [];

  constructor(title, phone, address, employees = []) {
    this._title = title;
    this._phone = phone;
    this._address = address;
    this.#employees = employees;
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee) || this.#employees.some(e => e.getFullName() === employee.getFullName())) {
      throw new Error('Invalid Employee');
    }
    this.#employees.push(employee);
  }

  get employees() {
    return this.#employees;
  }

  getEmployeesByProfession(profession) {
    if (typeof profession !== 'string' || !profession.trim()) {
      throw new Error('Invalid profession');
    }
    return this.#employees.filter(employee => employee.constructor.name === profession);
  }
}

export { Employee, Company, Designer, Developer, Manager };
