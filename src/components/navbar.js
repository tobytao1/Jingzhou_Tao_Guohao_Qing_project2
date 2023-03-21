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

const Navbar = () => {
  const navigate = useNavigate();
  const homePage = () => {
      navigate('/');}   
  const gamePage = () => {
    navigate('/normal');
  }
  const rulePage = () => {
    navigate('/rule');
  }
  return <div>
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
                   
                        <Button
                            variant="button"
                            color="text.primary"
                            onClick={homePage}
                            sx={{my: 1, mx: 1.5}}
                        >
                            Home
                        </Button>
                        <Button
                            variant="button"
                            color="text.primary"
                            onClick = {gamePage}

                            sx={{my: 1, mx: 1.5}}
                        >
                            Games
                        </Button>
                        <Button
                            variant="button"
                            color="text.primary"
                            onClick ={rulePage}
                            sx={{my: 1, mx: 1.5}}
                        >
                            Rule
                        </Button>
                    
                </Box>
            </AppBar>
  </div>;
};


export default Navbar;
