import React from "react";
import {Button, CardContent, CardMedia, Container, Grid, Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import SoT from "../img/setSushi/0XK5IZRQtkAIeVeDUXGQepl6CbDc2daWGY8Hu5lX.png";
import SoS from "../img/setSushi/01B7PIuyzxjTy6zz1brFOsGGckJQyB2VHpdk29z3.png";
import SoF from "../img/setSushi/4FdV8D29nCit1nemkjNGoHKVIT2lpspkQH7fnDpK.png";
import SoO from "../img/setSushi/MPloVUVpLleoYRczC7NzVZ7rgU8YJnWh5k3hNnRJ.png";
import SoG from "../img/setSushi/s3tXjkMwCjmNWXZhpSTFCoeoHRQUX3nLwBMTafB0.png";
import SoH from "../img/setSushi/fviNUbPOgmCPB9dpaQHrX5b8NM48GcwdBp6V94Tr.png";
import {makeStyles} from "@material-ui/core/styles";
import {NavLink} from "react-router-dom";
import {v1} from "uuid";


const useStyles = makeStyles((theme) => ({
    cardMedia: {
        paddingTop: "56.25%"
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

export const sushiSet = [
    {id: 11, name: "Set of Tanuki", weight: "440gm", price: "20$", img: SoT},
    {id: 12, name: "Set of Syake", weight: "550gm", price: "22$", img: SoS},
    {id: 13, name: "Set of Filoman", weight: "600gm", price: "28$", img: SoF},
    {id: 14, name: "Set of Origami", weight: "800gm", price: "25$", img: SoO},
    {id: 15, name: "Set of Gunkami", weight: "1000gm", price: "29$", img: SoG},
    {id: 16, name: "Set of Hurakami", weight: "1100gm", price: "31$", img: SoH},
]

export const Sushiset = () => {
    const classes = useStyles()

    return <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
            {sushiSet.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
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
                            <NavLink to={`/popup/set/${card.id}`}>
                                <Button size="small" color="primary">
                                    View111
                                </Button>
                            </NavLink>
                            <Button size="small" color="primary">
                                Buy
                            </Button>
                            <Typography variant="h5" color="primary">{card.price}</Typography>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </Container>
}