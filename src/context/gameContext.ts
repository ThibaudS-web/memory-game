import { createContext } from 'react';
import GameContext from './IGameContext';

const initial: GameContext = {
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
}

const GameContext = createContext(initial);