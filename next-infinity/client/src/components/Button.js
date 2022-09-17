import { Button as MaterialBtn, IconButton as MaterialIconButton, Box } from '@mui/material';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
    // overwrite the default class mui for Button
    contained: {
        borderRadius: "8px",
    },
    outlined: {
        borderRadius: "10px",
        "&:focus": {
            borderColor: "#b2b2b2"
        }
    },
    textVariant: {
        "&:hover": {
            background: "none",
            // color: theme.palette.grey[700]
        }
    },
    rootIconButton:{
        "&:hover": {
            // background: theme.palette.grey[500]
        }

    }
})
)

export const Button = ({ text, endIcon, endIconTop, startIcon, startIconTop, ...rest }) => {
    const { contained, outlined, textVariant, textSizeSmall, textSizeLarge } = useStyles()
    return (
        <MaterialBtn
            // them classes overwrite and change default class mui for more information about the available classes check the document button mui
            classes={{
                contained,
                outlined,
                text:textVariant,
                textSizeSmall,
                textSizeLarge
            }}
            // if you want your icon be at the top of your body button, you need to use endIconTop,startIconTop props else with endIcon and startIcon your icon will be center 
            endIcon={endIconTop ? <Box> {endIconTop} </Box> : endIcon}
            startIcon={startIconTop ? <Box> {startIconTop} </Box> : startIcon}
            // Do not touch tree props.These props will disable some default effects.
            disableElevation
            disableFocusRipple
            disableRipple
            {...rest}
        >
            {text}
        </MaterialBtn>
    )
}

export const IconButton = ({ icon, ...rest }) => {
    const {rootIconButton} = useStyles()
    
    return (
        <MaterialIconButton
        className={rootIconButton}
            // Do not touch two props.These  props will disable some default effects.
            disableFocusRipple
            disableRipple
            {...rest}
        >
            {icon}
        </MaterialIconButton>
    )
}