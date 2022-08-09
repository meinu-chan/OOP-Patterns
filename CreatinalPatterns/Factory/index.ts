//Possible employee type
type PossibleEmployee = 'fullTime' | 'partTime' | 'temporary' | 'contractor';

//interface for employers
interface Employee {
  hourly: string;
  type: PossibleEmployee;
  getInfo: () => void;
}

//concrete employers
class FullTime implements Employee {
  hourly: string = '$12';
  type: PossibleEmployee = 'fullTime';

  getInfo = () => {
    console.log(`${this.type}: rate ${this.hourly}\\hour`);
  };
}

class PartTime implements Employee {
  hourly: string = '$11';
  type: PossibleEmployee = 'partTime';

  getInfo = () => {
    console.log(`${this.type}: rate ${this.hourly}\\hour`);
  };
}

class Temporary implements Employee {
  hourly: string = '$10';
  type: PossibleEmployee = 'temporary';

  getInfo = () => {
    console.log(`${this.type}: rate ${this.hourly}\\hour`);
  };
}

class Contractor implements Employee {
  hourly: string = '$15';
  type: PossibleEmployee = 'contractor';

  getInfo = () => {
    console.log(`${this.type}: rate ${this.hourly}\\hour`);
  };
}

//Factory
class Factory {
  create(type: PossibleEmployee) {
    let employee: Employee;

    switch (type) {
      case 'fullTime':
        employee = new FullTime();
        break;

      case 'partTime':
        employee = new PartTime();
        break;

      case 'temporary':
        employee = new Temporary();
        break;

      case 'contractor':
        employee = new Contractor();
        break;

      default:
        throw new Error('Invalid employee type.');
    }

    return employee;
  }
}

function init() {
  const factory = new Factory();

  const employees: Employee[] = [];

  employees.push(factory.create('fullTime'));
  employees.push(factory.create('contractor'));
  employees.push(factory.create('temporary'));
  employees.push(factory.create('partTime'));
  employees.push(factory.create('fullTime'));

  employees.forEach((employee) => employee.getInfo());
}

init();
