import Button from "@mui/material/Button";
import { AppBar, IconButton, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { Toolbar, Box } from "@material-ui/core";

export default function Menubar() {
  //   const navigate = useNavigate;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        style={{ background: "blue", color: "aliceblue" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6">Kidsy</Typography>
          <Box mr={5}>
            <Button color="inherit" variant="outlined">
              Log In
            </Button>
          </Box>
          <Button color="secondary" variant="contained">
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
