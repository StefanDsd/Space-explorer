import React from "react";
import videoBg from "../assests/Vid1.mp4";
import "./home.css";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="main">
      <video src={videoBg} type="video/mp4" playsinline autoPlay loop muted />
      <motion.div 
      whileInView={{ y: [100, 20], opacity: [0, 1] }}
      transition={{ duration: 0.8, ease: "easeIn" }}
      className="content">
        <h1>Welcome</h1>
        <h2>to</h2>
        <h1>Space Explorer</h1>
      </motion.div>
    </div>
  );
};

export default Home;
