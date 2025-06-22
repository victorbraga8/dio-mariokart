import { players, playRaceEngine } from "./functions/index.js"

(async function main() {
    console.log(`Game started with players: ${players.player1.name} and ${players.player2.name}`)
    await playRaceEngine(players.player1, players.player2)
})()

