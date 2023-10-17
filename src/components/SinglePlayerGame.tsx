import { GameContext } from "../context/gameContext"
import { useContext } from 'react'
import Tiles from "./Tiles"
import Timer from "./Timer"
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFootball,
  faAnchor,
  faFlask,
  faSun,
  faHandSpock,
  faBug,
  faMoon,
  faSnowflake,
  faIndianRupee,
  faCarBurst,
  faCannabis,
  faGuitar,
  faVolleyball,
  faDove,
  faPersonHiking,
  faPaw,
  faFrog,
  faMugHot
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SinglePlayerGame = () => {
  const { scoreSinglePlayer } = useContext(GameContext)

  const { move } = scoreSinglePlayer

  const iconsDefinitions = [faFootball, faAnchor, faFlask, faSun, faHandSpock, faBug, faMoon, faSnowflake, faIndianRupee, faCarBurst, faCannabis, faGuitar, faVolleyball, faDove, faPersonHiking, faPaw, faFrog, faMugHot]

  library.add(...iconsDefinitions)

  const iconComponents = iconsDefinitions.map((icon) => {
    return <FontAwesomeIcon icon={icon.iconName} />
  })

  console.log(iconComponents)
  return (
    <>
      <Tiles />
      <div className="flex justify-center gap-6 w-full mt-16">
        <Timer />
        <div className="bg-btn-secondary font-bold text-text-primary w-wrapper-score&timer h-wrapper-score&timer flex justify-between items-center text-lg rounded-lg px-6 py-6">
          Moves
          <span className="text-tile-bg-notchecked text-3xl">
            {move}
          </span>
        </div>
      </div>
      <div className="flex flex-row gap-5 text-xl mt-10">
        <FontAwesomeIcon icon="football" />
        <FontAwesomeIcon icon="anchor" />
        <FontAwesomeIcon icon="flask" />
        <FontAwesomeIcon icon="sun" />
        <FontAwesomeIcon icon="hand-spock" />
        <FontAwesomeIcon icon="bug" />
        <FontAwesomeIcon icon="moon" />
        <FontAwesomeIcon icon="snowflake" />
        <FontAwesomeIcon icon="indian-rupee-sign" />
        <FontAwesomeIcon icon="car-burst" />
        <FontAwesomeIcon icon="cannabis" />
        <FontAwesomeIcon icon="guitar" />
        <FontAwesomeIcon icon="volleyball" />
        <FontAwesomeIcon icon="dove" />
        <FontAwesomeIcon icon="hiking" />
        <FontAwesomeIcon icon="paw" />
        <FontAwesomeIcon icon="frog" />
        <FontAwesomeIcon icon="mug-hot" />
      </div>
    </>
  )
}

export default SinglePlayerGame