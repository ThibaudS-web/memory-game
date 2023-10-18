import { useContext } from 'react'
import { GameContext } from '../context/gameContext'
import MultiplayersGame from './MultiplayersGame'
import SinglePlayerGame from './SinglePlayerGame'

const MainContent = () => {
    const { isMultiPlayersGame } = useContext(GameContext)

    return (
        <main className="w-full flex flex-col items-center smartphone:w-[90%] xxsm:w-full">
            {isMultiPlayersGame ?
                <MultiplayersGame /> : <SinglePlayerGame />
            }
        </main>
    )
}

export default MainContent