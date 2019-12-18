import React from 'react';


import { Link, animateScroll as scroll } from "react-scroll";

import classes from './NavItems.module.scss';
import classnames from 'classnames';




const links = [
  { activeClass: 'active', to: 'projects', name: 'Projects', offset: 0, duration: 600 },
  { activeClass: 'active', to: 'skills', name: 'Skills', offset: 0, duration: 800 },
  { activeClass: 'active', to: 'about', name: 'About me', offset: 0, duration: 1400 }
].map(link => {
  link.key = `nav-link-${link.to}`
  return link
});


class NavItems extends React.Component {

	scrollToTop = () => {
    scroll.scrollToTop();
  };
 
	
	render() {
		return (
      <ul className={classes.menu}>
				{links.map(({ key, activeClass, to, name, offset, duration }) => (
					<li className={classes.item} key={key}>
						<div className={classnames(classes.link, this.props.className)}>
							<Link activeClass={activeClass}
								to={to}
								spy={true}
								smooth={true}
								offset={offset}
								duration={duration}
								className={classes.ancor}>
								<span className={classes.divider}>{this.props.symbol}</span><span>{name}</span><span className={classes.divider}>{this.props.symbol}</span>
							</Link>
						</div>
					</li>
				))}
      </ul>
		)
	}
}

export default NavItems
