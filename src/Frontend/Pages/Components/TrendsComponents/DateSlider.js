import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Button } from '@material-ui/core';
function valuetext(value) {
  return `${value}`;
}

export default function DateSlider() {
  const [value, setValue] = React.useState([1950, 2007]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <div> 
    <Box sx={{ width: 900 }} className = "DateSlider">
      <Slider
        getAriaLabel={() => 'DATE RANGE'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={1900}
        max={2022}
       

      />
      
    </Box>



    </div>
      
  );
}
