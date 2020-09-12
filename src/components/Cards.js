import React from "react";
import {Sushi} from "./Sushi";
import {Sushiset} from "./Sushiset";
import {Wok} from "./Wok";
import {Grid, Typography} from "@material-ui/core";
import Container from "@material-ui/core/Container";



export const Cards = () => {

    return <Container>
        <Grid>
            <Typography variant="h2" color="primary" align="center">Sushi</Typography>
            <Sushi/>
            <Typography variant="h2" color="primary" align="center">Sushi set</Typography>
            <Sushiset/>
            <Typography variant="h2" color="primary" align="center">Wok</Typography>
            <Wok/>
        </Grid>
    </Container>
}