import { useContext } from 'react'
import Button from './Button'
import { GameContext } from '../context/gameContext'

const ButtonGroup = () => {
    const { newGame, restartGame } = useContext(GameContext)

    return (
        <div className="flex justify-center w-full mt-10 gap-3.5 sm:flex-col mb-5">
            <Button className="btn-nav bg-btn-primary text-[#FCFCFC] hover:bg-btn-primary-hover sm:text-lg" handleClick={restartGame}>
                Restart
            </Button>
            <Button className="btn-nav bg-btn-secondary text-[#304859] hover:bg-btn-secondary-hover sm:text-lg" handleClick={newGame}>
                Setup New Game
            </Button>
        </div>
    )
}

export default ButtonGroup