import React from "react";
import { Brand, Navbar } from "../../components";
import { About, Header, Footer } from "../../containers";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Brand />
      <Footer />
    </div>
  );
};

export default Home;
