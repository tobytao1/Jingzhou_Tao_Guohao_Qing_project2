import React, {useState} from "react";
import {useSelector, shallowEqual} from "react-redux";
import "./rule.css";
//import WordElement from "./WordElement";
import Button from '@mui/material/Button';
import {AppBar, Container, Link, Toolbar, Typography} from "@mui/material";
export default function Rule() {
    return (
        <div>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
            >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <nav>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Home
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Games
                        </Link>
                        <Link
                            variant="button"
                            color="text.primary"
                            href="#"
                            sx={{ my: 1, mx: 1.5 }}
                        >
                            Rule
                        </Link>
                    </nav>
                </Toolbar>
            </AppBar>
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Game Rule
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p">
                    Wordle, the online word game is very easy to play and has very simple rules that one can go through.<br />

                    The player has to guess the Wordle in six attempts or less.

                    Every word, which is entered should be in the word list.

                    If the letter is correct, the color would turn green.

                    If the letter is correct but placed wrong then it would turn yellow.

                    An incorrect letter turns gray.

                    Letters can be used more than one time.
                </Typography>
            </Container>

            <Button href="#" variant="contained">Back</Button>

        </div>
    );
}
