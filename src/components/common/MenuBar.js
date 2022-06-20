import Button from "@mui/material/Button";
import { AppBar, IconButton, Typography } from "@mui/material";
import { Toolbar, Box } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

export default function Menubar() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleLogIn = () => {
    navigate("/login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        style={{ background: "blue", color: "aliceblue" }}
      >
        <Toolbar style={{ display: "flex", alignContent: "flex-end" }}>
          {/* <IconButton
            edge="start"
            color="primary"
            aria-label="menu"
          ></IconButton> */}
          <Typography
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
            variant="h6"
          >
            Kidsy
          </Typography>
          <Box mr={5}>
            <Button color="inherit" variant="outlined" onClick={handleLogIn}>
              Log In
            </Button>

            <Button
              color="secondary"
              variant="contained"
              onClick={handleSignUp}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
