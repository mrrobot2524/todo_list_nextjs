
const ThemeBtn = ({theme}) => {
    return theme === "light" ? (
        // Dark mode icon
        <img width={25} height={25} src="./moon-and-stars.svg" alt="Dark mode"/>
    ) : (
        // Light mode icon
        <img width={25} height={25} src="./sun-svg.svg" alt="Dark mode"/>
    );
}
export default ThemeBtn;