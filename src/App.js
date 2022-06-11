import React from "react";
import "./App.css";
import UploadIm from "../src/components/UploadImages/UploadIm";
// import { useState, useEffect } from "react";
// import { storage } from "./firebase";
// import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
// import { v4 } from "uuid"; // uuuid library for different files types

function App() {
  return (
    <div className="App">
      <UploadIm />
    </div>
  );
}

export default App;
