import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTheme, useThemeUpdate } from '../context/ThemeContext';
import { makeStyles } from '@mui/styles'
import { IconButton } from '@mui/material';
const useStyles = makeStyles((theme) => ({
    btnStyles: {
        borderRadius: '50%',
        "&:hover": {
            background: 'none'
        }
    },
 
}
)
)
export const DarkAndLightModeBtn = () => {
    const darkMode = useTheme();
    const toggleTheme = useThemeUpdate();
    const { btnStyles} = useStyles();
    
    return (
        <IconButton className={btnStyles} onClick={toggleTheme}>
            {darkMode === 'light' ?<WbSunnyIcon/> :
                <DarkModeIcon />}
        </IconButton>
    )
}