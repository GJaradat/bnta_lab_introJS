/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */

unitedKingdom = [
  {
    name: "Scotland",
    capital: "Edinburgh",
    population: 5454000,
    touristAttractions: ["Stirling Castle", "Loch Ness"],
  },
  {
    name: "England",
    capital: "London",
    population: 55980000,
  },
  {
    name: "Wales",
    capital: "Swansea",
    population: 3163000,
    touristAttractions: ["Snowdonia"],
  },
  {
    name: "Northern Ireland",
    capital: "Belfast",
    population: 1885000,
    touristAttractions: ["Titanic Museum", "Giant's Causeway"],
  },
];

/**
 * Q1. Add some tourist attractions to England
 */

//This is just in case we don't know which index it is at:
const englandIdx = unitedKingdom.findIndex(country => country.name === "England");
unitedKingdom[englandIdx].touristAttractions = ["London Eye", "London Bridge"];

console.log("Added the London Eye and London Bridge to England attractions");
/**
 * Q2. Change the capital of Wales to "Cardiff"
 */

const walesIdx = unitedKingdom.findIndex(country => country.name === "Wales");
unitedKingdom[walesIdx].capital = "Cardiff";

console.log("The capital of Wales has been changed to 'Cardiff'");

/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */

const irelandIdx = unitedKingdom.findIndex(country => country.name === "Northern Ireland");
irelandKeys = Object.keys(unitedKingdom[irelandIdx]);

console.log("The available keys for Ireland are: " + irelandKeys);

/**
 * Q4. Use an if statement to compare the population of Scotland to the population of Wales, and say which is bigger.
 */

function comparePopulation(country1,country2){
  if(country1.population > country2.population){
    return `${country1.name} has more people than ${country2.name}`;
  } else {
    return `${country2.name} has more people than ${country1.name}`;
  }
}

const scotlandIdx = unitedKingdom.findIndex(country => country.name === "Scotland");
console.log(comparePopulation(unitedKingdom[scotlandIdx],unitedKingdom[walesIdx]));

// console.log(unitedKingdom);