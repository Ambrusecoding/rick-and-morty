import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Rick and Morty
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
