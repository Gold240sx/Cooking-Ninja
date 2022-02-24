import { useTheme } from '../hooks/useTheme'
import darkmodeIcon from '../assets/darkmode.svg'
import lightmodeIcon from '../assets/lightmode.svg'

//styles
import './themeSelector.css'
const themeColors = [ '#02393D', '#970A86','#718100']

export default function ThemeSelector() {
    const { changeColor, changeMode, mode } = useTheme()

    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark')
    }

  return (
    <div className="theme-selector">
        <div className="mode-toggle">
            <img 
                src={ lightmodeIcon } 
                className={"mode-toggle-icon", (mode === 'dark' ? '' : 'hidden' )}
                onClick={toggleMode} alt="lightmode toggle icon"
                style={{ filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}} 
            />
            <img 
                src={ darkmodeIcon } 
                className={"mode-toggle-icon", (mode === 'light' ? '' : 'hidden' )}
                onClick={toggleMode} alt="darkmode toggle icon" 
            />
        </div>
      <div className="theme-buttons">
        {themeColors.map(color => (
            <div 
                key={color}
                onClick={() => changeColor(color)}
                style={{ background: color}}
            />
        ))}
      </div>
    </div>
  )
}
