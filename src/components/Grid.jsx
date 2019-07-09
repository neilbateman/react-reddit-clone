import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PostCard from './PostCard';
import Card from '@material-ui/core/Card';
import Adds from './Adds';
import NewPostForm from './NewPostForm';
import { getThemeProps } from '@material-ui/styles';
import { formVisibleOnPage } from '../App';
import NewPostControl from './NewPostControl';


const useStyles = makeStyles(theme => ({
  card:{
    justifyContent: 'center',
    maxWidth: '100%',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  addsContainer: {
    border: '1px solid blue',
    marginTop: '2%',
  },

  gridContainer: {
    border: '1px solid green',
    justifyContent: 'spaceBetween',
  }
}));

export default function CenteredGrid(props) {
  const classes = useStyles();
    
  return (

    <div className={classes.root}>
      <div className={classes.gridContainer}>
        <Grid container spacing={1}>
        <Grid item xs={12}>
            <NewPostControl />
            </Grid>
          
          <Grid item xs={6}> 
            <PostCard/>
           </Grid>

          <Grid item xs={4}>
            <Adds/>
          </Grid>
          
        </Grid>
      </div>
      
    </div>
    
  );
}