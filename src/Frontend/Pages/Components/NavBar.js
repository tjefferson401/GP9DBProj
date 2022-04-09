import React from 'react';
import Header from './Header.js';

import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavBarElements.js';

const Navbar = () => {


  	const isHome = () => {
		return window.location.pathname.indexOf('/Home') != -1;
	};

	const isOverview = () => {
		return window.location.pathname.indexOf('/Overview') != -1;
	};

	const isTrends = () => {
		return window.location.pathname.indexOf('/Trends') != -1;
	};

	const isDatabaseBrowsing = () => {
		return window.location.pathname.indexOf('/DatabaseBrowsing') != -1;
	};



return (
	<>
	<Nav>
		<Bars />
        <Header/>
		<NavMenu>
        {/* <NavLink to='/Home' activeStyle={{ color: 'white' }}>
			HOME
		</NavLink> */}

    <NavLink to='/Home' isActive={() => isHome()} activeStyle={{ color: 'white' }} >
        {/* activeStyle */}
		    HOME
		</NavLink>

		<NavLink to='/Overview' isActive={() => isOverview()} activeStyle={{ color: 'white' }} >
        {/* activeStyle */}
			PLANETARY EXPLORATION
		</NavLink>
        <NavLink to='/Trends' isActive={() => isTrends()} activeStyle={{ color: 'white' }} >
        {/* activeStyle */}
			DATA VISUALIZATION
		</NavLink>
	
		<NavLink to='/DatabaseBrowsing' isActive={() => isDatabaseBrowsing()} activeStyle={{ color: 'white' }} >
        {/* activeStyle */}
			DATABASE SEARCH
		</NavLink>

   
		{/* Second Nav */}
		{/*<NavBtnLink to='/Login'>Sign In</NavBtnLink> */}
		</NavMenu>
		
	</Nav>
	</>
);
};

export default Navbar;