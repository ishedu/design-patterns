import { ConcreteObserver, ManageSubjects } from "./src/behavioral";

/* Observer */

const subject = new ManageSubjects();
const observer1 = new ConcreteObserver("First Observer");
const observer2 = new ConcreteObserver("Second Observer");

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.emitChanges("Class has Started");

setTimeout(() => {
  subject.emitChanges("Class has Started Again");
}, 300);
