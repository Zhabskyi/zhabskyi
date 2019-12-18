import {createUseStyles} from 'react-jss';



const useStyles = createUseStyles({
// container: {
//   backgroundImage: `url(${Background})`,
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'center',
//   '@media (max-width: 768px)': {

//   }
// },
project_hover: {
  position: 'absolute',
  left: '0',
  top: '0',
  width: '100%',
  height: '100%',
  textAlign: 'center',
  background: 'rgba(255, 255, 255, 0.8)',
  transform: 'translateX(-50%)',
  transition: '0.5s',
  opacity: '0',
  overflow: 'hidden'
},
project: {
  position: 'relative',
  marginBottom: '20px',
  overflow: 'hidden',
  width: '410px',
  height: '410px',
  '@media (min-width: 1200px)': {
    width: '550px',
    height: '550px'
  },
  '@media (max-width: 768px)': {
    width: '340px',
    height: '340px'
  },
  '&:hover $project_hover': {
    transform: 'translateX(0%)',
    opacity: '1'
  }
},
project_thumb: {
  width: '100%',
  height: '100%',
  display: 'block',
  margin: 'auto',
  "& $img": {
    width: '100%'
  },
  '@media (min-width: 1200px)': {
    width: '550px',
    height: '550px'
  },
  '@media (max-width: 768px)': {
    width: '340px',
    height: '340px',
    "& $img": {
      width: '100%'
    }
  }
},
title: {
  position: 'absolute',
  top: '20%',
  left: '0',
  right: '0',
  textAlign: 'center'
}


});

export default useStyles;