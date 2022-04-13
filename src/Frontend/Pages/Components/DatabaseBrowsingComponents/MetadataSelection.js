import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@material-ui/core';

export default function MetadataSelection(props) {
  // const [state, setState] = React.useState({
  //   wavelength: false,
  //   time: false,
  //   positions: false,
  //   dataquality: false,
   
  // });

  const handleChange = (event) => {
    props.setMetaState({
      ...props.metaState,
      [event.target.name]: event.target.checked,
    });
  };

  const { WAVELENGTH_RES, TIME, POSITIONS, DATAQUALITY } = props.metaState;


  return (
    <Box sx={{ display:"flex" , 
    width:210 ,height:255,  borderRadius: 10 ,  color: 'white', marginTop:'100px', marginLeft:'50px',
    border:1 }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend" style={{ color: 'white' }} >CELESTIAL BODY</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={WAVELENGTH_RES} onChange={handleChange} name="WAVELENGTH_RES" style={{ color: 'white' }}/>
            }
            label="WAVELENGTH" style={{ color: 'white' }}
          />
          <FormControlLabel
            control={
              <Checkbox checked={TIME} onChange={handleChange} name="TIME" style={{ color: 'white' }} />
            }
            label="TIME" style={{ color: 'white' }}
          />
          <FormControlLabel
            control={
              <Checkbox checked={POSITIONS} onChange={handleChange} name="POSITIONS" style={{ color: 'white' }}/>
            }
            label="POSITIONS" style={{ color: 'white' }}
          />
           <FormControlLabel
            control={
              <Checkbox checked={DATAQUALITY} onChange={handleChange} name="DATAQUALITY" style={{ color: 'white' }}/>
            }
            label="DATA QUALITY" style={{ color: 'white' }}
          />
          
        

        </FormGroup>
        
        {/* <FormHelperText>Be careful</FormHelperText> */}
    
      </FormControl>
      
    </Box>
  );
}
