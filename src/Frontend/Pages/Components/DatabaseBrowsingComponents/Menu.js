import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




export default function Menu() {

    const [planet, setPlanet] = React.useState('');

    const handleChangePlanet = (event) => {
      setPlanet(event.target.value);
    };

    const [observation, setObservation] = React.useState('');

    const handleChangeObservation = (event) => {
      setObservation(event.target.value);
    };

    const [mission, setMission] = React.useState('');

    const handleChangeMission = (event) => {
      setMission(event.target.value);
    };

    const [instrument, setInstrument] = React.useState('');

    const handleChangeInstrument = (event) => {
      setInstrument(event.target.value);
    };





  return (
      <div>
     <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel style={{ color: 'white' }} id="demo-simple-select-autowidth-label">CELESTIAL BODY ▼</InputLabel>
        <Select
            style={{ color: 'white' }}
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={planet}
          onChange={handleChangePlanet}
          autoWidth
          label="Planet"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>MOON</MenuItem>
          <MenuItem value={2}>NEPTUNE</MenuItem>
          <MenuItem value={3}>URANUS</MenuItem>
          <MenuItem value={4}>EARTH</MenuItem>
          <MenuItem value={5}>SATURN</MenuItem>
          <MenuItem value={6}>VENUS</MenuItem>
          <MenuItem value={7}>JUPITER</MenuItem>
          <MenuItem value={8}>MARS</MenuItem>
          <MenuItem value={9}>MERCURY</MenuItem>
        </Select>
      </FormControl>


      <FormControl sx={{ m: 1, minWidth: 210 }}>
        <InputLabel style={{ color: 'white' }} id="demo-simple-select-autowidth-label">OBSERVATION TYPE ▼</InputLabel>
        <Select
        style={{ color: 'white' }}
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={observation}
          onChange={handleChangeObservation}
          autoWidth
          label="Observation"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Twenty</MenuItem>
          <MenuItem value={2}>Twenty one</MenuItem>
          <MenuItem value={3}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel style={{ color: 'white' }} id="demo-simple-select-autowidth-label">MISSION ▼ </InputLabel>
        <Select
            style={{ color: 'white' }}
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={mission}
          onChange={handleChangeMission}
          autoWidth
          label="Mission"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>CASSINI</MenuItem>
          <MenuItem value={2}>CONTOUR </MenuItem>
          <MenuItem value={3}>DART</MenuItem>
          <MenuItem value={4}>DEEP IMPACT</MenuItem>
          <MenuItem value={5}>EUROPA</MenuItem>
          <MenuItem value={6}>GALILEO</MenuItem>
          <MenuItem value={7}>GENESIS</MenuItem>
          <MenuItem value={8}>GALILEO</MenuItem>
        </Select>
      </FormControl>


      <FormControl sx={{ m: 1, minWidth: 160 }}>
        <InputLabel style={{ color: 'white' }} id="demo-simple-select-autowidth-label">INSTRUMENT ▼< /InputLabel>
        <Select
            style={{ color: 'white' }}
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={instrument}
          onChange={handleChangeInstrument}
          autoWidth
          label="Instrument"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
   


  
  </div>


   
  );
}
