export function add(numA, numB) {
  if (typeof numA !== "number" || typeof numB !== "number") {
    return "Mohon Input Sebuah Angka!";
  }

  return numA + numB;
}
