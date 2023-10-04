import { createContext, useState } from 'react';
import IGameContext from './IGameContext';

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


    gameIsRunning: false,

    setTheme: () => { },
    setPlayers: () => { },
    setGridSize: () => { },

    setGameIsRunning: () => { }
}


export const GameContext = createContext(initial);



const GameContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [theme, setTheme] = useState(initial.gameOptions.theme)
    const [players, setPlayers] = useState(initial.gameOptions.players)
    const [gridSize, setGridSize] = useState(initial.gameOptions.gridSize)


    const [gameIsRunning, setGameIsRunning] = useState(initial.gameIsRunning)

    // console.log("theme in provider: ")
    
    const gameOptions = {
        theme,
        players,
        gridSize,
    }

    const value = {
        gameOptions,
        scoreMultiPlayers: initial.scoreMultiPlayers,
        scoreSinglePlayer: initial.scoreSinglePlayer,
        gameIsRunning,
        setTheme,
        setPlayers,
        setGridSize,
        setGameIsRunning
    };
    return <GameContext.Provider value={value}>
        {children}
    </GameContext.Provider>

}

export { GameContextProvider }