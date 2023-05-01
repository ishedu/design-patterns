import * as console from "console";

interface Subject {
  addObserver(observer: Observer): void;

  removeObserver(observer: Observer): void;

  closeObserver(): void;

  emitChanges(value: string): void;
}

interface Observer {
  next(value: string): void;
}

export class ManageSubjects implements Subject {
  isClosed = false;

  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    const itExist = this.observers.includes(observer);
    if (itExist || this.isClosed) {
      console.log("its closed");
    }
    this.observers.push(observer);
  }

  emitChanges(changes: string): void {
    console.log("Subject: Notifying all Observers ...");
    for (const observer of this.observers) {
      observer.next(changes);
    }
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index === -1) {
      return console.log("Subject: Nonexistent observer.");
    }

    this.observers.splice(index, 1);
    console.log("Subject: Detached an observer.");
  }

  closeObserver(): void {
    this.isClosed = true;
  }
}

export class ConcreteObserver implements Observer {
  state: string;
  constructor(state: string) {
    this.state = state;
  }

  next(value: string) {
    console.log(`Hey there I am ${this.state} ${value}`);
  }
}
