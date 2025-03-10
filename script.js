let characters = {};

function addCharacter() {
    let name = document.getElementById("characterName").value.trim();
    let rating = parseFloat(document.getElementById("characterRating").value);

    if (name === "" || isNaN(rating) || rating < 1 || rating > 10) {
        alert("Geçerli bir karakter adı ve puan girin (1-10).");
        return;
    }

    if (!characters[name]) {
        characters[name] = { totalScore: 0, votes: 0 };
    }

    characters[name].totalScore += rating;
    characters[name].votes += 1;

    updateCharacterList();
}

function updateCharacterList() {
    let list = document.getElementById("characterList");
    list.innerHTML = "";

    for (let name in characters) {
        let avgScore = (characters[name].totalScore / characters[name].votes).toFixed(1);
        let listItem = document.createElement("li");
        listItem.textContent = `${name} - Ortalama Puan: ${avgScore} (${characters[name].votes} oy)`;
        list.appendChild(listItem);
    }
}
