import { useContext } from "react"
import Menu from "./components/Menu"
import "./index.css"
import { GameContext } from "./context/gameContext"
import LayoutGame from "./components/LayoutGame"
import { motion } from "framer-motion"
import { opacity } from "./utils/dynamic-styles/opacity"

function App() {
  const { isRunningGame } = useContext(GameContext)

  return (
    <>
      {isRunningGame ?
        <motion.div
          key={1}
          animate="visible"
          initial="hidden"
          variants={opacity}
        >
          <LayoutGame />
        </motion.div >
        :
        <motion.div
          key={2}
          animate="visible"
          initial="hidden"
          variants={opacity}
        >
          <Menu />
        </motion.div>
      }
    </>
  )
}

export default App