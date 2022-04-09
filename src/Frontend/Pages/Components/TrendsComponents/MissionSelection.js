import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';

export default function MissionSelection() {
  const [state, setState] = React.useState({
    cassini: false,
    contour: false,
    dart: false,
    dawn: false,
    deepimpact: false,
    deepspace: false,
    europa: false,
    galileo: false,
    genesis: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { cassini, contour, dart, dawn, deepimpact, deepspace, europa, galileo, genesis } = state;


  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">MISSION</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={cassini} onChange={handleChange} name="cassini" />
            }
            label="CASSINI"
          />
          <FormControlLabel
            control={
              <Checkbox checked={contour} onChange={handleChange} name="contour" />
            }
            label="CONTOUR"
          />
          <FormControlLabel
            control={
              <Checkbox checked={dart} onChange={handleChange} name="dart" />
            }
            label="DART"
          />
           <FormControlLabel
            control={
              <Checkbox checked={dawn} onChange={handleChange} name="dawn" />
            }
            label="DAWN"
          />
           <FormControlLabel
            control={
              <Checkbox checked={deepimpact} onChange={handleChange} name="deepimpact" />
            }
            label="DEEP IMPACT"
          />
           <FormControlLabel
            control={
              <Checkbox checked={deepspace} onChange={handleChange} name="deepspace" />
            }
            label="DEEP SPACE"
          />
           <FormControlLabel
            control={
              <Checkbox checked={europa} onChange={handleChange} name="europa" />
            }
            label="EUROPA"
          />
           <FormControlLabel
            control={
              <Checkbox checked={galileo} onChange={handleChange} name="galileo" />
            }
            label="GALILEO"
          />
            <FormControlLabel
            control={
              <Checkbox checked={genesis} onChange={handleChange} name="genesis" />
            }
            label="GENESIS"
          />

        </FormGroup>
        {/* <FormHelperText>Be careful</FormHelperText> */}
      </FormControl>
      
    </Box>
  );
}
