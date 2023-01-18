const suma = (a, b) => {
  // si son string convertir en integer
  if (typeof a === "string") {
    a = Number(a);
    if (a == NaN) { return NaN }
  }

  if (typeof b === "string") {
    b = Number(b);
    if (b == NaN) { return NaN }
  }

  // Si algo es null devuelve null
  if (a == null || b == null) { return NaN }

  return a + b;
};
console.log(suma('1.2', 2.1));

export default suma;
