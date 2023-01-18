import { Counter } from "./Counter";

describe("Funciones de un contador", () => {

  test("Valor inicial debe ser 0", () => {
    const myCounter = new Counter();
    expect(myCounter.value).toBe(0);
  });

  test("incrementar contador de 0 a 1 debe devolver 1", () => {
    const myCounter = new Counter();
    const newValue = myCounter.increment();
    console.log(newValue);
    expect(newValue).toBe(1);
  });

  test("decrementar contador debe devolver -1", () => {
    const myCounter = new Counter();
    const finalValue = myCounter.decrement();
    expect(finalValue).toBe(-1);
  });

  test("Resetear el contador debe devolver 0", () => {
    const myCounter = new Counter();
    const finalValue = myCounter.reset();
    expect(finalValue).toBe(0);
  });

  test("incrementar contador de 0 a 2 debe devolver 2", () => {
    const myCounter = new Counter();
    myCounter.increment();
    const finalValue = myCounter.increment();
    expect(finalValue).toBe(2);
  });
});
