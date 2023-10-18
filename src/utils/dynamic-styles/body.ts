export function setBodyBackgroundClass(layout: "game" | "menu") {
    if (layout === "game") {
        document.body.classList.add("bg-btn-text-color")
        document.body.classList.remove("bg-bg-startmenu")
    }
    if (layout === "menu") {
        document.body.classList.add("bg-bg-startmenu")
        document.body.classList.remove("bg-btn-text-color")
    }
}