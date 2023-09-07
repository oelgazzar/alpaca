export function getRandomItem(array) {
  if (!Array.isArray(array)) {
    throw TypeError("Array is expected!");
  }
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
