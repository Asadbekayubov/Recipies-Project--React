import { FaSun, FaMoon } from "react-icons/fa6";
import { useThemeContext } from "../hooks/useThemeContext";

const colors = ["#610C9F", "#F99417", "#BEADFA", "#CD5C08"];
function ColorContainer() {
  const { changeColor, theme, changeTheme } = useThemeContext();

  const setNewTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    changeTheme(newTheme);
    document.documentElement.setAttribute("data-theme", theme);
  };
  return (
    <div className="my-5 align-elements flex justify-between">
      <button onClick={setNewTheme} className="text-4xl">
        {theme == "light" ? <FaSun /> : <FaMoon />}
      </button>
      <div className="flex gap-2">
        {colors.map((color) => {
          return (
            <span
              key={color}
              style={{ backgroundColor: color }}
              className={`w-7 h-7 color rounded-full bg-[#610C9F] cursor-pointer`}
              onClick={() => changeColor(color)}
            ></span>
          );
        })}
      </div>
    </div>
  );
}

export default ColorContainer;
