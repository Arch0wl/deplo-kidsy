import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MyKids({ userId }) {
  const [kids, setKids] = useState(null);

  useEffect(() => {
    console.log(`this is my current user id ${userId}`);
    fetch(`https://deploy-kidsy-api-fb.web.app/kids/user/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setKids(data);
      })
      .catch(console.error);
  }, [userId]);

  const navigate = useNavigate();

  const handleKidGallery = (event, key) => {
    console.log(event.target.id);
    console.log(key);
    navigate(`/kidgallery/${event.target.id}`);
  };

  return (
    <div>
      {!kids || kids.length === 0 ? (
        <h2>...</h2>
      ) : kids ? (
        kids.map((kid) => (
          <>
            <button id={kid.kidId} onClick={handleKidGallery} key={kid.kidId}>
              {kid.firstName}
            </button>
          </>
        ))
      ) : (
        <h2> No kids here</h2>
      )}
    </div>
  );
}

export default MyKids;
