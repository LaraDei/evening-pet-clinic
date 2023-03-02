import {
  Grid,
  Box,
  Container,
  List,
  ListItem,
  ListItemText,
  Stack,
  Button,
} from "@mui/material";
import { Home, Phone } from "@mui/icons-material";

export default function Navigation() {
  return (
    <Box className="Navigation">
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={4}>
            <ListItemText primary="Logo Here" />
          </Grid>

          <Grid item xs={8}>
            <Button variant="outlined">About</Button>
            <Button variant="outlined">Services</Button>
            <Button variant="outlined">Contact Us</Button>
            <Button variant="Text">
              <Home />
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
