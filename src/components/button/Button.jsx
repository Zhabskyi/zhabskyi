import React from 'react';

import classes from './Button.module.scss';
import classnames from 'classnames';

const Button = (props) => (
	<button
	 	disabled={props.disabled}
		className={classnames(classes.btn, classes[props.btnType], props.className)}
		onClick={props.onClick}>{props.title}</button>
);

export default Button;