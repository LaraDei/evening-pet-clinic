import {
  Grid,
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { LocationOn, Phone } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box className="Footer" component="footer">
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={6}>
            <Typography className="footer subtitle">
              Evening Pet Clinic
            </Typography>
            <List>
              <ListItem>
                <LocationOn />
                <Typography className="footer info" style={{ maxWidth: 500 }}>
                  6803 Cherry Ave, Long Beach, CA 90805, United States
                </Typography>
              </ListItem>
              <ListItem>
                <Phone />
                <Typography className="footer info">(562) 422-1223</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={6} sm={4} md={4}>
            <Typography className="footer subtitle">Hours</Typography>
            <List>
              <Grid className="footer hours" container>
                <ListItem>
                  <ListItemText primary="Monday" />
                  <Typography className="footer info">8 AM–7 PM</Typography>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Tuesday" />
                  <Typography className="footer info" style={{ maxWidth: 500 }}>
                    8 AM–7 PM
                  </Typography>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Wednesday" />
                  <Typography className="footer info" style={{ maxWidth: 500 }}>
                    Closed
                  </Typography>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Thursday" />
                  <Typography className="footer info" style={{ maxWidth: 500 }}>
                    8 AM–7 PM
                  </Typography>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Friday" />
                  <Typography className="footer info" style={{ maxWidth: 500 }}>
                    8 AM–5 PM
                  </Typography>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Saturday" />
                  <Typography className="footer info" style={{ maxWidth: 500 }}>
                    8 AM–3 PM
                  </Typography>
                </ListItem>
                <ListItem>
                  <ListItemText primary="Sunday" />
                  <Typography className="footer info" style={{ maxWidth: 500 }}>
                    Closed
                  </Typography>
                </ListItem>
              </Grid>
            </List>
          </Grid>
        </Grid>
        <Box justifyContent="center">
          <Typography className="copyright" align="center">
            {" "}
            Copyright © 2023 Evening Pet Clinic. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
