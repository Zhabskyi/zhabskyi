import {createUseStyles} from 'react-jss';
import Background from '../../static/images/arrow.png';


const useStyles = createUseStyles({
container: {
  color: '#2b3310',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  height: 'auto',
  zIndex: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left top',
  '@media (max-width: 768px)': {
    height: 'auto'
  }
},
name: {
  margin: '200px auto 40px auto',
  justifyContent: 'center',
  fontFamily: 'Acme, sans-serif',
  textAlign: 'center',
  '@media (max-width: 768px)': {
    margin: '100px auto 40px auto'
  }
},
title: {
  margin: '0 auto',
  fontSize: '28px',
  justifyContent: 'center',
  textAlign: 'center',
  fontFamily: 'Acme, sans-serif'
},
icons: {
  margin: '280px 13% auto auto',
  '@media (max-width: 768px)': {
    margin: '100px 13% auto auto'
  },
  '@media (min-width: 1200px)': {
    margin: '280px 25% auto auto'
  }
},
arrow: {
  position: 'absolute',
  left: '10px',
  top: '75%',
  width: '160px',
  height: '160px',
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  '@media (max-width: 748px)': {
    top: '80%',
    width: '80px',
    height: '80px',
    left: '50px'
  },
  '@media (min-width: 1600px)': {
    left: '500px',
    top: '75%',
  }
}

});

export default useStyles;