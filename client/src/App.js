import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

import { Card, CardActions, CardContent, CardMedia, Button } from '@material-ui/core/';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import ipl from './images/ipl.png';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        {/* <Typography className={classes.heading} variant="h2" align="center">Teams</Typography> */}
        <img className={classes.image} src={ipl} alt="icon" height="180" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={3}>
            <Card className={classes.card}>
              <CardMedia className={classes.media} image='https://etimg.etb2bimg.com/photo/78145880.cms'/>
              <Typography className={classes.title} gutterBottom variant="h5" component="h2">Mumbai Indians(MI)</Typography>
              
            </Card>

              {/* <Posts setCurrentId={setCurrentId} /> */}
            </Grid>
            <Grid item xs={12} sm={3}>
            <Card className={classes.card}>
              <CardMedia className={classes.media} image='https://sportslightmedia.com/wp-content/uploads/2020/09/fotojet-2-jpg_710x400xt.jpg' />
              <Typography className={classes.title} gutterBottom variant="h5" component="h2">Delhi Capitals(DC)</Typography>
              
            </Card>

              {/* <Posts setCurrentId={setCurrentId} /> */}
            </Grid>
            <Grid item xs={12} sm={3}>
            <Card className={classes.card}>
              <CardMedia className={classes.media} image='https://images.hindustantimes.com/img/2021/01/15/550x309/RR_logo_1610701396766_1610701407865.PNG'/>
              <Typography className={classes.title} gutterBottom variant="h5" component="h2">Rajasthan Royals(RC)</Typography>
              
            </Card>

              {/* <Posts setCurrentId={setCurrentId} /> */}
            </Grid>
            <Grid item xs={12} sm={3}>
            <Card className={classes.card}>
              <CardMedia className={classes.media} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxRTJzYeP2KeuP47EGuJLle7TrgRz5uULUQ&usqp=CAU'/>
              <Typography className={classes.title} gutterBottom variant="h5" component="h2">Chennai Superkings(CSK)</Typography>
              
            </Card>

              {/* <Posts setCurrentId={setCurrentId} /> */}
            </Grid>
            {/* <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid> */}
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
