import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// import { getImages } from "../../firebase";

export default function Gallery({ kidId }) {
  const [craftworks, setCraftworks] = useState();

  useEffect(() => {
    //fetch kid by id
    console.log(kidId);
    fetch(`http://localhost:5000/kids/${kidId}`)
      .then((response) => response.json())
      .then((data) => setCraftworks(data.craftworks))
      .catch(console.error);
  }, [kidId]);

  useEffect(() => {
    console.log(craftworks);
  }, [craftworks]);

  return (
    <section style={{ margin: "60px" }}>
      {!craftworks ? (
        <h2>Loading...</h2>
      ) : (
        craftworks.map(
          (craftwork) => console.log(craftwork)
          //   <img src={craftwork.url} key={craftwork.id} />
        )
      )}
    </section>
  );
}
