import Paper from "@material-ui/core/Paper";
import {Button, Container, Grid, Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import banner from "../img/christian-allard-etIkw39orF8-unsplash.jpg"


const useStyles = makeStyles((theme) => ({
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
        marginTop: theme.spacing(66)
    },
}))


export const Banner = () => {
    const classes = useStyles()

    return <Paper className={classes.mainFeaturesPost}
                  style={{backgroundImage: `url(${banner})`}}>
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
                            New Menu
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
}

