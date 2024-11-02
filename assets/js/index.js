// Déclaration de varaible
let randomNumber =  Math.floor(Math.random() * 100) + 1; 
let attempts = 0;
const maxAttempts = 5;

//Logique

document.getElementById("restart").style.display = "none";
document.getElementById("submitGuess").addEventListener("click", () => {
  const userGuess = Number(document.getElementById("guess").value);
  attempts++;
  if (userGuess === randomNumber) {
    document.getElementById("feedback").textContent = "Bravo, tu as trouvé le bon chiffre en " + attempts + " tentatives.";
    document.getElementById("restart").style.display = "block";
  } else if (attempts >= maxAttempts) {
    document.getElementById("feedback").textContent = "Tu n'as pas réussi à trouver le bon chiffre. Voici la bonne réponse: " + randomNumber + ".";
    document.getElementById("feedback").style.color = "red";
    document.getElementById("restart").style.display = "block";
  } else if (userGuess < randomNumber) {
    document.getElementById("feedback").textContent = "C'est plus !";
  } else {
    document.getElementById("feedback").textContent = "C'est moins !";
  }
});

// document.getElementById("submitGuess").style.display = "none";
document.getElementById("restart").addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("feedback").textContent = "";
  document.getElementById("restart").style.display = "none";
  document.getElementById("guess").value = "";
})