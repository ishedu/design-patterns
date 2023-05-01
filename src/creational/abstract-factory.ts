import * as console from "console";

interface AbstractFactoryInterface {
  createEmployee(): CreateEmployee;
  createDepartment(): CreateDepartment;
}

class CreateEmployee {
  create(): void {
    console.info("[Abstract Factory] Creating Employee...");
  }
}

class CreateDepartment {
  create(): void {
    console.log("[Abstract Factory] Creating Department....");
  }
}
export class AbstractFactory implements AbstractFactoryInterface {
  createEmployee() {
    return new CreateEmployee();
  }

  createDepartment(): CreateDepartment {
    return new CreateDepartment();
  }
}
