function isLeapYear(year) {
  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
    return year + ' is a leap year';
  } else {
    return year + ' is not leap year';
  }
}

console.log(isLeapYear(1900));
console.log(isLeapYear(2400));
console.log(isLeapYear(2022));
console.log(isLeapYear(2024));
