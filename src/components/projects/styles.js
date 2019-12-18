import {createUseStyles} from 'react-jss';



const useStyles = createUseStyles({
container: {
  maxWidth: '600px',
  '@media (min-width: 768px)': {
    maxWidth: '1200px'
  }
},


});

export default useStyles;