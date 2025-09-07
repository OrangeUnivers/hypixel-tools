let theme = localStorage.getItem("hytls-theme");
if (theme == "undefined" || theme == null || theme == undefined) {
    theme = "light";
    localStorage.setItem("hytls-theme", "light");
}
changeColorScheme(theme, true);
function changeColorScheme(newTheme, forced) {
    let setThemeTo;
    if (!newTheme) {
        if (theme == "light") {
            setThemeTo = "dark";
        } else if (theme == "light") {
            setThemeTo = "light";
        } else {
            setThemeTo = "light";
        }
    } else {
        switch (newTheme) {
            case "dark":
                setThemeTo = "dark";
                break;
            case "light":
                setThemeTo = "light";
                break;
            default:
                if (theme == "light") {
                    setThemeTo = "dark";
                } else if (theme == "light") {
                    setThemeTo = "light";
                } else {
                    setThemeTo = "light";
                }
                break;
        }
    }
    if (theme == setThemeTo && !forced) { return; }
    document.documentElement.dataset.theme = setThemeTo;
    if (!forced) {
        theme = setThemeTo
        localStorage.setItem("hytls-theme", theme);
    }
}