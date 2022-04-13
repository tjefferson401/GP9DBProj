import Grid from "@material-ui/core/Grid";
import DateSlider from "./Components/TrendsComponents/DateSlider";
import Menu from "./Components/DatabaseBrowsingComponents/Menu";

import MetadataSelection from "./Components/DatabaseBrowsingComponents/MetadataSelection";
import { Button } from "@material-ui/core";

import TrendsGraph from "./Components/TrendsComponents/TrendsGraph";

import Gallery from "react-grid-gallery";

import { ImageViewer } from "react-image-viewer-dv"
import ImageGallery from 'react-image-gallery';

import Modal from '@mui/material/Modal';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import React from "react";
import { margin } from "@mui/system";

const data = {
  
    metaData: [ 
      { name: 'IMAGE_URL' },
      { name: 'MISSION_COUNT' }, 
      { name: 'IMAGECOUNT' } 
    ],
    rows: [ 
    { 
      IMAGE_URL: 'https://nineplanets.org/wp-content/uploads/2020/03/mercury.png',
      MISSION_COUNT: 2, 
      IMAGECOUNT: 11410 
    },
    { 
      IMAGE_URL: 'https://nineplanets.org/wp-content/uploads/2020/03/venus.png',
      MISSION_COUNT: 2, 
      IMAGECOUNT: 11410 
    }, 
    { 
      IMAGE_URL: 'https://nineplanets.org/wp-content/uploads/2020/03/earth.png',
      MISSION_COUNT: 2, 
      IMAGECOUNT: 11410 
    },
    { 
      IMAGE_URL: 'https://nineplanets.org/wp-content/uploads/2020/03/mars.png',
      MISSION_COUNT: 2, 
      IMAGECOUNT: 11410 
    }, 
    { 
      IMAGE_URL: 'https://nineplanets.org/wp-content/uploads/2020/03/jupiter.png',
      MISSION_COUNT: 2, 
      IMAGECOUNT: 11410 
    }, 
    { 
      IMAGE_URL: 'https://nineplanets.org/wp-content/uploads/2020/03/saturn.png',
      MISSION_COUNT: 2, 
      IMAGECOUNT: 11410 
    }, 
    { 
      IMAGE_URL: 'https://nineplanets.org/wp-content/uploads/2020/03/uranus.png',
      MISSION_COUNT: 2, 
      IMAGECOUNT: 11410 
    }, 
    { 
      IMAGE_URL: 'https://nineplanets.org/wp-content/uploads/2020/03/neptune.png',
      MISSION_COUNT: 2, 
      IMAGECOUNT: 11410 
    }, 
    ]
  
}

const style = {
  model:{
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  },

  img:{
    width: '100%',
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    marginLeft: '300px',

  }
};


function Overview() {
const [modalProps, setModalProps] = React.useState({})
const [open, setOpen] = React.useState(false);
const [metaState, setMetaState] = React.useState({
  MISSION_COUNT: 2, 
  IMAGECOUNT: 11410,

});

const handleOpen = (data) => {
  const newProps = {}
  for (const g of Object.keys(metaState)) {
    if(metaState[g]) {
      console.log(g)
      newProps[g] = data[g]
      console.log(newProps)
    }
  }
  setModalProps(newProps)
  setOpen(true)
};
const handleClose = () => setOpen(false);



const modalData = Object.keys(modalProps).map((m) => {
  return <p>{m}: {modalProps[m]}</p>
})



const imgs = data['rows'].map( (o) => {
  return (
    <div className="image-div">
      <img 
           className='browser-image'
           src = {o['IMAGE_URL']} 
           onClick={() => handleOpen(o)}/>
    </div>

  ) 
  });

 return (

  
   <div className="Overview">

 
         
        
       <div className='image-holder' style={style.img}>
         {imgs } 
       </div>
       
     <Modal
       open={open}
       onClose={handleClose}
       aria-labelledby="modal-modal-title"
       aria-describedby="modal-modal-description"
     >
         <Box sx={style.model}>
         <Typography id="modal-modal-title" variant="h6" component="h2">
           {modalData}
         </Typography>

       </Box>
     </Modal>



   </div>
 );
}

  
  export default Overview;
  