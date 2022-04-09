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

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };

  
}

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'absolute',
        width: 1000,
        height: 750,
        // backgroundColor: theme.palette.background.paper,
        backgroundColor: 'rgba(255, 255, 255, 0.65)',
        borderRadius: '20px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));



function Trends() {

    // const [graphedData, setGraphedData] = useState({}); 
    // const [selectedFruit, setSelectedFruit] = useState([]);


    // const handleSelectChange = (event) => {
    //   setSelectedFruit(event.target.value);
    // };

    // const onApplyFilters = () =>  {
    //   setGraphedData(onApplyFilters(selectedFruit))
    // };

   // const[state, setState] = React.useState([]);


   const [value, setValue] = React.useState('1');

   const handleChange = (event, newValue) => {
     setValue(newValue);
   };
    

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
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
            <Tab label="Item One" style={{ color: 'white' }} value="1" />
            <Tab label="Item Two" style={{ color: 'white' }} value="2" />
            <Tab label="Item Three" style={{ color: 'white' }} value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>


        {/* <Grid container justifyContent="center"> */}
        {/* <Grid>
        <Button variant="contained" color="grey" onClick={handleOpen}>
            Trend 1
        </Button>
        <Button variant="contained" color="grey" onClick={handleOpen}>
            Trend 2
        </Button>
        <Button variant="contained" color="grey" onClick={handleOpen}>
            Trend 3
        </Button>
        <Button variant="contained" color="grey" onClick={handleOpen}>
            Trend 4
        </Button>
        <Button variant="contained" color="grey" onClick={handleOpen}>
            Trend 5
        </Button>

        

        </Grid> */}
        </div>

        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}
        >
            <div style={modalStyle} className={classes.paper}>
                <h2>Trend 1</h2> 
                <PlanetSelection/> 
          
                <DateSlider/>

               
            </div>
            
        </Modal>



        
    </div>
    
    
    );
  }
  
  export default Trends;

//   <TrendsNavbar />
//   <Routes>
//     {/* <Route path="/" exact element={<Trends />} />
//     <Route path="/Trend1" element={<Trend1 />} />
//     <Route path="/Trend2" element={<Trend2 />} />
//     <Route path="/Trend3" element={<Trend3 />} />
//     <Route path="/Trend4" element={<Trend4 />} />
//     <Route path="/Trend5" element={<Trend5 />} /> */}
//   </Routes>