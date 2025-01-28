export function add(numA, numB) {
  if (typeof numA === "number" || typeof numB === "number") {
    return numA + numB;
  } else {
    return "Mohon Input Sebuah Angka!";
  }
}
