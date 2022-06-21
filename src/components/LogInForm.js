import React, { useState } from "react";
// import { initializeApp } from "../firebase/firebase";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { SettingsSuggestRounded } from "@mui/icons-material";

export default function LogInForm() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const auth = getAuth();

  const signInWithFirebase = async ({ email, password }) => {
    const resp = await signInWithEmailAndPassword(auth, email, password);
    return resp.user;
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    fetch("https://deploy-kidsy-api-fb.web.app/users/userId", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        const { email, password } = data;
        if (signInWithEmailAndPassword(email, password)) {
          SettingsSuggestRounded({ ...user, data });
        }
      })
      .catch((err) => console.log(err));
  };

  // const handleLogIn = async (e) => {
  //   e.preventDefault();
  //   await signInWithFirebase(form)
  //     .then((response) => {
  //       navigate("/dashboard");
  //     })
  //     .catch((err) => alert(err.message));
  // };

  return (
    <>
      <form onSubmit={handleLogIn}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 60,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "grey",
            }}
          >
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <Typography component="h2" variant="h5">
                LOG IN
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                autoFocus
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <Button
                onClick={() => navigate("/dashboard")}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                // onClick={handleLogIn}
              >
                Submit
              </Button>
            </FormControl>
          </Box>
        </Container>
      </form>
    </>
  );
}
