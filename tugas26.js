let x = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
x.forEach((number) => {
  let y = isFinite(number);
  if (y === true) {
    console.log(`Angka ${number} NOT Infinity`);
  } else {
    console.log(`Angka ${number} Infinity`);
  }
});
