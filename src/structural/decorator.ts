import * as console from "console";

function AddPrefixToUserName(title: string) {
  return function (
    target: unknown,
    functionName: string,
    descriptor: PropertyDescriptor
  ): void {
    const mainClassFunction = descriptor.value;
    descriptor.value = function (mame: string) {
      return mainClassFunction.call(this, `${title}.${mame}`);
    };
  };
}

export class Decorator {
  @AddPrefixToUserName("Dr")
  showUsername(name: string): void {
    console.info(name);
  }
}
