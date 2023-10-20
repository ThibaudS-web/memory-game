import { useContext } from "react"
import Menu from "./components/Menu"
import "./index.css"
import { GameContext } from "./context/gameContext"
import LayoutGame from "./components/LayoutGame"

function App() {
  const { isRunningGame } = useContext(GameContext)

  return (
    <>
      {isRunningGame ? <LayoutGame /> : <Menu />}
    </>
  )
}

export default App