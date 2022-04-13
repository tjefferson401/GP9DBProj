import * as React from 'react';
import Typography from '@mui/material/Typography';
import img1 from "../Pages/Components/astronaut.png"




function Home() {
    return (
      <div className="Home">
        <div className="float-area">
        <div className="floating-img">
          <img src={img1}  />
        </div>
        </div>

        <div class="box sb">
          
          <h1>Welcome!</h1>
          <Typography variant="body1">
            <p>To The Moon, Astronomy Database Tool</p>
          </Typography>
          </div>
      

      </div>
    );
  }
     



  export default Home;
  