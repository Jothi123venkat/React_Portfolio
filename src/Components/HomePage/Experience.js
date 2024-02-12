import React from 'react';
import { Container, Grid } from '@mui/material';
import './Experience.css'; // Assuming you have a CSS file for additional styling
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";

function Experience() {
  return (
   <Container>
     <div className="experience-container" style={{marginTop:"40px"}}>
      <h2 style={{textAlign:"center",marginTop:"20px"}}> 2 YEARS OF EXPERIENCE</h2>
      <Grid container spacing={2} sx={{marginTop:"20px"}} >
        {/* <Grid item xs={12} sm={6} data-aos="fade-right"  data-aos-duration="1000">
          <div className="experience-item">
            <h3>UI DEVELOPER</h3>
            <p>TCS</p>
            <p>2021 - 2022</p>
            <marquee>Experienced UI developer proficient in creating intuitive user interfaces that prioritize usability and seamless interactions, with a strong foundation in HTML, CSS, JavaScript, and responsive design principles. Passionate about crafting visually appealing experiences and optimizing user journeys to enhance overall satisfaction and engagement...</marquee>
          </div>
        </Grid> */}
        {/* <Grid item xs={12} sm={6} data-aos="fade-left"  data-aos-duration="1000">
          <div className="experience-item">
            <h3>SOFTWARE ENGINEER</h3>
            <p>CTS</p>
            <p>2022 - 2023</p>
            <marquee>
Accomplished SoftWare developer with a track record of success across multiple projects, showcasing the ability to collaborate effectively with cross-functional teams, prioritize tasks efficiently, and deliver exceptional user-centric solutions within deadline constraints.</marquee>
          </div>
        </Grid>
         */}
        {/* Add more Grid items for additional experience items */}
        <Grid item md={12} sx={{ textAlign: "center" }} >
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
        <Grid item xs={12} sm={12} md={12}  data-aos="fade-right"  data-aos-duration="2000" >
          <div className="experience-item">
            <h3 style={{textAlign:"center"}}>CURRENT EMPLOYNMENT</h3>
            <h3>SOFTWARE ENGINEER</h3>
            <p>Amizhth</p>
            <p>current :2024</p>
            <marquee>
Accomplished SoftWare developer with a track record of success across multiple projects, showcasing the ability to collaborate effectively with cross-functional teams, prioritize tasks efficiently, and deliver exceptional user-centric solutions within deadline constraints.</marquee>
          </div>
        </Grid>
      </Grid>
    </div>
   </Container>
  );
}

export default Experience;
