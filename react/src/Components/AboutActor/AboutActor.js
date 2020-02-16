import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles(theme => ({
    root:{
      display:'flex',
      flexDirection:'column',
      lineHeight:'1.7rem',
      padding:'4rem 4rem',
      [theme.breakpoints.down('xs')]: {
        padding:'4rem 2rem',
    },
    },
 
    img0:{
        height:'5rem',
        borderRadius:'5rem',
        width:'4rem',
        imageSize:'cover',
        margin:'0 2rem 0 .5rem',
        marginRight:'2.5rem',
    },
    relatives:{
        display:'flex',
       
        [theme.breakpoints.down('xs')]: {
           
        },
    },
    relatives0:{
        display:'flex',
        [theme.breakpoints.down('xs')]: {
           flexWrap:'wrap'
        },
    },
    prop:{
        width:'20%',
        //fontWeight:'border',
        textAlign:'start',
        fontSize:'1.2rem',
        color:'black',
        [theme.breakpoints.down('xs')]: {
            width:'23%',
        },
    },
    prop0:{
        width:'20%',
        //fontWeight:'border',
        textAlign:'start',
        fontSize:'1.2rem',
        color:'black',
    },
    propValue:{
        color:'#719DC7',
        fontSize:'1.1rem',
    },
    propValue0:{
        color:'#719DC7',
        fontSize:'1.1rem',
        marginRight:'1.5rem',
        [theme.breakpoints.down('xs')]: {
            width:'20%',
            marginRight:'0',
        },
    },
    propValue1:{
        color:'#719DC7',
        fontSize:'1.1rem',
        [theme.breakpoints.down('xs')]: {
            flexBasis:'50%',
            flexShrink:''
        },

        
    },
    span:{
        color:'grey',
        
    },
    span0:{
        color:'grey',
        marginRight:'7rem',
        
        [theme.breakpoints.down('md')]: {
            marginRight:'3rem',
        },
    },
    imgBox:{
        display:'flex',
        // [theme.breakpoints.down('xs')]: {
        //     flexDirection:'column',
        //     transform :'translateY(-2rem)'
        // },
        [theme.breakpoints.down('xs')]: {
           
        },
    },
    img1:{
        height:'4rem',
        borderRadius:'50%',
    },
    img2:{
        height:'4rem',
        borderRadius:'50%',
    },
    img3:{
        height:'4rem',
        width:'4rem',
        borderRadius:'50%',
        imageSize:'cover'
    },
}));
const AboutActor= () =>{
  const classes = useStyles();

  return(
    <div  className={classes.root}>
            <div className={classes.relatives0}>
                <h4 className={classes.prop0}>
                    Relatives:
                </h4>
                <img  className={classes.img0} src="https://images.fandango.com/ImageRenderer/300/0/redesign/static/img/default_poster.png/0/images/masterrepository/performer%20images/p145350/williammapother-madmoney-1.jpg"></img>
                <h5 className={classes.propValue1}>William Mapother <span className={classes.span0}>(cousin)</span></h5>
                <h5 className={classes.propValue0}>+ 3 more </h5>
                <div className={classes.imgBox} >
                    <img className={classes.img1} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSjjHGC0MO0Fnsd4MwTj_ViANvhWqANJT57iIRN76tJ83Do-F9g"></img>
                    <img className={classes.img2} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTAwB7vWNAFghnc_kG5kqirofDm2pI4kEWQVXI-6-HoLVYEkMMW"></img>
                    <img className={classes.img3}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDpHvpKHqxIcIUUWeYvTNJwDkQzQF5_ggh7qdu6CdAFt55Ov5J"></img>
                </div>
            </div>
            <div className={classes.relatives}>
                <h4 className={classes.prop}>Childern:</h4>
                <h5 className={classes.propValue}> 3 </h5>
            </div>
            <div className={classes.relatives}>
                <h4 className={classes.prop}>Spouse(s):</h4>
                <div className={classes.mimi}>
                    <h5 className={classes.propValue}>Mimi Rogers <span className={classes.span}>(m, 1987; div, 1990)</span></h5>
                    <h5 className={classes.propValue}>Mimi Rogers <span className={classes.span}>(m, 1987; div, 1990)</span></h5>
                    <h5 className={classes.propValue}>Mimi Rogers <span className={classes.span}>(m, 1987; div, 1990)</span></h5>
                </div>
                
            </div>
            <div className={classes.relatives}>
                <h4 className={classes.prop}>Aima master:</h4>
                <h5 className={classes.propValue}> Duke University (B.A) university of Verginia (I.D)</h5>
            </div>
            <div className={classes.relatives}> 
                <h4 className={classes.prop}>School:</h4>
                <h5 className={classes.propValue}> HighLine High School (Class of 1987)  <span className={classes.span}>Burlien, WA</span></h5>
            </div>
            <div className={classes.relatives}>
                <h4 className={classes.prop}>Work / Career:</h4>
                <h5 className={classes.propValue}><span className={classes.span}>Sr, Software Developer at </span>Cognic Systems</h5>
            </div>
            <div className={classes.relatives}>
                <h4 className={classes.prop}>Hobbies:</h4>
                <h5 className={classes.propValue}>Cooking, Field Sports, Cats</h5>
            </div>
    </div>
  );

}

export default AboutActor;