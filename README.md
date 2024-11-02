
![Logo](./assets/img/1716296373896.jpg)


# Find the right number!

Small exercise with the help of Chatgpt, in order to continue learning Javascript. The goal is to find the right number in five attempts 🤖💻 .


## Screenshots

![App Screenshot](./assets/img/Capture%20d'écran%202024-11-02%20164408.png)
![App Screenshot](./assets/img/Capture%20d'écran%202024-11-02%20164416.png)


## Code Exemple
```javascript
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
```
## Languages

HTML
CSS
Javascript
## License

[MIT](https://choosealicense.com/licenses/mit/)

