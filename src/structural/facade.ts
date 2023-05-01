import * as console from "console";

class UserActiveStatus {
  status(): boolean {
    return true;
  }
}

class UserName {
  name(): string {
    return "Name";
  }
}

class LibraryWithNeededClass {
  protected getUserActiveStatus!: UserActiveStatus;
  protected getUserName!: UserName;

  getUsername(): string {
    this.getUserName = new UserName();
    return this.getUserName.name();
  }

  getStatus(): boolean {
    this.getUserActiveStatus = new UserActiveStatus();
    return this.getUserActiveStatus.status();
  }
}
export class Facade {
  private libraryWithNeededClass = new LibraryWithNeededClass();
  constructor() {}
  showUserDetails(): void {
    console.info("[Username]", this.libraryWithNeededClass.getUsername());

    console.info("[Active Status]", this.libraryWithNeededClass.getStatus());
  }
}
