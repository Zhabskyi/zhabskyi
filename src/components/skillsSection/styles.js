import {createUseStyles} from 'react-jss';
import Background from '../../static/images/footer_1.jpg';


const useStyles = createUseStyles({
container: {
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
  font: '18px'
},
block: {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center'
},


});

export default useStyles;