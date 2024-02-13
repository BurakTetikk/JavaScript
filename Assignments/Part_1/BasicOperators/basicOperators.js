/*
1-If your country split in half, and each half would contain half the population, then how many people would live in each half?

2-Increase the population of your country by 1 and log the result to the console.

3-Finland has a population of 6 million. Does your country have more people than Finland?

4-The average population of a country is 33 million people. Does you country have less people than the average country?

5-Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.
*/
const country = "Turkey";
const continent = "Asia";
const language = "Turkish";

let populationTurkey = 85;
let populationHalf = populationTurkey / 2;

populationTurkey += 1;
console.log(populationTurkey);

let populationFinland = 6;
console.log(populationTurkey > populationFinland);

let populationACountry = 33;
console.log(populationTurkey < populationACountry);

const description = country + " is in " + continent + ", and its " + populationTurkey + " million people speak " + language;
console.log(description);

