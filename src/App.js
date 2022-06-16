import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import React from "react";
import { createContext, useState } from "react";
import { useEffect } from "react";
// import { Dashboard } from "./pages/Dashboard"; // can we name our page with gallery ????
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import { initializeApp } from "firebase/app";
// import Dashboard from "./pages/Dashboard";

// import "./App.css";
import { createTheme, ThemeProvider } from "@material-ui/core";
import { blue, teal } from "@mui/material/colors";
// import SignUpForm from "./components/SignUpForm";
import Home from "./pages/Home";

const firebaseConfig = {
  apiKey: "AIzaSyDnOSWqzZjBgdjnhY8AD9IVRiF1HiyRnQo",
  authDomain: "kidsy-a512e.firebaseapp.com",
  projectId: "kidsy-a512e",
  storageBucket: "kidsy-a512e.appspot.com",
  messagingSenderId: "104773125573",
  appId: "1:104773125573:web:ccbe6babd660c274c077ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const theme = createTheme({
  typography: {
    fontFamily: `'Noto Sans', sans-serif`,
    fontWeightRegular: 400,
  },
  palette: {
    mode: "light",
    primary: {
      main: blue[600],
    },
    secondary: {
      main: teal[400],
    },
    buttonTextcolor: {
      main: teal[400],
    },
  },
});

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  // const [jwt, setJwt] = useState(localStorage.getItem("jwt"));
  const [userId] = useState("kqyrKD7IfTeSSBr2jMbW");

  useEffect(() => {
    fetch(`https://deploy-kidsy-api-fb.web.app/users/${userId}`)
      .then((apiResponse) => {
        return apiResponse.json();
      })
      .then(setUser)
      .catch(alert);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          </Routes>
          {/* <SignUpForm /> */}
        </ThemeProvider>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
