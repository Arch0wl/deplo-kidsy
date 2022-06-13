// import { Modal } from "@material-ui/core";
import React from "react";
// import "./App.css";
import UploadIm from "../src/components/UploadImages/UploadIm";
import Gallery from "./components/UploadImages/Gellery";
// import { Routes, Route } from "react-router-dom";
// import Footer from "./components/common/Footer";

// import Hero from "./components/Home/Hero";

// import ImageGrid from "./components/UploadImages/ImageGrid";
// import Menubar from "./components/common/MenuBar";

// import { useState, useEffect } from "react";
// import { storage } from "./firebase";
// import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
// import { v4 } from "uuid"; // uuuid library for different files types

function App() {
  return (
    <>
      {/* <Menubar /> */}
      {/* <Routes> */}
      {/* <Route path="/craftworks/:kidId" element={<UploadIm />} /> */}
      <UploadIm />
      <Gallery />
      {/* <Hero /> */}
      {/* <Footer /> */}

      {/* </Routes> */}
    </>
  );
}

export default App;
