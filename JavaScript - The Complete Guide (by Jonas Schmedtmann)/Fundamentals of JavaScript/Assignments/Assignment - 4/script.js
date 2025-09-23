const country = "India";
const continent = "Asia";
let population = 1400000000;

const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

language = "Hindi";

// isIsland = true;

let halfPopulation = population / 2;

population++;
console.log(population);

const finlandPopulation = 6000000;
console.log(population > finlandPopulation);

const averagePopulation = 33000000;
console.log(population < averagePopulation);

const description = country + " is in " + continent + ", and its " + population + " people speak " + language;
console.log(description);