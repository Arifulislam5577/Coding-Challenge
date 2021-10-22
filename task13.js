
function underScore(word) {
    let mainWord = word.toLowerCase().trim().split('_');
    let [first, second] = mainWord;
    console.log(`${first}${second.replace(second[0],second[0].toUpperCase())}`);
    
}



underScore("underscore_case");
underScore("first_name");
underScore("Some_Variable");
underScore(" calculate_AGE");
underScore("delayed_departure");

/*
underscore_case
first_name
Some_Variable 
 calculate_AGE
delayed_departure

*/