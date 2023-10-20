import { createContext, useState } from 'react'
import IGameContext from './IGameContext'
import { Tile } from "../types/tile"
import { v4 as uuidv4 } from 'uuid'
import { iconComponents } from '../utils/icons'
import { shuffleArray } from '../utils/shuffleArray'
import { Player } from '../types/MultiPlayers'

const initial: IGameContext = {
    gameOptions: {
        theme: 'numbers',
        players: '1',
        gridSize: 'small'
    },

    scoreMultiPlayers: null,

    scoreSinglePlayer: {
        move: 0,
        timer: 0
    },

    tiles: [],
    checkedTiles: [],
    isRunningGame: false,
    isMultiPlayersGame: false,
    isTimerRunning: false,
    numbersOfTiles: 8,
    isGameOver: false,

    setTheme: () => { },
    setPlayers: () => { },
    setGridSize: () => { },

    setIsRunningGame: () => { },
    setIsTimerRunning: () => { },
    setIsGameOver: () => { },
    startGame: () => { },
    newGame: () => { },
    restartGame: () => { },
    generateTiles: () => { },
    setCheckedTiles: () => { },
    compareTileValue: () => { },
    setScoreSinglePlayer: () => { },
    stopTimer: () => { },
    startTimer: () => { }
}

export const GameContext = createContext(initial);

const GameContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [theme, setTheme] = useState(initial.gameOptions.theme)
    const [players, setPlayers] = useState(initial.gameOptions.players)
    const [gridSize, setGridSize] = useState(initial.gameOptions.gridSize)

    const [isMultiPlayersGame, setIsMultiPlayersGame] = useState(initial.isMultiPlayersGame)

    const [isRunningGame, setIsRunningGame] = useState(initial.isRunningGame)

    const [tiles, setTiles] = useState<Tile[]>([])
    const [checkedTiles, setCheckedTiles] = useState<Tile[]>(initial.tiles)

    const [numbersOfTiles, setnumbersOfTiles] = useState<8 | 18>(8)

    const [scoreSinglePlayer, setScoreSinglePlayer] = useState(initial.scoreSinglePlayer)
    const [scoreMultiPlayers, setScoreMultiPlayers] = useState(initial.scoreMultiPlayers)

    const [isTimerRunning, setIsTimerRunning] = useState(initial.isTimerRunning)
    const [intervalID, setIntervalID] = useState(0)
    const [isGameOver, setIsGameOver] = useState(initial.isGameOver)
    const gameOptions = {
        theme,
        players,
        gridSize,
    }

    const selectSingleOrMultiPlayers = () => {
        const playersNumber = parseInt(players)
        const playersInGame: Player[] = []

        if (players === "1") {
            setIsMultiPlayersGame(false)
        }
        else {
            setIsMultiPlayersGame(true)

            for (let i = 0; i < playersNumber; i++) {
                playersInGame.push({
                    name: `Player ${i + 1}`,
                    score: 0,
                    currentTurn: i === 0
                })
            }

            setScoreMultiPlayers(playersInGame)
        }
    }

    const generateTiles = () => {
        if (gridSize === 'large') setnumbersOfTiles(18)
        if (gridSize === 'small') setnumbersOfTiles(8)

        const icons: JSX.Element[] = shuffleArray(iconComponents)
        const tiles: Tile[] = []

        const contentTile = (index: number) => {
            return theme === 'numbers' ?
                index + 1
                :
                icons[index]
        }

        for (let i = 0; i < numbersOfTiles; i++) {
            tiles.push({
                id: (i + 1),
                doublonId: null,
                content: contentTile(i),
                matched: false,
                checked: false
            })
        }

        const copyTiles = tiles

        const giveDoublonID: Tile[] = [...copyTiles, ...tiles].map(tile => ({
            ...tile,
            doublonId: uuidv4()
        }))

        setTiles(shuffleArray(giveDoublonID))
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
        setIsTimerRunning(false)
        setIsGameOver(false)
        stopTimer()
    }

    const restartGame = () => {
        setCheckedTiles([])
        generateTiles()
        setScoreSinglePlayer(initial.scoreSinglePlayer)
        selectSingleOrMultiPlayers()
        setIsTimerRunning(false)
        setIsGameOver(false)
    }

    const incrementScoreSinglePlayer = () => {
        setScoreSinglePlayer((singlePlayerStats) => ({
            ...singlePlayerStats,
            move: singlePlayerStats.move + 1
        }))
    }

    const incrementScoreMultiPlayer = () => {
        if (scoreMultiPlayers !== null) {
            const updateScoreMultiplayer = scoreMultiPlayers.map((player) => {
                if (player.currentTurn) {
                    return {
                        ...player,
                        score: player.score + 1
                    }
                } else return player
            })

            setScoreMultiPlayers([...updateScoreMultiplayer])
        }
    }

    const currentTurnToTheNextPlayer = () => {
        if (scoreMultiPlayers !== null) {
            const currentPlayer = scoreMultiPlayers.find((player) => player.currentTurn)
            const currentIndexPlayer = scoreMultiPlayers.findIndex((player) => player.currentTurn)
            const nextIndexPlayer = (currentIndexPlayer + 1) % scoreMultiPlayers.length

            if (currentPlayer !== undefined) {
                currentPlayer.currentTurn = false
            }

            scoreMultiPlayers[nextIndexPlayer].currentTurn = true

            setScoreMultiPlayers([...scoreMultiPlayers])
        }
    }

    const compareTileValue = (checkedTiles: Tile[]) => {
        const areEqualTiles = checkedTiles[0].id === checkedTiles[1].id
        const isSinglePlayer = players === "1"
        const isMultiPlayer = players !== "1"

        if (isSinglePlayer) {
            if (areEqualTiles) {
                checkedTiles.forEach((tile) => tile.matched = true)
            }
            incrementScoreSinglePlayer()
            setCheckedTiles([])
        }

        if (isMultiPlayer) {
            if (areEqualTiles) {
                checkedTiles.forEach((tile) => tile.matched = true)
                incrementScoreMultiPlayer()
            } else {
                setTimeout(() => {
                    currentTurnToTheNextPlayer()
                }, 1000)
            }
        }

        setCheckedTiles([])
    }

    const startTimer = () => {
        const ID = setInterval(() => {
            setScoreSinglePlayer((singlePlayerStats) => ({
                ...singlePlayerStats,
                timer: singlePlayerStats.timer + 1
            }))
        }, 1000)

        setIntervalID(ID)
    }

    const stopTimer = () => {
        clearInterval(intervalID)
    }

    const value = {
        gameOptions,
        scoreSinglePlayer,
        isRunningGame,
        isMultiPlayersGame,
        tiles,
        checkedTiles,
        isTimerRunning,
        numbersOfTiles,
        isGameOver,
        scoreMultiPlayers,
        setIsGameOver,
        setIsTimerRunning,
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
        compareTileValue,
        startTimer,
        stopTimer
    }

    return <GameContext.Provider value={value}>
        {children}
    </GameContext.Provider>

}

export { GameContextProvider }