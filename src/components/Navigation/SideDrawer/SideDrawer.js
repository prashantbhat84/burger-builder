import React from 'react'
import classes from './SideDrawer.module.css';
import NavigationItems from  '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
const sideDrawer =(props)=>{

	 return(
			<div className={classes.SiseDrawer}>
			<div className={classes.Logo}><Logo/></div>
				
				<nav>
					<NavigationItems/>
				</nav>
			</div>
		);
};

export default sideDrawer;