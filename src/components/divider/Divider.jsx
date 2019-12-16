import React from 'react';
import useStyles from "./styles";

const Divider = (props) => {
  const classes = useStyles(props);
	return (
		<div className={classes.divider}><span className={classes.color}></span></div>
	)
}

export default Divider;
