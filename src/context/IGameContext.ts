interface IGameContext {
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

    gameIsRunning: boolean

    setTheme: React.Dispatch<React.SetStateAction<"numbers" | "icons">>,
    setPlayers: React.Dispatch<React.SetStateAction<"1" | "2" | "3" | "4">>
    setGridSize: React.Dispatch<React.SetStateAction<"small" | "large">>

    setGameIsRunning: React.Dispatch<React.SetStateAction<boolean>>

}

export default IGameContext