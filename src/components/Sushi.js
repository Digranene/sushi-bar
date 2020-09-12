import React from "react";
import {Button, CardContent, CardMedia, Container, Grid, Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import BoD from "../img/sushi/2XUrK5lQ2Ci1Nlsj0cSFy5hh4WH8FwlGKCRycyhW.png";
import Me from "../img/sushi/8nbCvm7MOQagQO9GQppUcnUR6GwI1eMnI1y5a1Jz.png";
import FoT from "../img/sushi/9UGqvLs7trrwjASedycn5ZNWfYkzThBFYwQML5a8.png";
import Mebi from "../img/sushi/BkVeCPTq32tT1nXTZXFleD3BPVn5S5VAoSjx36ki.png";
import UM from "../img/sushi/C0RdxkIpdk1Yeg00dF9je82wS5j1EUgGukDScygC.png";
import NT from "../img/sushi/xAVlNXgudEThASzJj1XrsSyRYAgL07s04vBRrS0C.png";
import NK from "../img/sushi/Nw9xYf8344k7xb5amerspx7n8GzX6dqvJv0Yc6z8.png";
import BoP from "../img/sushi/JJgtW0mUZ1EwPYALUP3xtm9hontp4WYcAJOUvl8a.png";
import BoS from "../img/sushi/3mYGu924obMceqFgejpyUpgYZWlbz6KlcLhh1d6v.png";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        paddingTop: "56.25%"
    },
    cardContent: {
        flexGrow: 1,
    },
    cardGrid: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(12)
    }
}))

const sushi = [
    {id: 1, name: "Breath of Dragon", weight: "200gm", price: "12$", img: BoD},
    {id: 2, name: "Maki ekki", weight: "220gm", price: "14$", img: Me},
    {id: 3, name: "Futomak of Tuna", weight: "210gm", price: "12$", img: FoT},
    {id: 4, name: "Maki ebi", weight: "260gm", price: "15$", img: Mebi},
    {id: 5, name: "Unagi Maki", weight: "250gm", price: "12$", img: UM},
    {id: 6, name: "Nigiri Tekka", weight: "220gm", price: "14$", img: NT},
    {id: 7, name: "Nigiri Kunsei", weight: "200gm", price: "16$", img: NK},
    {id: 8, name: "Boguki of Pee", weight: "250gm", price: "10$", img: BoP},
    {id: 8, name: "Boguki of See", weight: "220gm", price: "11$", img: BoS},
]

export const Sushi = () => {
    const classes = useStyles()

    return <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
            {sushi.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardMedia className={classes.cardMedia}
                                   image={card.img}
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
                            <Typography>weight</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                View
                            </Button>
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