
const players = {
    player1: {
        name: "Mario",
        speed: 4,
        maneuverability: 3,
        power: 3,
        points: 0
    },
    player2: {
        name: "Luigi",
        speed: 4,
        maneuverability: 3,
        power: 3,
        points: 0
    }
}

const parameters = {
    straight: 0.33,
    curve: 0.66
}

const rollDice = async () => {
    return Math.floor(Math.random() * 6) + 1
}

async function getRandomBlock() {
    let random = Number((Math.random() * 1).toFixed(2));
    let result;
    switch (true) {
        case random < parameters.straight:
            result = 'straight';
            break;
        case random < parameters.curve:
            result = 'curve';
            break;
        default:
            result = 'confrontation'
    }
    return result
}

async function playRaceEngine(character1, character2) {

    for (let i = 1; i <= 5; i++) {
        let block = await getRandomBlock();
        console.log(`Round ${i} : block ${block}`)
    }
}

(async function main() {
    console.log(`Game started with players: ${players.player1.name} and ${players.player2.name}`)
    await playRaceEngine(players.player1, players.player2)
})()

