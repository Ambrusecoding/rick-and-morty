import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Container sx={{ padding: "20px" }} maxWidth="xl">
              <Grid
                container
                sx={{
                  display: "flex",
                  flexWrap: "nowrap",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                spacing={2}
              >
                <Grid item>
                  <Typography variant="h6">Rick and Morty</Typography>
                </Grid>

                <Grid spacing={2} item>
                  <Stack spacing={2} direction="row">
                    <Button variant="contained" color="primary">
                      {" "}
                      <Link to="/">Home</Link>
                    </Button>
                    <Button variant="contained" color="primary">
                      {" "}
                      <Link to="/episodes">Episodios</Link>
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default Navbar;
