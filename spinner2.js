let string = "|/-/-|";
let count = 100;
for (let char of string) {
  setTimeout(() => {
    process.stdout.write(`\r${char}    `);
  }, (count += 200));
}
