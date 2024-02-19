/*

The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.

To calculate the percentage, divide the given population value by 7900 and then multiply by 100.

Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.

Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations).

*/

const worldPopulation = 7900;

function percentageOfWorld1(population) {
    return (population / worldPopulation) * 100;
}

let USA = percentageOfWorld1(332);
console.log(USA);

let China = percentageOfWorld1(1441);
console.log(China);

let India = percentageOfWorld1(1408);
console.log(India);


const percentageOfWolrd2 = function (population) {
    return (population / worldPopulation) * 100;
}

USA = percentageOfWolrd2(332);
console.log(USA);

China = percentageOfWolrd2(1441);
console.log(China);

India = percentageOfWolrd2(1408);
console.log(India);