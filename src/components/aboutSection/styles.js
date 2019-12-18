import {createUseStyles} from 'react-jss';
import Background from '../../static/images/arrow-upside.png';


const useStyles = createUseStyles({
container: {
  color: '#2b3310',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  zIndex: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left top',
  '@media (max-width: 768px)': {

  }
},
arrow: {
  margin: 'auto',
  width: '160px',
  height: '160px',
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  '@media (min-width: 1600px)': {
    marginLeft: '70%'
  },
  '@media (max-width: 748px)': {
    width: '80px',
    height: '80px',
  }
},
icons: {
  margin: '300px 13% auto auto'
},
title: {
  margin: '60px auto',
  fontSize: '48px',
  justifyContent: 'center',
  fontFamily: 'Acme, sans-serif',
  '@media (max-width: 748px)': {
    margin: '30px auto',
  }
},
text : {
  margin: '60px auto ',
  padding: '0 100px',
  fontSize: '32px',
  maxWidth: '1500px',
  lineHeight: '2',
  '@media (max-width: 748px)': {
    fontSize: '20px',
    padding: '0 30px',
  }
},
footer: {
  margin: '0 30px',
  paddingLeft: '160px',
  display: 'flex',
  justifyContent: 'space-around',
  '@media (max-width: 748px)': {
    paddingLeft: '20px'
  },
  '& ul:first-child': {
    '@media (max-width: 748px)': {
      width: '200px',
    }
  }
},
footer_arrow: {
  flexGrow:'2'
}


});

export default useStyles;