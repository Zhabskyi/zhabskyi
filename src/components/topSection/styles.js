import {createUseStyles} from 'react-jss';
import Background from '../../static/images/arrow.png';


const useStyles = createUseStyles({
container: {
  color: '#2b3310',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  zIndex: 0,
  height: '100vh',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left top',
  '@media (max-width: 768px)': {

  }
},
name: {
  margin: '200px auto 40px auto',
  justifyContent: 'center',
  fontFamily: 'Acme, sans-serif'
},
title: {
  margin: '0 auto',
  fontSize: '28px',
  justifyContent: 'center',
  fontFamily: 'Acme, sans-serif'
},
icons: {
  margin: '300px 13% auto auto'
},
arrow: {
  position: 'absolute',
  left: '100px',
  top: '67%',
  width: '160px',
  height: '160px',
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  '@media (max-width: 768px)': {
    left: '50px',
    top: '66%',
  }
}

});

export default useStyles;