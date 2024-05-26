/* Exercise 21: Object:
They think of something you could store in a TypeScript Object. 
Write a program that creates Objects containing these items.
*/

// Define an interface to type the object
interface myInfo {
  name: string;
  fatherName: string;
  city: string;
  age: number;
  education: string;
  university: string;
  course: string;
  location: string;
  quarter: string;
  day: string;
  timing: string;
}

// Create an object with the specified properties
let data: myInfo = {
  name: "Zain Ali",
  fatherName: "Muhammad Aslam",
  city: "Nawabshah",
  age: 25,
  education: "Masters in Power Engineering (Ongoing)",
  university: "QUEST Nawabshah",
  course: "GIAIC",
  location: "Governor House Sindh",
  quarter: "1st",
  day: "Wednesday",
  timing: "9am to 12am",
};

// Print the object to the console
console.log(data);
