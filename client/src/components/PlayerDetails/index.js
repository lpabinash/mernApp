import React from 'react';
import { AppBar } from '@material-ui/core';
import { Grid, CircularProgress, Modal } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from '../Posts/Post/Post';

import useStyles from '../../styles';
import ipl from '../../images/ipl.png'

function PlayerDetails(props) {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    return(
        <div>
            <AppBar style={{position:"relative"}} className={classes.appBar} position="static" color="inherit">
                <img className={classes.image} src={ipl} alt="icon" height="180" />
            </AppBar>

            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.filter(searchedItem => searchedItem.title === props.setSearch).map((post) => (
                    <Grid key={post._id} item xs={12} sm={6} md={6}>
                        <Post post={post} setCurrentId={props} />
                    </Grid>
                )
            )}
            </Grid>
        </div>
    )
}
export default PlayerDetails;