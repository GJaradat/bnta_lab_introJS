/**
 * In these tasks you will need to manipulate the array below in order to answer the questions. Some answers will require you to store the result in a variable, others will need you to inspect the whole array.
 */

let stations = ["Dundee", "Edinburgh", "North Berwick", "Newcastle", "York", "Leeds", "Doncaster", "Peterborough"];

/**
 * Q1.
 * The East Coast Main Line doesn't stop at Peterborough! Add London Kings Cross to the end of the array to complete the line.
 */
stations.push("London Kings Cross");
console.log("Added London Kings Cross");
console.log(stations);



/**
 * Q2.
 * It doesn't go as far as Dundee either, so remove it from the start of the array.
 */
stations.shift();
console.log("Removed 'Dundee'");
console.log(stations);



/**
 * Q3.
 * How many stations are on the line?
 */

let stationCount = stations.length;

console.log("There are " + stationCount + " stations.");



/**
 * Q4.
 * Which station is the third stop?
 */

const thirdStation = stations[2];

console.log("The third station is " + thirdStation);


/**
 * Q5.
 * Someone put the wrong Berwick on the timetable! Update "North Berwick" to "Berwick-upon-Tweed".
 */
const nbStationIdx = stations.indexOf("North Berwick");
stations[nbStationIdx] = "Berwick-upon-Tweed";
console.log("Replaced 'North Berwick' with 'Berwick-upon-Tweed'");
console.log(stations);



/**
 * Q6.
 * How did Leeds get on there? Better remove it.
 */
const lStationIdx = stations.indexOf("Leeds");
stations.splice(lStationIdx, 1);
console.log("Removed 'Leeds'");
console.log(stations);



/**
 * Q7.
 * We forgot about Darlington! Add it to the route between Newcastle and York.
 */
const newcastleStationIdx = stations.indexOf("Newcastle");
stations.splice(newcastleStationIdx + 1, 0, "Darlington");
console.log("Added 'Darlington'");
console.log(stations);



/**
 * Q8.
 * Is Durham one of the stops?
 */

stoppingAtDurham = (stations.indexOf("Durham") !== -1);

console.log("This train stops at Durham: " + stoppingAtDurham);


/**
 * Q9.
 * If we are stopping at Durham, print "Yay Durham!" to the terminal. If not print "Aww...".
 */

if (stoppingAtDurham) {
  console.log("Yay Durham!");
} else {
  console.log("Aww...");
}