import AppBar from "@material-ui/core/AppBar";
import {Box, Button, Container, DialogContentText, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    },
}))


export const Appbar = () => {

    const classes = useStyles()

    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return <AppBar position="fixed">
        <Container fixed>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton}
                            color="inherit" aria-label="menu">
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>Sushi House</Typography>
                <Box mr={3}>
                    <Button color="inherit" variant="outlined"
                            onClick={handleClickOpen}>
                        Log In
                    </Button>

                    <Dialog open={open} onClose={handleClose}
                            aria-lablledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Log In</DialogTitle>
                        <DialogContent>
                            <DialogContentText>Log in to see</DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Email Adress"
                                type="email"
                                fullWidth/>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="pass"
                                label="Password"
                                type="password"
                                fullWidth/>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color='primary'>Cancel</Button>
                            <Button onClick={handleClose} color='primary'>Log In</Button>
                        </DialogActions>
                    </Dialog>
                </Box>
                <Button color="secondary" variant="contained">
                    Sign Up
                </Button>
            </Toolbar>
        </Container>
    </AppBar>


}

