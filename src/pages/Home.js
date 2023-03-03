import React from "react";
import { Grid, Box, Typography, Container } from "@mui/material";
import staff from "../data/staffData";

export default function Home() {
  return (
    <Container id="home" className="home">
      <p className="header">Evening Pet Clinic</p>
      <div className="home section into">Intro</div>
      <div className="home section staff">
        <Typography>Our Team</Typography>
        <Grid container>
          {staff.map((member, idx) => (
            <Grid
              className={member}
              key={idx}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
            >
              <Box display="flex" justifyContent="center">
                <Typography>{member.firstName}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </div>
      <div className="home section more">
        What we do
        <Grid container>
          <Grid item xs={6}>
            <Typography>New Patients</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Our Services</Typography>
          </Grid>
        </Grid>
      </div>

      <div className="home section reviews">reviews</div>
    </Container>
  );
}
