import {createUseStyles} from 'react-jss';


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
    height: '80vh'
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
}

});

export default useStyles;