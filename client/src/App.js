import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid, Modal } from '@material-ui/core';

import { Card, CardActions, CardContent, CardMedia, Button } from '@material-ui/core/';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import PlayerDetails from './components/PlayerDetails/index';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import ipl from './images/ipl.png';
import './index.css';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const [teams, setTeams] = useState("block");
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    if(e.target.search.value === "")
    setTeams("block");
    else
    setTeams("none");
    
  }
 function onInputchange (e) {
    setSearch(e.target.value.toUpperCase());
    if(e.target.value === "")
    setTeams("block");
    else
    setTeams("none");
  }
  const miClicked = () => {
    console.log("mi");
    setTeams("none");
    setSearch("MI");
  }
  const dcClicked = () => {
    console.log("dc");
    setTeams("none");
    setSearch("DC");
  }
  const rcClicked = () => {
    console.log("rc");
    setTeams("none");
    setSearch("RC");
  }
  const cskClicked = () => {
    console.log("csk");
    setTeams("none");
    setSearch("CSK");
  }
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <BrowserRouter>
     <Switch>
       
        <Route path="/playerdetails" render={()=><PlayerDetails setSearch={search} />} />
        <Route path="/" render={()=> {
          return(
            <div>
              <Container maxWidth="lg">
      <AppBar style={{position:"relative"}} className={classes.appBar} position="static" color="inherit">
        <img className={classes.image} src={ipl} alt="icon" height="180" />
        <form onSubmit = {onSubmit} style={{position:"absolute", right:"35px"}}>
          <input onChange = {onInputchange} class="form-input" type="text" name="search" placeholder="Search Team's Name" />
        </form>
        <div>
     <button class="btn" type="button" onClick={handleOpen}>
        Add Player
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Grid style={{margin: "50px auto"}} item xs={12} sm={4}>
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </Grid>
      </Modal>
     </div>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid style={{display: teams, cursor:"pointer" }} item xs={12} sm={3}>
            <Card onClick={miClicked} className={classes.card}>
              <CardMedia className={classes.media} image='https://etimg.etb2bimg.com/photo/78145880.cms'/>
              <Typography className={classes.title} gutterBottom variant="h5" component="h2">Mumbai Indians(MI)</Typography>
              
            </Card>
            </Grid>
            <Grid style={{display: teams, cursor:"pointer" }} item xs={12} sm={3}>
            <Card onClick={dcClicked} className={classes.card}>
              <CardMedia className={classes.media} image='https://sportslightmedia.com/wp-content/uploads/2020/09/fotojet-2-jpg_710x400xt.jpg' />
              <Typography className={classes.title} gutterBottom variant="h5" component="h2">Delhi Capitals(DC)</Typography>
              
            </Card>
            </Grid>
            <Grid style={{display: teams, cursor:"pointer" }} item xs={12} sm={3}>
            <Card onClick={rcClicked}  className={classes.card}>
              <CardMedia className={classes.media} image='https://images.hindustantimes.com/img/2021/01/15/550x309/RR_logo_1610701396766_1610701407865.PNG'/>
              <Typography className={classes.title} gutterBottom variant="h5" component="h2">Rajasthan Royals(RC)</Typography>
              
            </Card>
            </Grid>
            <Grid style={{display: teams, cursor:"pointer" }} item xs={12} sm={3}>
              <Card onClick={cskClicked} className={classes.card}>
                <CardMedia className={classes.media} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxRTJzYeP2KeuP47EGuJLle7TrgRz5uULUQ&usqp=CAU'/>
                <Typography className={classes.title} gutterBottom variant="h5" component="h2">Chennai Superkings(CSK)</Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
     <Posts setSearch={search} setCurrentId={setCurrentId} />
            </div>
          )
        }} />
     </Switch>
     </BrowserRouter>
  );
};

export default App;
