function checkNumbers() {
  for (let i = 0; i <= 200; i++) {
    if (i % 2 == 0) {
      console.log(`${i} is even`);
    } else {
      console.log(`${i} is odd`);
    }
  }
}
checkNumbers();
