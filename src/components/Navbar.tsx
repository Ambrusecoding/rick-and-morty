import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppSelector } from "../redux/hooks";
import React from "react";
import { FavoriteComponent } from "./Favorite/Favorite";

const Navbar = () => {
  const items = useAppSelector((state) => state.favoriteReducer);
  const [open, setOpen] = React.useState<boolean>(false);
  const handleStateViewDrawer = () => {
    setOpen((state) => !state);
  };

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
                    <IconButton
                      color="primary"
                      onClick={() => handleStateViewDrawer()}
                    >
                      <Badge color="info" badgeContent={items.length}>
                        <Tooltip TransitionComponent={Zoom} title="Favoritos">
                          <FavoriteIcon color="error" />
                        </Tooltip>
                      </Badge>
                    </IconButton>
                    <Button variant="contained" color="primary">
                      {" "}
                      <Link to="/">Home</Link>
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
        <FavoriteComponent
          open={open}
          handleStateViewDrawer={handleStateViewDrawer}
        />
      </Box>
    </>
  );
};
export default Navbar;
