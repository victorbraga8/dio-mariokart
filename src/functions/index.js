

export const players = {
    player1: {
        name: "Mario",
        speed: 4,
        maneuverability: 3,
        power: 3,
        blocks: [],
        winnerPoints: 0
    },
    player2: {
        name: "Luigi",
        speed: 3,
        maneuverability: 4,
        power: 4,
        blocks: [],
        winnerPoints: 0
    }
};


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
    // const info = {
    //     random,
    //     result
    // }
    return result
}

function translateParameters(block) {
    if (block == "straight") {
        return 'speed'
    }
    if (block == "curve") {
        return 'maneuverability'
    }
    if (block == "confrontation") {
        return 'power'
    }
    return
}

async function logResult(info) {
    const { result, rollDice1, rollDice2, player1, player2 } = info;
    let winnerName;

    const param = translateParameters(result);
    const bp1 = rollDice1 + player1[param];
    const bp2 = rollDice2 + player2[param];

    if (bp1 > bp2) {
        player1.winnerPoints++;
        player1.blocks.push(result);
        winnerName = player1.name;
    } else if (bp2 > bp1) {
        player2.winnerPoints++;
        player2.blocks.push(result);
        winnerName = player2.name;
    } else {
        winnerName = "Draw";
    }

    const finalResult = {
        result,
        player1: { character: player1.name, blockPoint: bp1, winnerPoints: player1.winnerPoints },
        player2: { character: player2.name, blockPoint: bp2, winnerPoints: player2.winnerPoints },
        winner: winnerName
    };

    console.log(finalResult);
    return finalResult;
}

export async function playRaceEngine() {
    const { player1, player2 } = players;

    for (let i = 1; i <= 5; i++) {
        const result = await getRandomBlock();
        const rollDice1 = await rollDice();
        const rollDice2 = await rollDice();

        await logResult({ result, rollDice1, rollDice2, player1, player2 });
    }

    console.log("** Blocks Winned by Player **");
    console.log(player1.name, player1.blocks);
    console.log(player2.name, player2.blocks, "\n");

    console.log(`Wins: ${player1.name} ${player1.winnerPoints} | ${player2.name} ${player2.winnerPoints} `);

    const champ =
        player1.winnerPoints > player2.winnerPoints
            ? player1.name
            : player2.winnerPoints > player1.winnerPoints
                ? player2.name
                : "Draw";
    console.log("Winner:", champ);
}

