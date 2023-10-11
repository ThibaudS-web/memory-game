import { createContext, useState } from 'react';
import IGameContext from './IGameContext';
import { Tile } from "../types/tile"

const initial: IGameContext = {
    gameOptions: {
        theme: 'numbers',
        players: '1',
        gridSize: 'small'
    },

    scoreMultiPlayers: {
        playerOne: 0,
        playerTwo: 0,
        playerThree: 0,
        playerFour: 0
    },

    scoreSinglePlayer: {
        move: 0,
        timer: 0
    },

    tiles: [],

    isRunningGame: false,
    isMultiPlayersGame: false,

    setTheme: () => { },
    setPlayers: () => { },
    setGridSize: () => { },

    setIsRunningGame: () => { },
    startGame: () => { },
    newGame: () => { },
    generateTiles: () => { }
}

export const GameContext = createContext(initial);

const GameContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [theme, setTheme] = useState(initial.gameOptions.theme)
    const [players, setPlayers] = useState(initial.gameOptions.players)
    const [gridSize, setGridSize] = useState(initial.gameOptions.gridSize)

    const [isMultiPlayersGame, setIsMultiPlayersGame] = useState(initial.isMultiPlayersGame)
    const [isRunningGame, setIsRunningGame] = useState(initial.isRunningGame)

    const [tiles, setTiles] = useState<Tile[]>([])

    const [numbersOfTiles, setnumbersOfTiles] = useState(8)

    const gameOptions = {
        theme,
        players,
        gridSize,
    }

    const selectSingleOrMultiPlayers = () => {
        if (players === "1") return
        else {
            setIsMultiPlayersGame(true)
        }
    }

    const generateTiles = () => {
        if (gridSize === 'large') setnumbersOfTiles(18)
        if (gridSize === 'small') setnumbersOfTiles(8)

        let tiles: Tile[] = []

        for (let i = 0; i < numbersOfTiles; i++) {
            tiles.push({
                id: (i + 1),
                content: i + 1,
                checked: false
            })
        }

        let copyTiles = tiles

        setTiles([...copyTiles, ...tiles])
    }

    const startGame = () => {
        generateTiles()
        selectSingleOrMultiPlayers()
        setIsRunningGame(true)

    }

    const newGame = () => {
        setTheme(initial.gameOptions.theme)
        setPlayers(initial.gameOptions.players)
        setGridSize(initial.gameOptions.gridSize)
        setIsRunningGame(false)
    }

    const value = {
        gameOptions,
        scoreMultiPlayers: initial.scoreMultiPlayers,
        scoreSinglePlayer: initial.scoreSinglePlayer,
        isRunningGame,
        isMultiPlayersGame,
        tiles,
        setTheme,
        setPlayers,
        setGridSize,
        setIsRunningGame,
        startGame,
        newGame,
        generateTiles
    }

    return <GameContext.Provider value={value}>
        {children}
    </GameContext.Provider>

}

export { GameContextProvider }