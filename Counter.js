export class Counter {
  constructor() {
    this.value = 0;
  }

  increment(){
    this.value = this.value + 1;
    return this.value;
  }

  decrement(){
    return this.value - 1;
  }

  reset(){
    this.value = 0;
    return this.value;
  }
}
