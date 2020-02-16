import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    history:{
        textAlign:'start',
        padding:'1rem 2rem',
        lineHeight:'1.7rem',
        
    },
    history__heading:{
        fontWeight:'bolder',
        fontSize:'1.4rem',
        color:'black',    
    },
    history__about:{
        color:'black',
        marginTop:'-1rem',  
        fontSize:'1rem', 
    },
    history__text:{

    },
    history__text_title:{
        color:'black', 
        fontSize:'1rem',
        fontWeight:'bolder'
    },

}));

const History = () =>{
    const classes = useStyles();
  
    return(
        <div className={classes.history}>
            <h2 className={classes.history__heading}>HISTORY</h2>
            <h5 className={classes.history__about}>This article is about the American actor. </h5>
            <p className={classes.history__text}>
            <span className={classes.history__text_title} >Thomas Cruis Mapother IV</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut necessitatibus ex quae autem a odio Ut necessitatibus ex quae autem a odio
            Lorem ipsum dolor sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit. Ut necessitatibus ex quae autem a odio Ut necessitatibus ex quae autem a odio
            </p>
        </div>
    );

}

export default History;