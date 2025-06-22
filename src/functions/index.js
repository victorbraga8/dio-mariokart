
export const players = {
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

export const parameters = {
    straight: 0.33,
    curve: 0.66
}

export const rollDice = async () => {
    return Math.floor(Math.random() * 6) + 1
}

export async function getRandomBlock() {
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

async function logResult(info) {
    const { block, rollDice1, rollDice2, player1, player2 } = info;
    console.log(`Block: ${block}, ${player1.name} rolled ${rollDice1}, ${player2.name} rolled ${rollDice2}`);
}

export async function playRaceEngine(character1, character2) {

    const { player1, player2 } = players;

    let block
    for (let i = 1; i <= 5; i++) {
        block = await getRandomBlock();

        // console.log(`Round ${i} : block ${block}`)
    }
    let rollDice1 = await rollDice();
    let rollDice2 = await rollDice();

    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    const info = {
        block,
        rollDice1,
        rollDice2,
        player1,
        player2
    }

    if (block == "straight") {
        totalTestSkill1 = rollDice1 + character1.speed;
        totalTestSkill2 = rollDice2 + character2.speed;
    }
    if (block == "curve") {
        totalTestSkill1 = rollDice1 + character1.maneuverability;
        totalTestSkill2 = rollDice2 + character2.maneuverability;
    }

    if (block == "confrontation") {
        // totalTestSkill1 = rollDice1 + character1.power;
        let powerResult1 = rollDice1 + character1.power;
        let powerResult2 = rollDice2 + character2.power;

    }
    await logResult(info);
}