import {Button, Container, Grid, Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

    }))
export const Slogan = () => {
    const classes = useStyles()

   return <div className={classes.mainContent}>
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
}
