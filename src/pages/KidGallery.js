import React, { useState, useContext } from "react";
import Menubar from "../components/common/MenuBar";
import UploadIm from "../components/UploadImages/UploadIm";
import Gallery from "../components/UploadImages/Gallery";
import Footer from "../components/common/Footer";
// import AddKid from "../components/Dashboard/AddKid";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
// import ShowKid from "../components/Dashboard/showKid";

function KidGallery() {
  const { kidId } = useParams();
  const [kidFirstName, setKidFirstName] = useState(null);

  useEffect(() => {
    if (kidId) {
      fetch(`https://deploy-kidsy-api-fb.web.app/kids/${kidId}`)
        .then((response) => response.json())
        .then((data) => {
          setKidFirstName(data.firstName);
        })
        .catch(console.error);
    }
  }, [kidId]);

  return (
    <>
      <Menubar />
      <h1>
        {kidFirstName ? `${kidFirstName}'s Gallery` : "Loading Gallery..."}
      </h1>
      <UploadIm kidId={kidId} />
      <Gallery kidId={kidId} />
      {/* <ShowKid kidId={kidId} />
          <MyKids userId={user.id} /> 
      {/* </>
      ) : loaded ? (
        <AddKid />
      ) : (
        <h2>Loading...</h2>
      )} */}
      <Footer />
    </>
  );
}
export default KidGallery;
