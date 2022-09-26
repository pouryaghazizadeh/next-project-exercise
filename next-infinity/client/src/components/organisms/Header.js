
import { useState } from "react";
import { makeStyles } from '@mui/styles'
import { AppBar, Toolbar, MenuItem, Menu, Box, Typography } from "@mui/material";

// import { ApsLogo } from "../assets/icons"
import { dataHeader} from "../../constants/header";
import { DarkAndLightModeBtn } from "./DarkAndLightModeBtn"
import { Button, IconButton } from "./Button"
// import { NavLink } from "react-router-dom"
const useStyles = makeStyles(theme => ({
    toolbarContainer: {
        height: "70px",
    },
    logo: {
        [theme.breakpoints.up("xs")]: {
            width: "4rem",
            height: "2rem",
        },
        [theme.breakpoints.up("sm")]: {
            width: "4.6rem",
            height: "2.4rem",
        },
    },
    containerGap: {
        [theme.breakpoints.up("xs")]: {
            display: "flex",
            flexGrow: 1,
        },
    },
    menuUser: { marginTop: "0.8rem" },
}));



export default function Header() {
    const { containerGap, toolbarContainer, menuUser, logo } = useStyles()
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const renderMenu = (
        <Menu
            className={menuUser}
            id="menu-user"
            anchorEl={anchorElUser}
            keepMounted
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
            {dataHeader.routs.map((Titles) => (
                <MenuItem key={Titles.id} onClick={handleCloseUserMenu}>
                    <Button variant="text"   text={Titles.nameRoute} />
                </MenuItem>
            ))}
        </Menu>
    )


    const renderAppBar = (
        <AppBar position='sticky' color="inherit" >
            <Toolbar className={toolbarContainer}>
                <Typography>ghjh</Typography>
                {/* <ApsLogo className={logo} /> */}
                <Box className={containerGap} />
                <DarkAndLightModeBtn />
            </Toolbar>
        </AppBar>
    );

    return (
        <>
            {renderAppBar}
            {/* {renderMenu} */}
        </>
    );
}
