import {createUseStyles} from 'react-jss';
import Background from '../../../static/images/portfolio1.png';



const useStyles = createUseStyles({
container: {
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  '@media (max-width: 768px)': {

  }
},


});

export default useStyles;