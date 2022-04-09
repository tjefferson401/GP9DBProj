import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './TrendsNavBarElements';

import Header from '../Components/Header';



const TrendsNavbar = () => {

	const isTrend1 = () => {
		return window.location.pathname.indexOf('/Trend1') != -1;
	};



return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to='/Trend1' isActive={() => isTrend1()} activeStyle={{ color: 'black' }}>
			QUERY 1
		</NavLink>
		<NavLink to='/Trend2' activeStyle>
            QUERY 2
		</NavLink>
		<NavLink to='/Trend3' activeStyle>
            QUERY 3
		</NavLink>
		<NavLink to='/Trend4' activeStyle>
            QUERY 4
		</NavLink>
		<NavLink to='/Trend5' activeStyle>
            QUERY 5
		</NavLink>
	
		</NavMenu>
		
	</Nav>
	</>
);
};

export default TrendsNavbar;
