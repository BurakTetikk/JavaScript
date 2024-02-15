/*

Recreate the description variable from the last assignment, this time using the template literal syntax.

const description = country + " is in " + continent + ", and its " + populationTurkey + " million people speak " + language;

*/

const country = "Turkey";
const continent = "Asia";
const language = "Turkish";

let populationTurkey = 85;

const description = `${country} is in ${continent}, and its ${populationTurkey} million people speak ${language}`;
console.log(description);
