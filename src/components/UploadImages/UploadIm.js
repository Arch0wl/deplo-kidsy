// import "../";
import { useState, useEffect } from "react";

import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid"; // uuuid library for different files types

function UploadIm() {
  const [imageUpload, setImageUpload] = useState(null);

  const uploadImage = () => {
    if (imageUpload == null) return;
    const filename = imageUpload.name + v4();
    const imageRef = ref(storage, `images/${filename}`);
    console.log(imageRef);
    uploadBytes(imageRef, imageUpload).then((snaphsot) => {
      console.log(snaphsot);
      const url = `https://firebasestorage.googleapis.com/v0/b/deploy-kidsy-api-fb.appspot.com/o/images%2F${filename}?alt=media`;
      console.log(url);
      const data = {
        title: "some title",
        image: url,
      };
      // alert("upload successful");
      fetch(
        "https://deploy-kidsy-api-fb.web.app/craftworks/h0X9JLF98v2wfZGlCA71",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(data),
        }
      ).then(() => {
        window.location.reload(false);
      });
    });
  };

  return (
    <div className="App">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadImage}>Upload Image</button>
    </div>
  );
}

export default UploadIm;
