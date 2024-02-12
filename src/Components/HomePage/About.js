import { Container, Grid } from "@mui/material";
import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import "./About.css";
import { Button } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item md={4} sx={{ textAlign: "center", background: "#f5f5f5" }}  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"  data-aos-duration="1000">
          <div style={{ padding: "50px" }}>
            <h1>About Me</h1>
            <p style={{ textAlign: "justify" }}>
              Experienced front-end developer with two years of professional
              experience. Proficient in HTML5, CSS3, JavaScript, and modern
              frameworks such as React.js. Skilled in creating responsive and
              visually appealing web applications. Passionate about optimizing
              user experiences and staying updated with emerging web
              technologies.
            </p>
          </div>
        </Grid>

        <Grid item md={8} sx={{ textAlign: "center"}}  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"    data-aos-duration="1000">
          <h4>PERSONAL DETAILS</h4>
          <div style={{ fontSize: "50px" }}>
            <div style={{ textAlign: "center" }}>
             
            </div>
            <Container maxWidth="sm">
              <div style={{ textAlign: "left" ,marginTop:"40px" }}>
                <h6 style={{ color: "gray" }}>
                  <span style={{ fontWeight: 700, color: "#000" }}>
                    NAME &nbsp;: &nbsp;
                  </span>{" "}
                  Venkat
                </h6>
                <h6 style={{ color: "gray" }}>
                  <span style={{ fontWeight: 700, color: "#000" }}>
                    DOB &nbsp;: &nbsp;
                  </span>{" "}
                  12 Feb 1987
                </h6>
                <h6 style={{ color: "gray" }}>
                  <span style={{ fontWeight: 700, color: "#000" }}>
                    NATIONALITY &nbsp;: &nbsp;
                  </span>{" "}
                  Indian
                </h6>
                <h6 style={{ color: "gray" }}>
                  <span style={{ fontWeight: 700, color: "#000" }}>
                    ADDRESS &nbsp;: &nbsp;
                  </span>{" "}
                  121 Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h6>
                <h6 style={{ color: "gray" }}>
                  <span style={{ fontWeight: 700, color: "#000" }}>
                    PH NUMBER &nbsp;: &nbsp;
                  </span>{" "}
                  +91 8765567954
                </h6>
                <h6 style={{ color: "gray" }}>
                  <span style={{ fontWeight: 700, color: "#000" }}>
                    E-MAIL &nbsp;: &nbsp;
                  </span>{" "}
                  tvk123@gmail.com
                </h6>

             
              </div>
            </Container>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
