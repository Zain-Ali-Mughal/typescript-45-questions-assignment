/* Exercise 20:
Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries,
cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
*/
// Defining an array of the top 10 highest mountain peaks with country
var mountainPeaks = [
    "Mount Everest (Nepal)",
    "K2 (Pakistan)",
    "Kangchenjunga (Nepal)",
    "Lhotse (Nepal)",
    "Makalu (Nepal)",
    "Cho Oyu (Nepal)",
    "Dhaulagiri I (Nepal)",
    "Manaslu (Nepal)",
    "Nanga Parbat (Pakistan)",
    "Annapurna I (Nepal)",
];
// Printing the list of mountain peaks with their countries
console.log("Top 10 Highest Mountain Peaks in the World:");
mountainPeaks.forEach(function (peak) {
    console.log(peak);
});
