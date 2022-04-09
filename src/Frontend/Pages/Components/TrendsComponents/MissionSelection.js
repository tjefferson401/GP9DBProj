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
        <FormLabel component="legend" style={{ color: 'white' }} >MISSION</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={cassini} onChange={handleChange} name="cassini" style={{ color: 'white' }} />
            }
            label="CASSINI" style={{ color: 'white' }}
          />
          <FormControlLabel
            control={
              <Checkbox checked={contour} onChange={handleChange} name="contour" style={{ color: 'white' }}/>
            }
            label="CONTOUR" style={{ color: 'white' }}
          />
          <FormControlLabel
            control={
              <Checkbox checked={dart} onChange={handleChange} name="dart" style={{ color: 'white' }}/>
            }
            label="DART" style={{ color: 'white' }}
          />
           <FormControlLabel
            control={
              <Checkbox checked={dawn} onChange={handleChange} name="dawn" style={{ color: 'white' }}/>
            }
            label="DAWN" style={{ color: 'white' }}
          />
           <FormControlLabel
            control={
              <Checkbox checked={deepimpact} onChange={handleChange} name="deepimpact" style={{ color: 'white' }}/>
            }
            label="DEEP IMPACT" style={{ color: 'white' }}
          />
           <FormControlLabel
            control={
              <Checkbox checked={deepspace} onChange={handleChange} name="deepspace" style={{ color: 'white' }}/>
            }
            label="DEEP SPACE" style={{ color: 'white' }}
          />
           <FormControlLabel
            control={
              <Checkbox checked={europa} onChange={handleChange} name="europa" style={{ color: 'white' }}/>
            }
            label="EUROPA" style={{ color: 'white' }}
          />
           <FormControlLabel
            control={
              <Checkbox checked={galileo} onChange={handleChange} name="galileo" style={{ color: 'white' }}/>
            }
            label="GALILEO" style={{ color: 'white' }}
          />
            <FormControlLabel
            control={
              <Checkbox checked={genesis} onChange={handleChange} name="genesis" style={{ color: 'white' }}/>
            }
            label="GENESIS" style={{ color: 'white' }}
          />

        </FormGroup>
        {/* <FormHelperText>Be careful</FormHelperText> */}
      </FormControl>
      
    </Box>
  );
}
