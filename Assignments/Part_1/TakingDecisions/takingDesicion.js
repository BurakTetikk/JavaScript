/*

If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).

After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.

*/

const country = "Turkey";
const continent = "Asia";
const language = "Turkish";

let populationTurkey = 85;

if (populationTurkey > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - populationTurkey} million below average`);
}