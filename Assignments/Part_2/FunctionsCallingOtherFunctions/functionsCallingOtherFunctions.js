/*

Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.

To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.

Call describePopulation with data for 3 countries of your choice.

*/

const worldPopulation = 7900;

function percentageOfWorld(population) {
    return (population / worldPopulation) * 100;
}

function describePopulation(country, population) {
    return `${country} has ${population} people, which is about ${percentageOfWorld(population).toFixed(2)}% of the world`;
}

console.log(describePopulation('Turkey', 85));
console.log(describePopulation('USA', 332));
console.log(describePopulation('China', 1441));  