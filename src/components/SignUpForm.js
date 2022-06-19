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

// const firebaseConfig = {
//   apiKey: "AIzaSyDnOSWqzZjBgdjnhY8AD9IVRiF1HiyRnQo",
//   authDomain: "kidsy-a512e.firebaseapp.com",
//   projectId: "kidsy-a512e",
//   storageBucket: "kidsy-a512e.appspot.com",
//   messagingSenderId: "104773125573",
//   appId: "1:104773125573:web:ccbe6babd660c274c077ac",
// };

export default function SignUpForm() {
  let navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const auth = getAuth();
  // const app = initializeApp(firebaseConfig);

  const createUserWithFirebase = async ({ email, password }) => {
    const resp = await createUserWithEmailAndPassword(auth, email, password);
    return resp.user;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    await createUserWithFirebase(form)
      .then((response) => {
        navigate("/dashboard");
      })
      .catch((err) => alert(err.message));
  };

  return (
    <>
      <form onSubmit={handleSignup}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 20,
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
                onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                onChange={(e) => setForm({ ...form, email: e.target.value })}
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
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <Button
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
