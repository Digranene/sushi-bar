import React from "react";
import {Button, CardContent, CardMedia, Container, Grid, Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CwU from "../img/wok/ZBruIoYPJzQiaY1tmlVXTG8pwygGa3rNumSUrf9e.png";
import CardActions from "@material-ui/core/CardActions";
import {makeStyles} from "@material-ui/core/styles";
import CwS from "../img/wok/1kA5FTCueCAvuejgqLe8dhUOYTQS28zXKGBtv5q5.png";
import CwV from "../img/wok/5Ha8x6Tdpvkk6fTgrubfyFjxyAgl4kbRLdviEuCX.png";
import CwP from "../img/wok/A1o91uI53Xng2sszacFpMr2vCu1yAnCEmIdPi14n.png";
import CwC from "../img/wok/l4A42Rw9v3LFapnZLntcrRcDV045gbLhISH94zeC.png";
import CwY from "../img/wok/SIExFMVhTXXe5vjGKke0tr9SYHwxmT7pa09QDHLD.png";
import {NavLink} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    cardMedia: {
        paddingTop: "71.5%"
    },
    cardContent: {
        flexGrow: 1,
    },
    cardGrid: {
        marginTop: theme.spacing(12),
        marginBottom: theme.spacing(12)
    },
    card: {
        backgroundColor: "gray",
    }
}))

export const wok = [
    {id: 16, name: "Chahan with seafood", weight: "250gm", price: "9$", img: CwS},
    {id: 17, name: "Chahan with vegetables", weight: "250gm", price: "8$", img: CwV},
    {id: 18, name: "Chahan with pork", weight: "250gm", price: "5$", img: CwP},
    {id: 19, name: "Chahan with chicken", weight: "250gm", price: "6$", img: CwC},
    {id: 20, name: "Chahan with udon", weight: "250gm", price: "8$", img: CwU},
    {id: 21, name: "Chahan with Ydon", weight: "250gm", price: "9$", img: CwY},
]

export const Wok = () => {
    const classes = useStyles()

    return <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
            {wok.map((card) => {
                    return <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia className={classes.cardMedia}
                                       image={card.img}
                                       title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography variant="h5" gutterBottom>
                                    {card.name}
                                </Typography>
                                <Typography>
                                    Description text Description text Description text
                                    Description text Description text
                                </Typography>
                                <Typography>{card.weight}</Typography>
                            </CardContent>
                            <CardActions>
                                <NavLink to={`/popup/wok/${card.id}`}>
                                    <Button size="small" color="primary">
                                        View
                                    </Button>
                                </NavLink>
                                <Button size="small" color="primary">
                                    Buy
                                </Button>
                                <Typography variant="h5" color="primary">{card.price}</Typography>
                            </CardActions>
                        </Card>
                    </Grid>
                }
            )}
        </Grid>
    </Container>
}