/* ATM dispensing cash by bills 10, 20, 50, 100 */

import * as console from "console";

enum Request {
  Ten = 10,
  Twenty = 20,
  Fifty = 50,
  Hundred = 100,
}
interface Handler {
  setNextRequestHandler(handler: Handler): Handler;
  handle(request: Request): string;
  handleFailedRequest(): string;
}

abstract class AbstractHandlers implements Handler {
  private nextRequestHandler!: Handler;
  setNextRequestHandler(handler: Handler): Handler {
    this.nextRequestHandler = handler;
    return handler;
  }

  handle(request: Request): string {
    if (this.nextRequestHandler) {
      return this.nextRequestHandler.handle(request);
    }
    return "";
  }

  handleFailedRequest(): string {
    return "So sorry the value you enter is not accepted 😔";
  }
}

/******* All Handlers *********/

class handleTenDollarBill extends AbstractHandlers {
  handle(request: Request): string {
    if (request === Request.Ten) {
      return `Thanks here is your ${request} dollars :)`;
    }
    console.log(
      `sorry handler[10] dont have those bills... forwarding to the next.`
    );
    return super.handle(request);
  }
}
class handleTwentyDollarBill extends AbstractHandlers {
  handle(request: Request): string {
    if (request === Request.Twenty) {
      return `Thanks here is your ${request} dollars :)`;
    }
    console.log(
      `😔 sorry handler[20] dont have those bills... forwarding to the next.`
    );
    return super.handle(request);
  }
}
class handleFiftyDollarBill extends AbstractHandlers {
  handle(request: Request): string {
    if (request === Request.Fifty) {
      return `Thanks here is your ${request} dollars :)`;
    }
    console.log(
      `😔 sorry handler[50] dont have those bills... forwarding to the next.`
    );
    return super.handle(request);
  }
}
class handleHundredDollarBill extends AbstractHandlers {
  handle(request: Request): string {
    if (request === Request.Hundred) {
      return `Thanks here is your ${request} dollars 😊`;
    }
    return super.handleFailedRequest();
  }
}

export class ChainOfResponsibility {
  private dollarBillHandler!: Handler;
  constructor() {
    this.dollarBillHandler = this.buildHandlerChain();
  }

  private buildHandlerChain() {
    const handleTenDollar = new handleTenDollarBill();
    const handleTwentyDollar = new handleTwentyDollarBill();
    const handleFiftyDollar = new handleFiftyDollarBill();
    const handleHundredDollar = new handleHundredDollarBill();

    handleTenDollar.setNextRequestHandler(handleTwentyDollar);
    handleTwentyDollar.setNextRequestHandler(handleFiftyDollar);
    handleFiftyDollar.setNextRequestHandler(handleHundredDollar);
    return handleTenDollar;
  }

  handleRequest(amount: number): string {
    return this.dollarBillHandler.handle(amount);
  }
}
