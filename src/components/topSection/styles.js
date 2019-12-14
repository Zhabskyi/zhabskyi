import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
container: {
  position: 'relative',
  zIndex: 0,
  height: 900,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center'
},
'@include tablet': {
  height: 620
},

});

export default useStyles;