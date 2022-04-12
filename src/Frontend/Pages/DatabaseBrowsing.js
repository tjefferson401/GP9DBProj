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

const data = {
    metaData: [
    { name: 'IMAGE_URL' },
    { name: 'DEC_MIN' },
    { name: 'WAVELENGTH_RES' }
    ],
    rows: [
    {
    IMAGE_URL: 'https://opus.pds-rings.seti.org/holdings/previews/HSTUx_xxxx/HSTU0_7717/DATA/VISIT_03/U4YM0301R_full.jpg',
    DEC_MIN: null,
    WAVELENGTH_RES: 0.0027
    },
    {
    IMAGE_URL: 'https://opus.pds-rings.seti.org/holdings/previews/HSTUx_xxxx/HSTU0_7717/DATA/VISIT_03/U4YM030AR_full.jpg',
    DEC_MIN: null,
    WAVELENGTH_RES: 0.0025
    },
    {
    IMAGE_URL: 'https://opus.pds-rings.seti.org/holdings/previews/HSTUx_xxxx/HSTU0_7717/DATA/VISIT_03/U4YM0309R_full.jpg',
    DEC_MIN: null,
    WAVELENGTH_RES: 0.0025
    },
    {
    IMAGE_URL: 'https://opus.pds-rings.seti.org/holdings/previews/HSTUx_xxxx/HSTU0_7717/DATA/VISIT_03/U4YM0308R_full.jpg',
    DEC_MIN: null,
    WAVELENGTH_RES: 0.0025
    },
    {
    IMAGE_URL: 'https://opus.pds-rings.seti.org/holdings/previews/HSTUx_xxxx/HSTU0_7717/DATA/VISIT_03/U4YM0307R_full.jpg',
          DEC_MIN: null,
          WAVELENGTH_RES: 0.0025
        },
        {
          IMAGE_URL: 'https://opus.pds-rings.seti.org/holdings/previews/HSTUx_xxxx/HSTU0_7717/DATA/VISIT_03/U4YM0306R_full.jpg',
          DEC_MIN: null,
          WAVELENGTH_RES: 0.0027
        },
        {
          IMAGE_URL: 'https://opus.pds-rings.seti.org/holdings/previews/HSTUx_xxxx/HSTU0_7717/DATA/VISIT_03/U4YM0305R_full.jpg',
          DEC_MIN: null,
          WAVELENGTH_RES: 0.0047
        },
        {
          IMAGE_URL: 'https://opus.pds-rings.seti.org/holdings/previews/HSTUx_xxxx/HSTU0_7717/DATA/VISIT_03/U4YM0304R_full.jpg',
          DEC_MIN: null,
          WAVELENGTH_RES: 0.0053
        },
        {
          IMAGE_URL: 'https://opus.pds-rings.seti.org/holdings/previews/HSTUx_xxxx/HSTU0_7717/DATA/VISIT_03/U4YM0303R_full.jpg',
          DEC_MIN: null,
          WAVELENGTH_RES: 0.0053
        },
        {
          IMAGE_URL: 'https://opus.pds-rings.seti.org/holdings/previews/HSTUx_xxxx/HSTU0_7717/DATA/VISIT_03/U4YM0302R_full.jpg',
          DEC_MIN: null,
          WAVELENGTH_RES: 0.0047
        }
      ]
    }



    // const image_list = data['rows'].map( (o) => {
    //   return <img src = {o.IMAGE_URL}/>
    //  }

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };


function DatabaseBrowsing() {
  const [modalProps, setModalProps] = React.useState({})
  const [open, setOpen] = React.useState(false);
  const [metaState, setMetaState] = React.useState({
    WAVELENGTH_RES: false,
    TIME: false,
    POSITIONS: false,
    DATAQUALITY: false,
   
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

   
    <div className="DatabaseBrowsing">
    



      <Grid>
          <Menu/>
          <div className='browser-container'>
        <MetadataSelection metaState={metaState} setMetaState={setMetaState}/>
        <div className='image-holder'>



          {imgs} 

        </div>
        </div>
        <DateSlider/>

        
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {modalData}
          </Typography>

        </Box>
      </Modal>



    </div>
  );
}

export default DatabaseBrowsing;
