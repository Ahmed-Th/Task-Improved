import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    personal:{
        padding:'3rem 4rem',
    },
   
}));

const PersonalInofo = () =>{
    const classes = useStyles();
  
    return(
        <div className={classes.personal}>
            <h3 className={classes.personal__heading}>CONTACt & PERSONAL INFO</h3>
            <div className={classes.personal__piece} >
                <h4>Email</h4>
                <a href="#">tomcruise@gmail.com</a>
            </div>
            <div className={classes.personal__piece} >
                <h4>Web Page</h4>
                <a href="#">tomcruise.com</a>
            </div>
            <div className={classes.personal__piece} >
                <h4>Birthday</h4>
                <span>July 3</span>
            </div>
        </div>
    );

}

export default PersonalInofo;