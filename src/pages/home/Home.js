import React from "react";
import { Brand, Navbar, About, Header, Footer } from "./components";
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
