import { useEffect, useState, useContext } from "react";
import { ImageUploadContext } from "../../context/ImageUploadContext";

// import { useParams } from "react-router-dom";

// import { getImages } from "../../firebase";

export default function Gallery({ kidId }) {
  // const { imageUpload } = useContext(ImageUploadContext);
  const [craftworks, setCraftworks] = useState();

  useEffect(() => {
    // console.log(kidId);c
    fetch(`https://deploy-kidsy-api-fb.web.app/kids/${kidId}`)
      .then((response) => response.json())
      .then((data) => setCraftworks(data))
      .catch(console.error);
  }, []);

  // useEffect(() => {
  //   console.log(craftworks);
  // }, [craftworks]);

  return (
    <section style={{ margin: "60px" }}>
      {!craftworks || craftworks.length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        craftworks.craftworks.map((craftwork) => (
          // console.log(craftwork)
          <img src={craftwork.image} alt={craftwork.title} key={craftwork.id} />
        ))
      )}
    </section>
  );
}

// https://deploy-kidsy-api-fb.web.app//craftworks/${kidId}
