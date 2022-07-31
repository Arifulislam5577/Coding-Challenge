//LEVEL ONE

// Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall

//MARK

// let markWeights = 78;
// let markTall = 1.69;

// let markBmi = parseInt(markWeights / markTall ** 2);

// //JHON

// let jhonWeights = 78;
// let jhonTall = 1.88;

// let jhonBmi = parseInt(jhonWeights / jhonTall ** 2);

// let markHigherBmi = markBmi > jhonBmi;

// console.log(markBmi, jhonBmi, markHigherBmi);

//LEVEL TWO

// Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

// let markWeights = 95;
// let markTall = 1.88;

// let markBmi = parseInt(markWeights / markTall ** 2);

// //JHON

// let jhonWeights = 85;
// let jhonTall = 1.76;

// let jhonBmi = parseInt(jhonWeights / jhonTall ** 2);
// let markHigherBmi = markBmi > jhonBmi;
// console.log(markBmi,jhonBmi,markHigherBmi);

let BMI = (mass, tall) => {
  return parseInt(mass / tall ** 2);
};

let result = BMI(78, 1.88);

console.log(`${result} ❤️❤️❤️❤️❤️`);
