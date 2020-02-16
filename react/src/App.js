import React, { Component } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import CenteredGrid from './Components/Grid/Grid';

const useStyles = makeStyles(theme => ({
  grid:{
    backgroundColor:'#FBFBFB',
    [theme.breakpoints.down('xs')]: {
      paddingBottom:'4rem',
  },
  }

}));


const App = () => { 
    const classes = useStyles();
    return (
      <div className="App">
        <Navbar />
        <Header />
        <div className={classes.grid}><CenteredGrid /></div>
      </div>
    );
}

export default App; 
