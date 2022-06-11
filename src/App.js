import React from "react";
// import "./App.css";
import UploadIm from "../src/components/UploadImages/UploadIm";
import Gallery from "./components/UploadImages/Gellery";
// import Menubar from "./components/common/MenuBar";
// import { useState, useEffect } from "react";
// import { storage } from "./firebase";
// import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
// import { v4 } from "uuid"; // uuuid library for different files types

function App() {
  return (
    <>
      <UploadIm />
      <Gallery kidId="h0X9JLF98v2wfZGlCA71" />
      {/* <Menubar /> */}
    </>
  );
}

export default App;
