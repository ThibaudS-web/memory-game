interface GameContext {
    gameOptions: {
        theme: "numbers" | "icons",
        players: "1" | "2" | "3" | "4",
        gridSize: "small" | "large",
    },

    scoreMultiPlayers: {
        playerOne: number,
        playerTwo: number,
        playerThree: number,
        playerFour: number,
    },

    scoreSinglePlayer: {
        move: number,
        timer: number,
    },
}

export default GameContext