import React, {useState} from "react";
import {useSelector, shallowEqual} from "react-redux";
import "./rule.css";
//import WordElement from "./WordElement";
import Button from '@mui/material/Button';
import {AppBar, Container, Link, Toolbar, Typography,Box} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Navbar from "./navbar";
export default function Rule() {
    const navigate = useNavigate();
    const homePage = () => {
        navigate('/');}   
    return (
        <div>
           <Navbar/>
            <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="white"
                    gutterBottom
                >
                    Game Rule
                </Typography>
                <Typography variant="h5" align="center" color="white" component="p">
                    Wordle, the online word game is very easy to play and has very simple rules that one can go through.<br />

                    The player has to guess the Wordle in six attempts or less.

                    Every word, which is entered should be in the word list.

                    If the letter is correct, the color would turn green.

                    If the letter is correct but placed wrong then it would turn yellow.

                    An incorrect letter turns gray.

                    Letters can be used more than one time.
                </Typography>
            </Container>

            <Button onClick = {homePage} variant="contained">Back</Button>

        </div>
    );
}
