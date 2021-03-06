import {BottomNavigation, BottomNavigationAction, Typography} from "@material-ui/core";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FolderIcon from "@material-ui/icons/Folder";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        border: "none",
        height: "100px",
        flexGrow: 1,
        marginTop: "50px",
        marginBottom: "50px",
        position: "relative",
        zIndex: "-1",
    },
    footerBlock: {
        marginTop: "50px",
        marginBottom: "50px"
    },
    mainContent: {
        opacity: "0.5",
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        position: "absolute",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
    }
}))

export const Footer = () => {
    const classes = useStyles()

    const [value, setValue] = useState("recents")

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return <footer className={classes.footerBlock}>
        <div className={classes.mainContent}>

        </div>
        <Typography color="primary" variant="h6" align="center" gutterBottom>Contact Us</Typography>
        <BottomNavigation  value={value} onChange={handleChange}
                          className={classes.root}>
            <BottomNavigationAction
                label="Recents"
                value="recents"
                icon={<RestoreIcon/>}
            />
            <BottomNavigationAction
                label="Favorites"
                value="favorites"
                icon={<FavoriteIcon/>}
            />
            <BottomNavigationAction
                label="Nearby"
                value="nearby"
                icon={<LocationOnIcon/>}
            />
            <BottomNavigationAction
                label="Folder"
                value="folder"
                icon={<FolderIcon/>}
            />
        </BottomNavigation>
        <Typography align="center" color="textSecondary" component="p"
                    variant="subtitle1">
            D!Granene React Js Material Ui Site
        </Typography>
    </footer>
}