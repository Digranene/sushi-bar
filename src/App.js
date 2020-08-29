import React, {useState} from 'react';
import './App.css';
import {
    BottomNavigation, BottomNavigationAction,
    Box,
    Button,
    CardContent,
    CardMedia,
    Container, DialogContentText,
    Grid,
    IconButton,
    Toolbar,
    Typography
} from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder"
import RestoreIcon from "@material-ui/icons/Restore"
import FavoriteIcon from "@material-ui/icons/Favorite"
import LocationOnIcon from "@material-ui/icons/LocationOn"

import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import LayerIcon from "@material-ui/icons/Layers";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    },
    mainFeaturesPost: {
        position: "relative",
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    },
    overlay: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundOverlay: "rgba(0,0,0,.3)"
    },
    mainFeaturesPostContent: {
        position: "relative",
        padding: theme.spacing(6),
        marginTop: theme.spacing(8)
    },
    cardMedia: {
        paddingTop: "56.25%"
    },
    cardContent: {
        flexGrow: 1,
    },
    cardGrid: {
        marginTop: theme.spacing(4)
    }
}))

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function App() {

    const classes = useStyles()
    const [value, setValue] = useState("recents")
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <>
            <AppBar position="fixed">
                <Container fixed>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton}
                                    color="inherit" aria-label="menu">
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>Web Dev</Typography>
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
                                    fullWidth />
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="pass"
                                        label="Password"
                                        type="password"
                                        fullWidth />
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

            <main>
                <Paper className={classes.mainFeaturesPost}
                       style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
                    <Container maxWidth={"lg"}>
                        <div className={classes.overlay}/>
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.mainFeaturesPostContent}>
                                    <Typography
                                        component="h1"
                                        variant="h3"
                                        color="inherit"
                                        gutterBottom>
                                        Web Dev
                                    </Typography>
                                    <Typography
                                        component="h5"
                                        color="inherit"
                                        paragraph>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, consequuntur
                                        culpa cum
                                    </Typography>
                                    <Button variant="contained" color="secondary">
                                        Learn More
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
                <div className={classes.mainContent}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary"
                                    gutterBottom>Web Dev</Typography>
                        <Typography variant="h5" align="center" color="textSecondary"
                                    paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque corporis delectus doloremque
                            magni vel! Adipisci assumenda aut cupiditate eligendi et facere labore laudantium minima
                            nisi nostrum quidem, sed unde voluptas.
                        </Typography>
                        <div className={classes.mainButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">Start Now</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">Learn More</Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia className={classes.cardMedia}
                                               image="https://source.unsplash.com/random"
                                               title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h5" gutterBottom>
                                            Blog Post
                                        </Typography>
                                        <Typography>
                                            Description text Description text Description text
                                            Description text Description text
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                        <LayerIcon/>
                                        <PlayCircleFilledIcon/>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer>
                <Typography variant="h6" align="center" gutterBottom>Footer</Typography>
                <BottomNavigation value={value} onChange={handleChange}
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
        </>
    );
}

export default App;
