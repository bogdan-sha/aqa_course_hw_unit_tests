class Employee {
  #salary = 0;

  constructor(firstName, lastName, profession, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
    this.#salary = salary;
  }

  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    if (typeof value !== 'string') throw new Error('Invalid first name');
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    if (typeof value !== 'string') throw new Error('Invalid last name');
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }
  set profession(value) {
    if (typeof value !== 'string') throw new Error('Invalid profession');
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }
  set salary(value) {
    if (typeof value !== 'number' || Number.isNaN(value) || value < 0) throw new Error('Invalid salary');
    this.#salary = value;
  }

}

class Company {
  #employees

  constructor(title, phone, address, employees = []) {
    this._title = title;
    this._phone = phone;
    this._address = address;
    this.#employees = employees;
  }

  addEmployee(employee) {
    if (!(employee instanceof Employee)) {
      throw new Error('Invalid Employee');
    }
    this.#employees.push(employee);
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this._title}\nАдрес: ${this._address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  get title() {
    return this._title;
  }
  set title(value) {
    if (typeof value !== 'string') throw new Error('Invalid title');
    this._title = value;
  }

  get phone() {
    return this._phone;
  }
  set phone(value) {
    if (typeof value !== 'number' || Number.isNaN(value) || value < 0) throw new Error('Invalid phone');
    this._phone = value;
  }

  get address() {
    return this._address;
  }
  set address(value) {
    if (typeof value !== 'string') throw new Error('Invalid address');
    this._address = value;
  }

}

export { Employee, Company };