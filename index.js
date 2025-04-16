
function addPoints (team, points) {
    let number = Number(document.getElementById(team + "-score").textContent)
    let currentScore = number + points
    document.getElementById(team + "-score").textContent = currentScore;
}
