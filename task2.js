//Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!



let markBmi = 28.3;
let johnBmi = 23.9;

if (markBmi < johnBmi) {
    console.log(`John BMI is ${johnBmi} which is higher then Mark BMI`);
} else {
    console.log(`Mark BMI is ${markBmi} which is higher then John BMI`);
}