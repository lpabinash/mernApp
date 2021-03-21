import { blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"Teal"
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
   padding:"-15px"
  },
  media: {
    height: 0,
    paddingTop: '60%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
title: {
    padding: '0 18px',
    alignContent:"Center"
  },

}));






