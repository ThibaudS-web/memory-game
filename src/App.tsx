import { useContext } from "react"
import Menu from "./components/Menu"
import "./index.css"
import { GameContext } from "./context/gameContext"
import LayoutGame from "./components/LayoutGame"

function App() {
  const { isRunningGame } = useContext(GameContext)

  return (
    <>
      {isRunningGame ?
        <div className="w-screen h-screen flex justify-center absolute z-0">
          <LayoutGame />
        </div>
        :
        <main className="w-screen h-screen flex items-center justify-center">
          <Menu />
        </main>}

    </>
  )
}

export default App