class Employee {
  #salary

  constructor(firstName, lastName, profession, salary) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._profession = profession;
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

  get profession() {
    return this._profession;
  }
  set profession(value) {
    if (typeof value !== 'string' || !value.trim() || !/^[A-Za-z ]+$/.test(value)) throw new Error('Invalid profession');
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }
  set salary(value) {
    if (typeof value !== 'number' || Number.isNaN(value) || value <= 0 || value >= 10000) throw new Error('Invalid salary');
    this.#salary = value;
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
    if (!(employee instanceof Employee)) {
      throw new Error('Invalid Employee');
    }
    this.#employees.push(employee);
  }

  getEmployees() {
    return this.#employees;
  }

  findEmployeeByName(firstName) {
    const employee = this.#employees.find(employee => employee.firstName === firstName);
    if (!employee) {
      throw new Error('Employee not found');
    }
    return employee;
  }

  #getEmployeeIndex(firstName) {
    return this.#employees.findIndex(employee => employee.firstName === firstName);
  }

  removeEmployee(firstName) {
    const index = this.#getEmployeeIndex(firstName);
    if (index === -1) {
      throw new Error('Employee with searched name not found');
    }
    this.#employees.splice(index, 1);
  }

  getTotalSalary() {
    return this.#employees.reduce((sum, employee) => sum + employee.salary, 0);
  }
}

export { Employee, Company };
