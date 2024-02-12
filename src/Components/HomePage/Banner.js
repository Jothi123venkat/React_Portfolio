import { Grid } from '@mui/material'
import React from 'react'
import { banner } from '../../Assests/ImageExport/ImageExport'
import Navs from '../Navbar/Navs'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";

const Banner = () => {
  const text = '{ Hi I am Venkat }'
  const text2 = '<A Passionate Front End Developer/>'
  return (
    <div>
         <Navs/>
<div style={{background:"#f5f5f5"}}>
   
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
        
            <Grid item md={4} xs={12} data-aos="fade-right"  data-aos-duration="2000">
                <img src={banner} alt="img" style={{width:"100%"} }/>
            </Grid>
        
            <Grid item md ={8} xs={12} sx={{textAlign:"center"}} >
              <h1>{text}</h1>
              <h1 id="typewriter" style={{fontFamily:"monospace",display:"flex",justifyContent:"center",fontSize:"19px"}}>{text2}</h1>
              <Grid item md={12} sx={{ textAlign: "center" }}>
          <div style={{ fontSize: "50px" }}>
            <div style={{ textAlign: "center" }}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                spacing={5}
              >
                <Grid item lg={2.25} xs={12} sm={12} className="logo1">
                  <FaHtml5 />
                </Grid>

                <Grid item lg={2.25} xs={12} sm={12} className="logo2">
                  <IoLogoCss3 />
                </Grid>

                <Grid item lg={2.25} xs={12} sm={12} className="logo3">
                  <IoLogoJavascript />
                </Grid>

                <Grid item lg={2.25} xs={12} sm={12} className="logo4">
                  <FaReact />
                </Grid>
              </Grid>
            </div>
       
          </div>
        </Grid>
            </Grid>
        
        
        </Grid>
            </div>
    </div>
 
  )
}

export default Banner 