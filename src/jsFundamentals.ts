// Variables
const name = "Wilfred";
const age = 20;
console.log("Name:", name);
console.log("Age:", age);

// Function
function greet(person: string) {
  console.log(`Hi ${person}, welcome to the React world!`);
}
greet(name);

// Array
const hobbies = ["Reading", "Eating", "Sleeping"];
hobbies.forEach((hobby) => console.log("Hobby:", hobby));

// Object
const student = {
  name: "Wilfred",
  course: "CPE340",
  level: "Beginner",
};
console.log("Student Info:", student);

// DOM Manipulation (in React, this is only for the console demo lols)
document.addEventListener("DOMContentLoaded", () => {
  const title = document.createElement("h2");
  title.textContent = "This was added with plain JavaScript!";
  title.style.color = "pink";
  document.body.appendChild(title);
});

// Event Handling
document.addEventListener("click", () => {
  console.log("The user clicked on the page!");
});
