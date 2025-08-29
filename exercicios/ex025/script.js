function parimpar(n) {
  //funçao recursiva
  if (n % 2 == 0) {
    return "Par!";
  } else {
    return "Impar!";
  }
}
let res = parimpar(20);
console.log(res);
