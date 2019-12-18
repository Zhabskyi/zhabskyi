import {createUseStyles} from 'react-jss';
import Background from '../../static/images/footer_1.jpg';


const useStyles = createUseStyles({
container: {
  position: 'relative',
  zIndex: 0,
  height: '1600px',
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center'
},
title: {
  margin: '70px auto',
  textAlign: 'center'
},
svg: {
  width: '100px',
  height: 'auto'
}

});

export default useStyles;