import React from 'react';


import { Link, animateScroll as scroll } from "react-scroll";

import classes from './NavItems.module.scss';
import classnames from 'classnames';




const links = [
  { activeClass: 'active', to: 'Projects', offset: 0, duration: 0 },
  { activeClass: 'active', to: 'Skills', offset: 0, duration: 0 },
  { activeClass: 'active', to: 'About me', offset: 0, duration: 0 }
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
				{links.map(({ key, activeClass, to, offset, duration }) => (
					<li className={classes.item} key={key}>
						<div className={classnames(classes.link, this.props.className)}>
							<Link href="#" activeClass={activeClass}
								to={to}
								spy={true}
								smooth={true}
								offset={offset}
								duration={duration}
								className={classes.ancor}>
								<span>{to}</span><span className={classes.divider}>{this.props.symbol}</span>
							</Link>
						</div>
					</li>
				))}
      </ul>
		)
	}
}

export default NavItems
