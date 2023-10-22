import { distributesStyleIfActive } from "../utils/dynamic-styles/PlayerScoreMulti"
import useWidthScreen from "../hooks/useWidthScreen"

const PlayerScoreMulti = ({ isActive, label, score }: { isActive?: boolean, label: string, score: number }) => {

    const windowWidth = useWidthScreen()

    const conditionSmartphonelabel = windowWidth < 600 ? label.replace("Player ", "P") : label

    const conditionTabletCurrentTurn = windowWidth <= 768 ? null : "CURRENT TURN"

    return (
        <div className="flex flex-col items-center gap-4 w-full">
            <div className={`${distributesStyleIfActive(isActive, true)} font-bold w-full h-wrapper-score&timer flex justify-between items-center text-lg tablet:text-paragraph-sm tablet:flex-col tablet:px-4 tablet:py-2 rounded-lg px-6 py-6 smartphone:flex-col smartphone:py-2 smartphone:px-0 smartphone:text-base smartphone:w-full relative`}>
                <div className="self-start smartphone:self-auto">{conditionSmartphonelabel}</div>
                <span className={`${distributesStyleIfActive(isActive)} text-3xl tablet:text-2xl self-start smartphone:self-auto`}>
                    {score}
                </span>
            </div>
            <span className="text-bg-startmenu font-bold text-sm tracking-widest">{isActive ? conditionTabletCurrentTurn : null}</span>
        </div>
    )
}

export default PlayerScoreMulti