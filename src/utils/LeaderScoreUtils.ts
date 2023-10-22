import { Player } from "../types/MultiPlayers";

/**
 * Calculates the winner based on player scores and provides related utilities.
 *
 * @param {Player[]} multiPlayersScore - An array of player objects with scores.
 * @returns {Object} An object containing winnerTitle, scoreSortedByScore, and isPlayerWinner functions.
 */

function calculateWinner(multiPlayersScore: Player[]) {
    // Clone the array to avoid modifying the original array
    const clonedScores = [...multiPlayersScore]

    // Sort the player scores in descending order
    clonedScores?.sort((a, b) => b.score - a.score)

    // Find players with the highest score
    const highestScorePlayers = clonedScores.filter((player) => player.score === clonedScores[0].score)

    // Determine the winner's title
    const winnerTitle = highestScorePlayers.length > 1 ? "It's a tie!" : `${clonedScores[0].name} Wins!`

    // Function to check if a specific player is a winner
    const isPlayerWinner = (playerMatch: Player) => {
        const playerFound = highestScorePlayers.find((player) => player.name === playerMatch.name)
        return playerFound !== undefined
    }

    // Return the winner's title, the sorting result, and the player check function
    return { winnerTitle, clonedScores, isPlayerWinner }
}

export default calculateWinner