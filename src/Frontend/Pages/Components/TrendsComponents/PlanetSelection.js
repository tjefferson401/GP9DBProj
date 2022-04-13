import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@material-ui/core';

export default function PlanetSelection() {
  const [state, setState] = React.useState({
    saturn: false,
    neptune: false,
    uranus: false,
    earth: false,
    venus: false,
    jupiter: false,
    mars: false,
    mercury: false,
    moon: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { saturn, neptune, uranus, earth, venus, jupiter, mars, mercury, moon } = state;


  return (
    <Box sx={{ display:"flex" , 
    width:200 ,height:500,  borderRadius: 10 ,  color: 'white',
    border:1}}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend" style={{ color: 'white' }} >CELESTIAL BODY</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={saturn} onChange={handleChange} name="saturn" style={{ color: 'white' }}/>
            }
            label="SATURN" style={{ color: 'white' }}
          />
          <FormControlLabel
            control={
              <Checkbox checked={neptune} onChange={handleChange} name="neptune" style={{ color: 'white' }} />
            }
            label="NEPTUNE" style={{ color: 'white' }}
          />
          <FormControlLabel
            control={
              <Checkbox checked={uranus} onChange={handleChange} name="uranus" style={{ color: 'white' }}/>
            }
            label="URANUS" style={{ color: 'white' }}
          />
           <FormControlLabel
            control={
              <Checkbox checked={earth} onChange={handleChange} name="earth" style={{ color: 'white' }}/>
            }
            label="EARTH" style={{ color: 'white' }}
          />
           <FormControlLabel
            control={
              <Checkbox checked={venus} onChange={handleChange} name="venus" style={{ color: 'white' }} />
            }
            label="VENUS" style={{ color: 'white' }}
          />
           <FormControlLabel
            control={
              <Checkbox checked={jupiter} onChange={handleChange} name="jupiter" style={{ color: 'white' }}/>
            }
            label="JUPITER" style={{ color: 'white' }}
          />
           <FormControlLabel
            control={
              <Checkbox checked={mars} onChange={handleChange} name="mars" style={{ color: 'white' }}/>
            }
            label="MARS" style={{ color: 'white' }}
          />
           <FormControlLabel
            control={
              <Checkbox checked={mercury} onChange={handleChange} name="mercury" style={{ color: 'white' }}/>
            }
            label="MERCURY" style={{ color: 'white' }}
          />
            <FormControlLabel
            control={
              <Checkbox checked={moon} onChange={handleChange} name="moon" style={{ color: 'white' }}/>
            }
            label="MOON" style={{ color: 'white' }}
          />

        </FormGroup>
        {/* <FormHelperText>Be careful</FormHelperText> */}
        <Button style={{ color: 'white' }} >APPLY</Button>
      </FormControl>
     
    </Box>
  );
}
