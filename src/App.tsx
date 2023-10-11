import { useContext } from "react"
import Menu from "./components/Menu"
import "./index.css"
import { GameContext } from "./context/gameContext"
import LayoutGame from "./components/games/LayoutGame"

function App() {
  const { isRunningGame } = useContext(GameContext)

  return (
    <>
      {isRunningGame ?
        <div className="bg-btn-text-color w-screen h-screen flex justify-center">
          <LayoutGame />
        </div>
        :
        <main className="bg-bg-startmenu w-screen h-screen flex items-center justify-center ">
          <Menu />
        </main>}

    </>
  )
}

export default App