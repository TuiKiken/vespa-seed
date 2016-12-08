export default class Application {
  constructor(messages) {
    this.messages = messages;
  }

  start() {
    this.print(this.messages.start);
  }

  doSomething() {
    this.print(this.messages.perform);
  }

  print(message) {
    console.log(message);
  }
}
