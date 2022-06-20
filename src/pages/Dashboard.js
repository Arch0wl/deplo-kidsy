import React, { useState, useContext } from "react";
import Menubar from "../components/common/MenuBar";
import UploadIm from "../components/UploadImages/UploadIm";
import Gallery from "../components/UploadImages/Gallery";
import Footer from "../components/common/Footer";
import AddKid from "../components/Dashboard/AddKid";

import { useEffect } from "react";
import { UserContext } from "../App";
// import ShowKid from "../components/Dashboard/showKid";
import MyKids from "../components/Dashboard/MyKids";

function Dashboard() {
  const [currentUser, setCurrentUser] = useState(null);
  const [kidFirstName, setKidFirstName] = useState(null);
  const [kidLastName, setKidLastName] = useState(null);
  const [kidDateOfBirth, setKidDateOfBirth] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      setCurrentUser(user);
      fetch(`https://deploy-kidsy-api-fb.web.app/kids/user/${user.id}`)
        .then((response) => response.json())
        .then((data) => {
          setKidFirstName(data[0].firstName);
          setKidLastName(data[0].lastName);
          setKidDateOfBirth(data[0].dateOfBirth);
        })
        .catch(console.error)
        .finally(() => setLoaded(true));
    }
  }, [user]);

  return (
    <>
      {/* <Menubar /> */}
      {currentUser ? <MyKids userId={currentUser.id} /> : <p>must login</p>}

      <AddKid />

      <Footer />
    </>
  );
}
export default Dashboard;

//       {/* <Menubar /> */}
//       {kidId ? (
//         <>
//           <Menubar />
//           {/* <UploadIm />
//           <Gallery kidId={kidId} /> */}
//           {/* <ShowKid kidId={kidId} /> */}
//           <MyKids userId={user.id} />
//         </>
//       ) : loaded ? (
//         // <AddKid />
//       ) : (
//         <h2>Loading...</h2>
//       )}
//       <Footer />
//     </>
//   );
// }
