import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navlink,
} from "react-router-dom";
import React from "react";
import { createContext, useEffect, useState } from "react";
import { ImageUploadContextProvider } from "./context/ImageUploadContext";
// import "./App.css";
import { createTheme } from "@material-ui/core";
import { blue, teal } from "@mui/material/colors";
import Home from "./pages/Home";
import { Dashboard } from "@material-ui/icons";

const theme = createTheme({
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

export const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);
  // const [jwt, setJwt] = useState(localStorage.getItem("jwt"));

  // useEffect (() => {
  //   if (jwt !== null) {
  //     fetch(`${process.env.REACT_APP_API_URL}/getUser`,
  //       { headers: {Authorization: jwt}}
  //       )
  //       .then((apiResponse) => {
  //         if ((apiResponse.status === 403) || (apiResponse.status === 500) )
  //           {
  //             localStorage.removeItem("jwt")
  //             return
  //           }
  //         return apiResponse.json()
  //       })
  //       .then(setUser)
  //       .catch(alert);
  //   }
  // }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>

        <Route path ='/login'
        element={!loggedUser ?  <Login /> : <KidProfile?>} />
        <Route exact path = '/' element={<Home />}
      

      <ImageUploadContextProvider>{/* <Home /> */}</ImageUploadContextProvider>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
