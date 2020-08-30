import {Button, CardContent, CardMedia, Container, Grid, Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import LayerIcon from "@material-ui/icons/Layers";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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

export const Cards = () => {
    const classes = useStyles()

    return <Container className={classes.cardGrid} maxWidth="md">
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
}