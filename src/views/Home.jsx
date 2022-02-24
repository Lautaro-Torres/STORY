import React from "react";
import Carrousel from "../components/Carrousel";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Carrousel />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
