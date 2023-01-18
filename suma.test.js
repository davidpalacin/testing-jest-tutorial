import suma from "./suma";

test("sumar 1 + 2 tipo integers debe devolver 3", () => {
  expect(suma(1, 2)).toBe(3);
});

test("sumar 1 + 2 tipo Strings debe devolver 3", () => {
  expect(suma("1", "2")).toBe(3);
});

test("Con algún parámetro null debe devolver NaN", () => {
  expect(suma(null, 2)).toBe(NaN);
});

test("Si se pasan letras devolver NaN", () => {
  expect(suma("hola mundo!", 2)).toBe(NaN);
});

test("Si se pasan decimales devolver la suma correctamente", () => {
  expect(suma(1.2, 2.1)).toBe(3.3);
});

test("Si se pasan decimales en forma de string devolver la suma correctamente", () => {
  expect(suma('1.2', 2.1)).toBe(3.3);
});