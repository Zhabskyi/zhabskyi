import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  divider: {
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  color: {
    height: '1px',
    width: '65%',
    boxShadow: '0px 0px 2px 1px rgba(212,204,119,1)',
    backgroundColor:  props => props.color
  }
  });
  
  export default useStyles;