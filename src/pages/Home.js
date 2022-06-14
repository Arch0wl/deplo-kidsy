import React from "react";
import Menubar from "../components/common/MenuBar";
import Hero from "../components/Home/Hero";
import Layout from "../components/Home/Layout";
import Footer from "../components/common/Footer";

function Home() {
  return (
    <>
      <Menubar />
      <Hero />
      <Layout />
      <Footer />
    </>
  );
}

export default Home;
