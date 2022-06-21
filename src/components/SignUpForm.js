import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export default function SignUpForm() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const auth = getAuth();

  const createUserWithFirebase = async ({ email, password }) => {
    const resp = await createUserWithEmailAndPassword(auth, email, password);
    return resp.user;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    fetch("https://deploy-kidsy-api-fb.web.app/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        const { email, password } = data;
        if (createUserWithFirebase(email, password)) {
          setUser({ ...user, data });
        }
      })
      // .then(() => navigate("/dashboard"))
      .catch((err) => console.log(err));
  };

  // const handleSignup = async (e) => {
  //   e.preventDefault();
  //   fetch(`https://deploy-kidsy-api-fb.web.app/users`);
  //   await createUserWithFirebase(form)
  //     .then((response) => {
  //       // hit your API with response.user
  //       navigate("/dashboard");
  //     })
  //     .catch((err) => alert(err.message));
  // };

  return (
    <>
      <form onSubmit={handleSignup}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 60,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <Typography component="h2" variant="h5">
                SIGN UP
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
                // value={name}
                // onChange={(e) => setName(e.target.value)}
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
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
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
                // onClick={handleSignup}
                onClick={() => navigate("/dashboard")}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
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
