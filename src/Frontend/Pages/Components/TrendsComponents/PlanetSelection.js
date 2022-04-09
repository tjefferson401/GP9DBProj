import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

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
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">CELESTIAL BODY</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={saturn} onChange={handleChange} name="saturn" />
            }
            label="SATURN"
          />
          <FormControlLabel
            control={
              <Checkbox checked={neptune} onChange={handleChange} name="neptune" />
            }
            label="NEPTUNE"
          />
          <FormControlLabel
            control={
              <Checkbox checked={uranus} onChange={handleChange} name="uranus" />
            }
            label="URANUS"
          />
           <FormControlLabel
            control={
              <Checkbox checked={earth} onChange={handleChange} name="earth" />
            }
            label="EARTH"
          />
           <FormControlLabel
            control={
              <Checkbox checked={venus} onChange={handleChange} name="venus" />
            }
            label="VENUS"
          />
           <FormControlLabel
            control={
              <Checkbox checked={jupiter} onChange={handleChange} name="jupiter" />
            }
            label="JUPITER"
          />
           <FormControlLabel
            control={
              <Checkbox checked={mars} onChange={handleChange} name="mars" />
            }
            label="MARS"
          />
           <FormControlLabel
            control={
              <Checkbox checked={mercury} onChange={handleChange} name="mercury" />
            }
            label="MERCURY"
          />
            <FormControlLabel
            control={
              <Checkbox checked={moon} onChange={handleChange} name="moon" />
            }
            label="MOON"
          />

        </FormGroup>
        {/* <FormHelperText>Be careful</FormHelperText> */}
      </FormControl>
      
    </Box>
  );
}
