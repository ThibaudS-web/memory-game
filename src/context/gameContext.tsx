import { createContext, useState } from 'react';
import IGameContext from './IGameContext';
import { Tile } from "../types/tile"
import { v4 as uuidv4 } from 'uuid'

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
    checkedTiles: [],
    isRunningGame: false,
    isMultiPlayersGame: false,

    setTheme: () => { },
    setPlayers: () => { },
    setGridSize: () => { },

    setIsRunningGame: () => { },
    startGame: () => { },
    newGame: () => { },
    restartGame: () => { },
    generateTiles: () => { },
    setCheckedTiles: () => { },
    compareTileValue: () => { },
    setScoreSinglePlayer: () => { }
}

export const GameContext = createContext(initial);

const GameContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [theme, setTheme] = useState(initial.gameOptions.theme)
    const [players, setPlayers] = useState(initial.gameOptions.players)
    const [gridSize, setGridSize] = useState(initial.gameOptions.gridSize)

    const [isMultiPlayersGame, setIsMultiPlayersGame] = useState(initial.isMultiPlayersGame)

    const [isRunningGame, setIsRunningGame] = useState(initial.isRunningGame)

    const [tiles, setTiles] = useState<Tile[]>([])
    const [checkedTiles, setCheckedTiles] = useState<Tile[]>([])

    const [numbersOfTiles, setnumbersOfTiles] = useState(8)

    const [scoreSinglePlayer, setScoreSinglePlayer] = useState(initial.scoreSinglePlayer)

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

    const shuffleTiles = (tiles: Tile[]) => {
        const tilesCopy = [...tiles]

        for (let i = 0; i < tiles.length; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            [tilesCopy[i], tilesCopy[j]] = [tilesCopy[j], tilesCopy[i]]
        }

        return tilesCopy
    }

    const generateTiles = () => {
        if (gridSize === 'large') setnumbersOfTiles(18)
        if (gridSize === 'small') setnumbersOfTiles(8)

        const tiles: Tile[] = []

        for (let i = 0; i < numbersOfTiles; i++) {
            tiles.push({
                id: (i + 1),
                doublonId: null,
                content: i + 1,
                matched: false,
                checked: false
            })
        }

        const copyTiles = tiles

        const giveDoublonID = [...copyTiles, ...tiles].map(tile => ({
            ...tile,
            doublonId: uuidv4()
        }))

        setTiles(shuffleTiles(giveDoublonID))
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
        setScoreSinglePlayer(initial.scoreSinglePlayer)
        setIsRunningGame(false)
        generateTiles()
    }

    const restartGame = () => {
        setCheckedTiles([])
        generateTiles()
        setScoreSinglePlayer((singlePlayerStats) => ({
            ...singlePlayerStats,
            move: initial.scoreSinglePlayer.move
        }))
    }

    const incrementScore = () => {
        setScoreSinglePlayer((singlePlayerStats) => ({
            ...singlePlayerStats,
            move: singlePlayerStats.move + 1
        }))
    }

    const compareTileValue = (checkedTiles: Tile[]) => {
        if (checkedTiles[0].id === checkedTiles[1].id) {
            checkedTiles.forEach((tile) => tile.matched = true)
            incrementScore()
        }
        console.log(checkedTiles)
        setCheckedTiles([])
    }

    const value = {
        gameOptions,
        scoreMultiPlayers: initial.scoreMultiPlayers,
        scoreSinglePlayer,
        isRunningGame,
        isMultiPlayersGame,
        tiles,
        checkedTiles,
        setCheckedTiles,
        setTheme,
        setPlayers,
        setGridSize,
        setTiles,
        setIsRunningGame,
        startGame,
        restartGame,
        setScoreSinglePlayer,
        newGame,
        generateTiles,
        compareTileValue
    }

    return <GameContext.Provider value={value}>
        {children}
    </GameContext.Provider>

}

export { GameContextProvider }