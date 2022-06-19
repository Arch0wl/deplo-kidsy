import React, { useContext, useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import { UserContext } from "../../App";

function ShowKid() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const { user } = useContext(UserContext);

  function handleShowKid() {
    const kidObj = {
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      userId: user.id,
    };
    fetch(`https://deploy-kidsy-api-fb.web.app/kids/kidId`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(kidObj),
    });
  }
  return (
    <>
      <form onSubmit={handleShowKid}>
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
                Show KID
              </Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="firstName"
                autoFocus
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lastName"
                autoFocus
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="dateOfBirth"
                label="Date of Birth"
                type="dateOfBirth"
                id="dateOfBirth"
                autoComplete="dateOfBirth"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </FormControl>
          </Box>
        </Container>
      </form>
    </>
  );
}

export default ShowKid;
