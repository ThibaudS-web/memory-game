import { Tile } from "../types/tile"

interface IGameContext {
    gameOptions: {
        theme: "numbers" | "icons"
        players: "1" | "2" | "3" | "4"
        gridSize: "small" | "large"
    }

    scoreMultiPlayers: {
        playerOne: number
        playerTwo: number
        playerThree: number
        playerFour: number
    }

    scoreSinglePlayer: {
        move: number
        timer: number
    }

    tiles: Tile[]
    checkedTiles: Tile[]
    numbersOfTiles: 8 | 18

    isRunningGame: boolean
    isMultiPlayersGame: boolean
    isTimerRunning: boolean
    isGameOver: boolean

    setTheme: React.Dispatch<React.SetStateAction<"numbers" | "icons">>
    setPlayers: React.Dispatch<React.SetStateAction<"1" | "2" | "3" | "4">>
    setGridSize: React.Dispatch<React.SetStateAction<"small" | "large">>
    setIsRunningGame: React.Dispatch<React.SetStateAction<boolean>>
    setCheckedTiles: React.Dispatch<React.SetStateAction<Tile[]>>
    setScoreSinglePlayer: React.Dispatch<React.SetStateAction<{ move: number, timer: number }>>
    setIsTimerRunning: React.Dispatch<React.SetStateAction<boolean>>
    setIsGameOver: React.Dispatch<React.SetStateAction<boolean>>
    startGame: () => void
    newGame: () => void
    restartGame: () => void
    generateTiles: () => void
    compareTileValue: (tile: Tile[]) => void
    stopTimer: () => void
    startTimer: () => void
}

export default IGameContext