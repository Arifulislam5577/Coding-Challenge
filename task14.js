function fizzbuzz() {
  for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0) {
      console.log("fizz " + i);
    }
    if (i % 5 == 0) {
      console.log("buzz " + i);
    }
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizzbuzz " + i);
    }
  }
}

fizzbuzz();
