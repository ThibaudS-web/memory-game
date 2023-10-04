import { useContext } from "react"
import Button from "./Button"
import Logo from "./svg/Logo"
import { GameContext } from "../context/gameContext"

const Menu = () => {

  const { setTheme, setPlayers, setGridSize, setGameIsRunning, gameOptions } = useContext(GameContext)

  const { theme, players, gridSize } = gameOptions

  const activeVariants = (predicat: boolean) => {
    return predicat ? 'bg-menu-selection-active' : 'bg-menu-selection-idle'
  }

  console.log("Reload Menu", theme)

  return (
    <>
      <div className="flex flex-col gap-20 w-full max-w-2xl sm:w-6/7 md:w-6/7 ">
        <Logo className="self-center" fill="#FCFCFC" />
        <div className=" bg-menu flex flex-col px-14 py-[3.375rem] md:p-6 rounded-[1.4rem] top-2/4 gap-9 sm:gap-5  ">
          <div className="flex flex-col gap-3">
            <p className="text-text-primary font-bold sm:text-paragraph-sm">Select Theme</p>
            <div className="flex flex-row justify-between h-[3.25rem] sm:h-10 sm:gap-2 gap-8">
              <Button
                className={`btn-select sm:py-0 sm:text-[1em] ${activeVariants(theme === "numbers")}`}
                handleClick={() => setTheme('numbers')}
              >
                Numbers
              </Button>
              <Button
                className={`btn-select sm:py-0 sm:text-[1em] ${activeVariants(theme === "icons")} `}
                handleClick={() => setTheme('icons')}
              >
                Icons
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-text-primary font-bold sm:text-paragraph-sm">Numbers of Players</p>
            <div className="flex flex-row h-[3.25rem] justify-between sm:h-10 sm:gap-2 gap-5">
              <Button
                handleClick={() => setPlayers('1')}
                className={`btn-select px-6 sm:py-0 sm:text-[1em] ${activeVariants(players === "1")}`}
              >
                1
              </Button>
              <Button
                handleClick={() => setPlayers('2')}
                className={`btn-select px-6 sm:py-0 sm:text-[1em] ${activeVariants(players === "2")}`}
              >
                2
              </Button>
              <Button
                handleClick={() => setPlayers('3')}
                className={`btn-select px-6 sm:py-0 sm:text-[1em] ${activeVariants(players === "3")}`}
              >
                3
              </Button>
              <Button
                handleClick={() => setPlayers('4')}
                className={`btn-select px-6 sm:py-0 sm:text-[1em] ${activeVariants(players === "4")}`}
              >
                4
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-text-primary font-bold sm:text-paragraph-sm">Grid Size</p>
            <div className="flex flex-row justify-between h-[3.25rem] sm:h-10 gap-8">
              <Button
                handleClick={() => setGridSize('small')}
                className={`btn-select sm:py-0 sm:text-[1em] ${activeVariants(gridSize === "small")}`}
              >
                4x4
              </Button>
              <Button
                handleClick={() => setGridSize('large')}
                className={`btn-select sm:py-0 sm:text-[1em] ${activeVariants(gridSize === "large")}`}
              >
                6x6
              </Button>
            </div>
          </div>
          <Button
            handleClick={() => setGameIsRunning(true)}
            className="bg-btn-primary text-btn-text-color font-bold w-full rounded-full h-[4.375rem] px-6 text-3xl hover:bg-btn-primary-hover sm:py-0 sm:h-12 sm:text-[1.125em]"
          >
            Start Game
          </Button>
        </div>
      </div >
    </>
  )
}

export default Menu