import { useState } from "react";
import { storage } from "../../firebase/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid"; // uuuid library for different files types

function UploadIm({ kidId }) {
  const [imageUpload, setImageUpload] = useState(null);

  const uploadImage = () => {
    console.log(imageUpload);
    if (imageUpload == null) return;
    const filename = imageUpload.name + v4();
    const imageRef = ref(storage, `images/${filename}`);
    console.log(imageRef);

    uploadBytes(imageRef, imageUpload).then((snaphsot) => {
      console.log(snaphsot);
      const url = `https://firebasestorage.googleapis.com/v0/b/kidsy-a512e.appspot.com/o/images%2F${filename}?alt=media`;
      console.log(url);
      const data = {
        title: "some title",
        image: url,
      };
      // alert("upload successful");
      fetch(`https://deploy-kidsy-api-fb.web.app/craftworks/${kidId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      }).then(() => {
        window.location.reload(false);
      });
    });
  };

  return (
    <div style={{ paddingTop: "100px" }}>
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
