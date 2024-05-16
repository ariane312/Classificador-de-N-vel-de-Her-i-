document.getElementById('heroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var name = document.getElementById('heroName').value;
    var xp = parseInt(document.getElementById('heroXP').value);
    var level;

    if (xp < 1000) {
        level = 'Ferro';
    } else if (xp >= 1001 && xp <= 2000) {
        level = 'Bronze';
    } else if (xp >= 2001 && xp <= 5000) {
        level = 'Prata';
    } else if (xp >= 5001 && xp <= 7000) {
        level = 'Ouro';
    } else if (xp >= 7001 && xp <= 8000) {
        level = 'Platina';
    } else if (xp >= 8001 && xp <= 9000) {
        level = 'Ascendente';
    } else if (xp >= 9001 && xp <= 10000) {
        level = 'Imortal';
    } else {
        level = 'Radiante';
    }

    document.getElementById('result').innerText = `O Herói de nome ${name} está no nível de ${level}`;
});
