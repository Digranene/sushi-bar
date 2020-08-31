import React from "react";
import {Button, Container, Grid, Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import bannerDelivery from "../img/drew-beamer-0wsnJWonXFs-unsplash.jpg";



const useStyles = makeStyles((theme) => ({
    imgDelivery: {
        position: "relative",
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        width: "100%",
        height: "300px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
    }
}))

export const Delivery = () => {
    const classes = useStyles()


    return  <Container maxWidth="sm">
        <Typography variant="h4" align="center" color="textPrimary"
                    gutterBottom>Delivery Food</Typography>
        <Paper className={classes.imgDelivery} style={{backgroundImage: `url(${bannerDelivery})`}}></Paper>
        <Typography align="center" color="textSecondary"
                    paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus assumenda consequuntur
            corporis debitis, deserunt dolor fugit illo in minus nam,
            nostrum, officia possimus praesentium reiciendis suscipit ullam veniam. Delectus, eaque!</Typography>
        <Grid container spacing={2} justify="center">
            <Grid item>
                <Button variant="contained" color="primary">Order food</Button>
            </Grid>
        </Grid>
    </Container>
}