class OrderManager {
  private orders: string[];

  constructor() {
    this.orders = [];
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  execute(command: any, ...args: string[]) {
    return command.execute(this.orders, ...args);
  }
}

class Command {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  private execute: any;

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  constructor(execute: any) {
    this.execute = execute;
  }
}

function PlaceOrderCommand(order: string, id: string) {
  return new Command((orders: string[]) => {
    orders.push(id);
    console.log(`You have successfully ordered ${order} (${id})`);
  });
}

function CancelOrderCommand(id: string) {
  return new Command((orders: string[]) => {
    const index = orders.indexOf(id);
    if (index !== -1) {
      orders.splice(index, 1);
    }
    console.log(`You have canceled your order ${id}`);
  });
}

function TrackOrderCommand(id: string) {
  return new Command(() => console.log(`Your order ${id} will arrive in 20 minutes.`));
}

const manager = new OrderManager();

manager.execute(PlaceOrderCommand("Pad Thai", "1234"));
manager.execute(TrackOrderCommand("1234"));
manager.execute(CancelOrderCommand("1234"));
