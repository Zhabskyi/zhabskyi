import {createUseStyles} from 'react-jss';
import Background from '../../static/images/footer_1.jpg';


const useStyles = createUseStyles({
container: {
  marginBottom: '50px',
  position: 'relative',
  zIndex: 0,
  minheight: '1400px',
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center'
},
title: {
  margin: '70px auto',
  textAlign: 'center'
},
text : {
  fontSize: '32px',
  fontWaight: '500',
  display: 'block',
  margin: '20px'
},
block: {
  margin: '50px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center'
}


});

export default useStyles;