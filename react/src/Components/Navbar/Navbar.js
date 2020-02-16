import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  bar:{
    backgroundColor:"white",
  },
  menuButton: {
    display:'none',
    [theme.breakpoints.down('xs')]: {
    display:'block',
    color:'black'
    },
    
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      marginLeft:theme.spacing(2),
      marginRight:theme.spacing(10),
      [theme.breakpoints.down('sm')]: {
        marginRight:theme.spacing(2),
        marginLeft:theme.spacing(0),
      },
      fontSize:'1.8rem',
      fontWeight:'bold',
    },
    color:'black',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'white',
    marginRight:theme.spacing(1),
    borderRadius:'1rem',
    boxShadow:"0 5px 5px #eee",
    
    '&:hover': {
     
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
      width: '40%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  
  inputRoot: {
    color: 'grey',
    
  },
  inputInput: {
    padding: theme.spacing(1, 19, 1, 2),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
     
      '&:focus': {
        
      },
    },
  },
  btn: {
    backgroundImage:"linear-gradient(to right, #28b485  , #7ed56f)",
    color:'white',
    borderRadius:'1rem',
    fontSize:'1rem',
    padding: theme.spacing(1,2),
    [theme.breakpoints.down('xs')]: {
        display:'none'
    },
   
    '&:hover': {
      
    },

  },
  toolbar:{
    display:'flex',
  },
  btnGroub:{
    marginLeft: 'auto',
  },
  login: {
    fontWeight:'bolder',
    color:'black',
    fontSize:'1.2rem',
    [theme.breakpoints.down('xs')]: {
      display:'none'
    },
  },  
  margin: {
    margin: theme.spacing(1),
    borderRadius:'1rem',
    [theme.breakpoints.down('xs')]: {
      display:'none',
    },
  },
  
  
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
           SelfibediA
          </Typography>
          <div className={classes.search}>
            <InputBase
              placeholder="Search by name,education,etc... "
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>

          <Button className={classes.btn}>LOOk UP</Button>
          
          <div className={classes.btnGroub}>
            <Button className={classes.login}>Login</Button>
            <Button variant="outlined" size="large" color="primary" className={classes.margin}>
            SIGN UP
            </Button>
          </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
