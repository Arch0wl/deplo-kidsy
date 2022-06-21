import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import "./App.css";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Dashboard from "./pages/Dashboard";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { blue, teal } from "@mui/material/colors";
import Home from "./pages/Home";
import KidGallery from "./pages/KidGallery";

const theme = createTheme({
  typography: {
    fontFamily: `'Noto Sans', sans-serif`,
    fontWeightRegular: 400,
  },
  palette: {
    mode: "light",
    primary: {
      main: blue[400],
    },
    secondary: {
      main: teal[400],
    },
    buttonTextcolor: {
      main: teal[400],
    },
  },
});

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);

  const [userId] = useState("ryAf9e23HnoWSjNZBmSv");

  useEffect(() => {
    fetch(`https://deploy-kidsy-api-fb.web.app/users/${userId}`)
      .then((apiResponse) => {
        return apiResponse.json();
      })
      .then(setUser)
      .catch(alert);
  }, [userId]);

  return (
    <>
      {/* <UploadIm />
      <Gallery kidId={"2UGYmzyxrZOzLpr87hQ0"} /> */}

      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/login" element={<LogIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/kidgallery/:kidId" element={<KidGallery />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </ThemeProvider>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
