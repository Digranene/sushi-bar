import {Button, Container, Grid, Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    mainContent: {
        opacity: "0.5",
        width: "100%",
        height: "100%",
        backgroundColor: "gray",
        position: "absolute",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
    },
    backgroundStyle: {
        display: "flex",
        alignItems: "center",
        paddingBottom: "150px",
        paddingTop: "150px",
        marginBottom: "100px",
        position: "relative",
        zIndex: "-1"
    },

    mainButtons: {}
}))
export const Slogan = () => {
    const classes = useStyles()

    return <div className={classes.backgroundStyle} >
        <div className={classes.mainContent}>

        </div>
        <Container maxWidth="sm" style={{zIndex: 0}}>
            <Typography variant="h2" align="center" color="textPrimary"
                        gutterBottom>
                Need Work?
                Join Us!
            </Typography>
            <Typography variant="h5" align="center"
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
                </Grid>
            </div>
        </Container>
    </div>

}
