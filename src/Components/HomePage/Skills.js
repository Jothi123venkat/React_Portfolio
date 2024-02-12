  import { Container, Grid } from "@mui/material";
  import React from "react";
  import ProgressBar from "react-bootstrap/ProgressBar";
  import { FaHtml5 } from "react-icons/fa";
  import { IoLogoCss3 } from "react-icons/io";
  import { IoLogoJavascript } from "react-icons/io5";
  import { FaReact } from "react-icons/fa";
  import { reactpng } from "../../Assests/ImageExport/ImageExport";

  const Skills = () => {
  
    return (
      <div style={{ marginTop: "100px" }}data-aos="flip-down"  data-aos-duration="1000" >
        <h1 style={{ textAlign: "center" }}> SKILLS</h1>
        <Container>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item md={6} sm={12} xs={12}>
            <div className="down">
              <h5>
                HTML
                <FaHtml5 style={{ color: "orangered" }} />
              </h5>
              <ProgressBar
                now={90}
                label={`${90}%`}
                className="progress-bar1"
                variant="danger"
              />
            </div>

            <div className="down">
              <h5>
                CSS <IoLogoCss3 style={{ color: "blue" }} />
              </h5>
              <ProgressBar
                now={85}
                label={`${85}%`}
                className="progress-bar2"
                variant="info"
              />
            </div>
            <div className="down">
              <h5>
                JavaScript <IoLogoJavascript style={{ color: "#f0db4f" }} />
              </h5>
              <ProgressBar
                now={75}
                label={`${75}%`}
                className="progress-bar2"
                variant="warning"
              />
            </div>

            <div className="down">
              <h5>
                React <FaReact style={{ color: "#61dbfb" }} />
              </h5>
              <ProgressBar now={82} label={`${82}%`} variant="info" />
            </div>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
          <img src={reactpng} alt="img" style={{width:"100%",maxWidth:"500px",float:"right"}}  />
          </Grid>
        
        </Grid>
        </Container>
      </div>
    );
  };

  export default Skills;
