function* countUpToThree() {
  yield 1; // yield pause the generator function and returns a value, resuming from that point when called again
  yield 2;
  yield 3;
}

const counter = countUpToThree();
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next().value); // 3

