import React, { useEffect, useState } from "react";

function MyKids({ userId }) {
  const [kids, setKids] = useState(null);

  useEffect(() => {
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

  return (
    <div>
      {!kids || kids.length === 0 ? (
        <h2>Loading...</h2>
      ) : kids ? (
        kids.map((kid) => (
          // console.log(craftwork)
          <>
            <h3>{kid.firstName}</h3>
          </>
        ))
      ) : (
        <h2> No kids here</h2>
      )}
    </div>
  );
}

export default MyKids;
