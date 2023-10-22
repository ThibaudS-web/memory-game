export function shuffleArray<T>(arr: T[]): T[] {
    const tilesCopy = [...arr]

    for (let i = 0; i < arr.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [tilesCopy[i], tilesCopy[j]] = [tilesCopy[j], tilesCopy[i]]
    }
   
    return tilesCopy
}