import React from "react";
import Dialog from "@material-ui/core/Dialog";
import {Box, Button, CardContent, CardMedia, Typography} from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import {makeStyles} from "@material-ui/core/styles";
import {useHistory, useParams} from "react-router-dom"
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import {wok} from "../Wok";


const useStyles = makeStyles((theme) => ({
    cardMedia: {
        paddingTop: "56.25%"
    },
    card: {

        backgroundColor: "gray",
    }
}))

export const PopUpWok = () => {
    const classes = useStyles()
    const history = useHistory()
    const params = useParams()
    const id = +params.id
    const currentCard = wok.find((s) => s.id === id)
    const handleClose = () => {
        history.push("/")
    }


    return <Box mr={3}>
        <Dialog open={true} onClose={handleClose}
                aria-lablledby="form-dialog-title">
            <Card className={classes.card}>
                <CardMedia className={classes.cardMedia}
                           image={currentCard.img}
                           title="title"
                />
                <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {currentCard.name}
                    </Typography>
                    <Typography>
                        Description text Description text Description text
                        Description text Description text
                    </Typography>
                    <Typography>{currentCard.weight}</Typography>
                </CardContent>
                <CardActions>
                    <Typography variant="h5" color="primary">{`Price-${currentCard.price}`}</Typography>
                </CardActions>
            </Card>
            <DialogActions>
                <Button onClick={handleClose} color='primary'>Buy</Button>
                <Button onClick={handleClose} color='primary'>Cancel</Button>
            </DialogActions>
        </Dialog>
    </Box>
}