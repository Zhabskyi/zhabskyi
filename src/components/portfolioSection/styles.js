import {createUseStyles} from 'react-jss';
import Background from '../../static/images/portfolio_1.jpg';


const useStyles = createUseStyles({
container: {
  marginBottom: '100px',
  position: 'relative',
  zIndex: 0,
  backgroundImage: `url(${Background})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left top'
}

});

export default useStyles;