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



const data = {"metaData":[{"name":"NAME"},{"name":"TOTAL_BUDGET"}],
"rows":[
  {"NAME":1972,"TOTAL_BUDGET":9.200000000000001},
  {"NAME":1973,"TOTAL_BUDGET":6.1000000000000005},
  {"NAME":1974,"TOTAL_BUDGET":46.6},{"NAME":1975,"TOTAL_BUDGET":77},
  {"NAME":1976,"TOTAL_BUDGET":112.60000000000001},{"NAME":1977,"TOTAL_BUDGET":59.800000000000004},{"NAME":1978,"TOTAL_BUDGET":37},{"NAME":1979,"TOTAL_BUDGET":95.4},{"NAME":1980,"TOTAL_BUDGET":135.1},{"NAME":1981,"TOTAL_BUDGET":92.10000000000001},{"NAME":1982,"TOTAL_BUDGET":132.9},{"NAME":1983,"TOTAL_BUDGET":109},{"NAME":1984,"TOTAL_BUDGET":98.60000000000001},{"NAME":1985,"TOTAL_BUDGET":84.8},{"NAME":1986,"TOTAL_BUDGET":95},{"NAME":1987,"TOTAL_BUDGET":100.10000000000001},{"NAME":1988,"TOTAL_BUDGET":76.5},{"NAME":1989,"TOTAL_BUDGET":115.8},{"NAME":1990,"TOTAL_BUDGET":92.3},{"NAME":1991,"TOTAL_BUDGET":211.1},{"NAME":1992,"TOTAL_BUDGET":298.2},{"NAME":1993,"TOTAL_BUDGET":290.90000000000003},{"NAME":1994,"TOTAL_BUDGET":435.40000000000003},{"NAME":1995,"TOTAL_BUDGET":421.8},{"NAME":1996,"TOTAL_BUDGET":367.1},{"NAME":1997,"TOTAL_BUDGET":260},{"NAME":1998,"TOTAL_BUDGET":98.2},{"NAME":1999,"TOTAL_BUDGET":80.60000000000001},{"NAME":2000,"TOTAL_BUDGET":76.2},{"NAME":2001,"TOTAL_BUDGET":73.10000000000001},
{"NAME":2002,"TOTAL_BUDGET":82.60000000000001},{"NAME":2003,"TOTAL_BUDGET":91.5},
{"NAME":2004,"TOTAL_BUDGET":83.2},{"NAME":2005,"TOTAL_BUDGET":81},{"NAME":2006,"TOTAL_BUDGET":81.3},
{"NAME":2007,"TOTAL_BUDGET":81.3},{"NAME":2008,"TOTAL_BUDGET":81.3},{"NAME":2009,"TOTAL_BUDGET":81.3},{"NAME":2010,"TOTAL_BUDGET":81.3},{"NAME":2011,"TOTAL_BUDGET":70.2},{"NAME":2012,"TOTAL_BUDGET":65.6},{"NAME":2013,"TOTAL_BUDGET":63.2},{"NAME":2014,"TOTAL_BUDGET":57},
{"NAME":2015,"TOTAL_BUDGET":73.60000000000001},{"NAME":2016,"TOTAL_BUDGET":64.5},
{"NAME":2017,"TOTAL_BUDGET":59.7}]};

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
            <Tab label=" BUDGET AND MISSION ACTIVITY " style={{ marginLeft:'150px', marginRight:'10px', color: 'white'}} value="1"  />
            <Tab label=" TARGETS " style={{ marginRight:'10px', color: 'white' }} value="2" />
            <Tab label=" WAVELENGTH AND RESOLUTION " style={{ marginRight:'10px', color: 'white'}} value="3" />
            <Tab label=" DIVERSITY OF OBSERVATION " style={{ marginRight:'10px', color: 'white' }} value="4" />
            <Tab label=" MISSION BUDGET AND DATA CORRELATION " style={{ marginRight:'10px', color: 'white'}} value="5" />
          </TabList>
        </Box>

        <TabPanel value="1" className="TrendA"> 

            <PlanetSelection /> 
            <TrendsGraph
            xlabel={"FISCAL YEAR"}
            ylabel={"FUNDING (IN MILLIONS)"}
            dataKey1={data.metaData[0].name} 
            dataKey2={data.metaData[1].name} 
            data={data.rows}
            />
        
        </TabPanel>


        <TabPanel value="2">        
            <TrendsGraph
             xlabel={"YEAR"}
             ylabel={"AMOUNT"}
             data={data.rows}/>  

            <DateSlider/> 

            <Button style = {{color:'white'}}> APPLY </Button>

        </TabPanel>

        <TabPanel value="3" className="TrendA"> 
            <PlanetSelection /> 
            <TrendsGraph
             xlabel={"YEAR"}
             ylabel={"AMOUNT"}
             data={data.rows}
            /> 

        </TabPanel>

        <TabPanel value="4" className="TrendA"> 
            <PlanetSelection/> 
            <TrendsGraph
             xlabel={"YEAR"}
             ylabel={"AMOUNT"}
             data={data.rows}/>

        </TabPanel>

        <TabPanel value="5" className="TrendA"> 
            <MissionSelection/>  
            <TrendsGraph
             xlabel={"YEAR"}
             ylabel={"AMOUNT"}
             data={data.rows}/>

        </TabPanel>

      </TabContext>
    </Box>


       
        </div>

   


        
    </div>
    
    
    );
  }
  
  export default Trends;

