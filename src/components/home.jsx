import React, {useState} from "react";
import {useSelector, shallowEqual} from "react-redux";
import "./rule.css";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


import {
    AppBar,
    Box,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Container,
    Grid,
    Link,
    Toolbar,
    Typography,
} from "@mui/material";
import StarIcon from '@mui/icons-material/StarBorder';

const tiers = [
    {
        title: 'Normal',
        words: '6',
        opportunities: '6',
        description:
            'In a normal game, the user will have to find 6 letter words and be given only 6 opportunities.',
        buttonText: 'Play',


    },
    {
        title: 'Hard',
        words: '7',
        opportunities: '5',
        description:
            'In a normal game, the user will have to find 7 letter words and be given only 5 opportunities.',
        buttonText: 'Play',

    },
];

export default function Choose() {
    const navigate = useNavigate();

  
const normalgamePage = () => {
    navigate('/normal');}    
const hardgamePage = () => {
        navigate('/hard');}    
    return (
        <div>

            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{borderBottom: (theme) => `1px solid ${theme.palette.divider}`}}
            >
                <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        }}>
                   
                        <Link
                            variant="button"
                            color="text.primary"
                            href=""
                            sx={{my: 1, mx: 1.5}}
                        >
                            Home
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="normal"

                            sx={{my: 1, mx: 1.5}}
                        >
                            Games
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="rule"
                            sx={{my: 1, mx: 1.5}}
                        >
                            Rule
                        </Link>
                    
                </Box>
            </AppBar>
            <Container disableGutters maxWidth="sm" component="main" sx={{pt: 8, pb: 6}}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Difficulty
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p">
                    Please select the difficulty of the game, which is described below.
                </Typography>
            </Container>

            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid item key={tier.title} xs={8} sm={12} md={6}>
                            <Card>
                                <CardHeader
                                    title={tier.title}

                                    titleTypographyProps={{align: 'center'}}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                    }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    }}
                                />
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',

                                        }}
                                    >
                                        <Typography component="h2" variant="h3" color="text.primary">
                                            {tier.words}
                                        </Typography>
                                    </Box>
                                    <Typography
                                        component="h2"
                                        variant="h6"
                                        align="center"
                                        justifyContent='center'
                                    >
                                        {tier.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {(tier.title === 'Normal') && <Button onClick ={normalgamePage} fullWidth variant='contained'>
                                        play
                                    </Button>}
                                    {(tier.title === 'Hard') && <Button onClick ={hardgamePage} fullWidth variant='contained'>
                                        play
                                    </Button>}
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
}
