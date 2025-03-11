// Write your code here!

// Step 1: Remove the <main> element with id 'main'
const mainElement = document.getElementById("main");
mainElement.remove();

// Step 2: Create a new <h1> element and assign it to the variable 'newHeader'
const newHeader = document.createElement("h1");

// Step 3: Set the id of 'newHeader' to 'victory'
newHeader.id = "victory";

// Step 4: Set the text content of 'newHeader' to "YOUR-NAME is the champion"
newHeader.textContent = "YOUR-NAME is the champion"; // Replace YOUR-NAME with your name

// Step 5: Append 'newHeader' to the body
document.body.append(newHeader);