import {createUseStyles} from 'react-jss';



const useStyles = createUseStyles({
container: {
  maxWidth: '600px',
  margin: '0 auto',
  minHeight: '1350px',
  '@media (min-width: 768px)': {
    maxWidth: '1800px'
  }
},
title: {
  margin: '100px auto',
  textAlign: 'center'
},
row: {
  justifyContent: 'center',
  margin: '0'
}


});

export default useStyles;