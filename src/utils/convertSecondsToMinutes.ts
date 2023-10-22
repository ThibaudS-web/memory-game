export const convertSecondsToMinutes = (timer: number) => {
    let seconds = timer % 60
    let minutes = Math.floor(timer / 60)

    return `${minutes}:${seconds.toString().padStart(2, "0")}`

}