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

const iconsDefinitions = [faFootball, faAnchor, faFlask, faSun, faHandSpock, faBug, faMoon, faSnowflake, faIndianRupee, faCarBurst, faCannabis, faGuitar, faVolleyball, faDove, faPersonHiking, faPaw, faFrog, faMugHot]

library.add(...iconsDefinitions)

export let iconComponents = iconsDefinitions.map((icon) => {
    return <FontAwesomeIcon icon={icon.iconName} />
})

