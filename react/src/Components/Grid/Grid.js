import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AboutActor from '../AboutActor/AboutActor';
import History from '../History/History';
import PersonalInofo from '../PersonalInfo/PersonalInfo';
import Contents from '../Contents/Contents';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width:'85%',
    margin:'0 auto',

    [theme.breakpoints.down('xs')]: {
      width:'95%',
    },
  },
  grid:{
    transform:"translateY(-4rem)",
    [theme.breakpoints.down('xs')]: {
      transform:"translateY(1rem)",
    },
    display:'flex',
    flexWrap: 'wrap',
    flexDirection:'row'
  },

  paper4:{
    marginTop:'-29rem',
    [theme.breakpoints.down('sm')]: {
      marginTop:'0'
    },
    width:'100%'
  },

  paper2:{
    width:'100%'
  },

  item1:{
    [theme.breakpoints.down('sm')]: {
     order:'1',

    },
  },

  item2:{
    [theme.breakpoints.down('sm')]: {
      order:'3',
      display: 'flex',
     },
  },

  item3:{
    [theme.breakpoints.down('sm')]: {
      order:'2',
 
     },
  },

  item4:{
    [theme.breakpoints.down('sm')]: {
      order:'4',
      display: 'flex',
     },
  },

  wid:{
    width:'10%',
    backgroundColor:'red'
  }

 
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid   container spacing={2} className={classes.grid}>
        <Grid className={classes.item1} item xs={12}  md={8} >
          <Paper ><AboutActor></AboutActor></Paper>
        </Grid>
        <Grid className={classes.item2} item xs={12} sm={6} md={4} >
          <Paper  className={classes.paper2}><PersonalInofo ></PersonalInofo></Paper>
        </Grid>
        <Grid className={classes.item3} item xs={12}  md={8} >
          <Paper ><History></History></Paper>
        </Grid>
        <Grid className={classes.item4} item xs={12} sm={6} md={4}>
          <Paper className={classes.paper4}><Contents></Contents></Paper>
        </Grid>
      </Grid>
    </div>
  );
}