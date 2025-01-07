class Observable {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  private observers: any[];

  constructor() {
    this.observers = [];
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  subscribe(func: any) {
    this.observers.push(func);
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  unsubscribe(func: any) {
    this.observers = this.observers.filter((observer) => observer !== func);
  }

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  notify(data: any) {
    // biome-ignore lint/complexity/noForEach: <explanation>
    this.observers.forEach((observer) => observer(data));
  }
}
