import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    contents:{
        padding:'2rem 4rem',
        lineHeight:'1.5rem',
    },
    personal__ele:{
        marginBottom:'2rem'
    },
    personal__ele__specisl:{
        marginLeft:'3rem',
        marginBottom:'2rem'
    }

    
   
}));

const Contents = () =>{
    const classes = useStyles();
  
    return(
        <div className={classes.contents}>
            <h3 className={classes.personal__heading}>CONTENTS</h3>
            <div  className={classes.personal__ele}>
                <span>1 Early Life</span>
            </div>
            <div  className={classes.personal__ele}>
                <span>2 careers</span>
            </div>
            <div  className={classes.personal__ele__specisl}>
                <span>2.1 Acting</span>
            </div>
            <div  className={classes.personal__ele__specisl}>
                <span>2.2 producing</span>
            </div>
            <div  className={classes.personal__ele}>
                <span>3 relationships</span>
            </div>
            <div  className={classes.personal__ele__specisl}>
                <span>3.1 Marriage to Mimi Rogers</span>
            </div>
            <div  className={classes.personal__ele__specisl}>
                <span>3.2 Marriage to Nicole Kidman</span>
            </div>
            <div  className={classes.personal__ele}>
                <span>Legacy</span>
            </div>
           
        </div>
    );

}

export default Contents;