import ReactDOM from "react-dom";
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { render } from '@testing-library/react';
import Home from './Home';
import TrendsNavbar from "./TrendPages/TrendsNavBar";
import DatabaseBrowsing from "./DatabaseBrowsing";
import Overview from "./Overview";

import Trend1 from "./TrendPages/Trend1";
import Trend2 from "./TrendPages/Trend2";
import Trend3 from "./TrendPages/Trend3";
import Trend4 from "./TrendPages/Trend4";
import Trend5 from "./TrendPages/Trend5";

import MissionSelection from "./Components/TrendsComponents/MissionSelection";
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

import Grid from "@material-ui/core/Grid";

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import PlanetSelection from "./Components/TrendsComponents/PlanetSelection";
import DateSlider from "./Components/TrendsComponents/DateSlider";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './TrendPages/TrendsNavBarElements.js';

import TrendsGraph from "./Components/TrendsComponents/TrendsGraph";

function Trends() {


   const [value, setValue] = React.useState('1');

   const handleChange = (event, newValue) => {
     setValue(newValue);
   };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
      

        <div className = "Trends">
            <div className = "TrendButtons" >


        <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label=" BUDGET AND MISSION ACTIVITY " style={{ marginLeft:'150px', marginRight:'10px', color: 'white', m:'auto' }} value="1"  />
            <Tab label=" TARGETS " style={{ marginRight:'10px', color: 'white', m:'auto' }} value="2" />
            <Tab label=" WAVELENGTH AND RESOLUTION " style={{ marginRight:'10px', color: 'white' }} value="3" />
            <Tab label=" DIVERSITY OF OBSERVATION " style={{ marginRight:'10px', color: 'white' }} value="4" />
            <Tab label=" MISSION BUDGET AND DATA CORRELATION " style={{ marginRight:'10px', color: 'white' }} value="5" />
          </TabList>
        </Box>

        <TabPanel value="1" className="TrendA"> 

            <PlanetSelection /> 
            <TrendsGraph/>
        
        </TabPanel>


        <TabPanel value="2">        
            <TrendsGraph/>  

            <DateSlider/> 

            <Button style = {{color:'white'}}> APPLY </Button>

        </TabPanel>

        <TabPanel value="3" className="TrendB"> 
            <PlanetSelection /> 
            <TrendsGraph/> 

        </TabPanel>

        <TabPanel value="4" className="TrendA"> 
            <PlanetSelection/> 
            <TrendsGraph/>

        </TabPanel>

        <TabPanel value="5" className="TrendA"> 
            <MissionSelection/>  
            <TrendsGraph/>

        </TabPanel>

      </TabContext>
    </Box>


       
        </div>

   


        
    </div>
    
    
    );
  }
  
  export default Trends;

