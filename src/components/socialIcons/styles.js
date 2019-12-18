import {createUseStyles} from 'react-jss';


const useStyles = createUseStyles({
container: {
  position: 'relative',
  display: 'inline-block',
  margin: 'auto',
  width: props => props.width,
  color: '#2b3310',
  '@media (max-width: 768px)': {

  },
  '& ul': {
    '& li': {
      display: 'block',
      '& a': {
        marginBottom: '35px',
        width: '40px',
        height: '40px',
        display: 'inline-block',
        lineHeight: '40px',
        textAlign: 'center',
        borderRadius: '50%',
        border: '1px solid #2b331078',
        color: '#2b3310',
        fontSize: '24px',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.2s ease',
        '&:hover': {
          color: 'black',
          border: '2px solid #2b331078',
          background: '#abc55581'
        }
      }
    }
  }
},
list: {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: props => props.direction
}

});

export default useStyles;