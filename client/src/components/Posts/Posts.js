import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress, Modal } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Post from './Post/Post';
import useStyles from './styles';

//  var count = 0;

const Posts = (props) => {
  const posts = useSelector((state) => state.posts);
  const [counter, setcounter] = useState(0);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  let count = 0;
  
  useEffect(() => {
    setcounter(count);
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div>
        {
          props.setSearch ?
          <div style={{backgroundColor:"white", padding:"20px 0px", textAlign:"center", fontSize:"24px", width:"200px", margin:"10px auto 20px auto"}}>{ counter }</div> 
          : null
        }
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.filter(searchedItem => searchedItem.title === props.setSearch).map((post) => {
          count++
          console.log(count)
          return(
            <div>
              <Link style={{textDecoration:"none"}} to="/playerdetails" >
                <Grid onClick={handleOpen} key={post._id} item xs={12} sm={6} md={6}>
                  <Post post={post} setCurrentId={props} />
                </Grid>
              </Link>
            </div>
          )
        } )}
      </Grid>
      </div>
  );
};

export default Posts;
