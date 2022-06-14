// import { Modal } from "@material-ui/core";
import React from "react";
import { ImageUploadContextProvider } from "./context/ImageUploadContext";
// import "./App.css";
// import UploadIm from "../src/components/UploadImages/UploadIm";
// import Gallery from "./components/UploadImages/Gallery";
// import { Routes, Route } from "react-router-dom";
// import Footer from "./components/common/Footer";
// import { blue, teal } from "@mui/material/colors";
import Layout from "./components/Home/Layout.js";

// import Hero from "./components/Home/Hero";
// import Menubar from "./components/common/MenuBar";
// import { createTheme } from "@material-ui/core";

// import ImageGrid from "./components/UploadImages/ImageGrid";
// import MenuBarOther from "./components/common/MenuBarOther";

// const theme = createTheme({
//   palette: {
//     mode: "light",
//     primary: {
//       main: blue[600],
//     },
//     secondary: {
//       main: teal[400],
//     },
//     buttonTextcolor: {
//       main: teal[400],
//     },
//   },
// });

function App() {
  return (
    <>
      <ImageUploadContextProvider>
        {/* <Menubar /> */}
        <Layout />

        {/* <Routes> */}
        {/* <Route path="/craftworks/:kidId" element={<UploadIm />} /> */}
        {/* <UploadIm />
        <Gallery kidId={"h0X9JLF98v2wfZGlCA71"} /> */}

        {/* <Hero /> */}
        {/* <Footer /> */}
        {/* </Routes> */}
      </ImageUploadContextProvider>
    </>
  );
}

export default App;
