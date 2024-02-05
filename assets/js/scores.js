// Reference elements
const highScores = document.querySelector("#highscores");
const clearButton = document.querySelector("#clear");

// Listen for click events on clearbutton
clearButton.addEventListener("click", clearHighscores);

// Function to add scores to highscores board
function getScores() {
  // Get items from local storage
  var storageKeys = Object.entries(localStorage);
  // Sort entries
  storageKeys.sort(function (a, b) {
    return b[1] - a[1];
  });
  // Add entries to list
  for (let k = 0; k < storageKeys.length; k++) {
    let eachScore = document.createElement("li");
    eachScore.textContent = storageKeys[k].join(" - ");
    highScores.appendChild(eachScore);
  }
}

// Function to clear scores from localstorage
function clearHighscores() {
  // Clear localStorage
  localStorage.clear();
  location.reload();
}

// Display scores in list
getScores();
