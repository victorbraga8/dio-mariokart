
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
        speed: 3,
        maneuverability: 4,
        power: 4,
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
    const info = {
        random,
        result
    }
    return info
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
    let result;
    let winner;
    const { block, rollDice1, rollDice2, player1, player2 } = info;

    let player1Section = `${player1.name}: ${rollDice1} + ${player1[translateParameters(block)]} : Points: ${result = rollDice1 + player1[translateParameters(block)]}`;

    let player2Section = `${player2.name}: ${rollDice2} + ${player2[translateParameters(block)]} = Points: ${result = rollDice2 + player2[translateParameters(block)]}`;

    let winnerPoint = 0

    const finalResult = {
        block,
        player1: {
            name: player1.name,
            points: {
                blockPoint: rollDice1 + player1[translateParameters(block)],
                winnerPoint
            }
        },
        player2: {
            name: player2.name,
            points: {
                blockPoint: rollDice2 + player2[translateParameters(block)],
                winnerPoint
            }
        },
        result,
        winner
    }

    if (Number(finalResult.player1.points) > Number(finalResult.player2.points)) {
        finalResult.result = player1.name;
        finalResult.player1.points.winnerPoint = winnerPoint + 1
    }
    else if (Number(finalResult.player1.points) < Number(finalResult.player2.points)) {
        finalResult.result = player2.name;
        finalResult.player2.points.winnerPoint = winnerPoint + 1
    }
    else {
        finalResult.result = 'Draw';
    }

    if (finalResult.player1.points.winnerPoint > finalResult.player2.points.winnerPoint) {
        finalResult.winner = player1.name;
    }
    else if (finalResult.player1.points.winnerPoint < finalResult.player2.points.winnerPoint) {
        finalResult.winner = player2.name;
    }
    else {
        finalResult.winner = 'Draw';
    }

    console.log(`Block: ${finalResult.block} | ${finalResult.player1.name}: ${finalResult.player1.points.blockPoint} - ${finalResult.player2.name}: ${finalResult.player2.points.blockPoint} | Result: ${finalResult.result}\n`);

    // console.log(`Winner: ${finalResult.winner} with ${finalResult.player1.points.winnerPoint} points for ${player1.name} and ${finalResult.player2.points.winnerPoint} points for ${player2.name}\n`);
}

export async function playRaceEngine() {
    const { player1, player2 } = players;

    let block
    let random

    for (let i = 1; i <= 5; i++) {
        block = await getRandomBlock();
        random = block.random
        let rollDice1 = await rollDice();
        let rollDice2 = await rollDice();

        const info = {
            random,
            block: block.result,
            rollDice1,
            rollDice2,
            player1,
            player2
        }
        await logResult(info);
    }


}