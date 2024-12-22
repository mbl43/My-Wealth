import React from "react";
import Layout from "../../components/Layout/Layout";
import { Hero } from "../../components";
import Protected from "../../components/Protected"
const Home = () => {
  const token = localStorage.getItem("token");
  return token ? <Protected/> : <Hero />;
};

export default Home;
