import React from "react";
import "./VideoPage.css";
import { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import ScrollButton from "../scroll-button/ScrollButton";

export default function VideoPage() {
  const paralax2 = useRef();

  useEffect(() => {
    function handleParallax() {
      let offset = window.pageYOffset;
      paralax2.current.style.backgroundPositionY = offset * 0.6 + "px";
    }
    window.addEventListener("scroll", handleParallax);

    return () => {
      window.removeEventListener("scroll", handleParallax);
    };
  }, []);
  return (
    <div className="body-videopage">
      <>
        <section>
          <div ref={paralax2} id="parallax" className="parallax-item">
            <h3 className="video-title">Space in Motion</h3>
          </div>
          <div id="parallax" className="parallax-item">
            <motion.div
              whileInView={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 1, ease: "easeIn" }}
              viewport={{ once: true }}
              className="react-player"
            >
              <ReactPlayer
                width={""}
                controls
                sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation allow-presentation"
                url="https://www.youtube.com/watch?v=86YLFOog4GM"
              />
              <h2>Nasa LiveStream</h2>
            </motion.div>
            <motion.div
              whileInView={{ x: [-800, 50], opacity: [0, 1] }}
              transition={{ duration: 1.2, ease: "easeIn" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              viewport={{ once: true }}
              className="pharagraph1"
            >
              <p>
                THIS WILL SHOW LIVE and PRE-RECORDED FOOTAGE - depending on
                signal from the station or if the ISS is on the night side of
                Earth. When the feed is live the words LIVE NOW will appear in
                the top left hand corner of the screen. As the Space Station
                passes into a period of night every 45 mins video is unavailable
                - during this time, and other breaks in transmission, recorded
                footage is shown . When back in daylight the live stream of
                earth will recommence
              </p>
            </motion.div>
          </div>
          <div className="parallax-item">
            <h2>Welcome to the Moon</h2>
            <p></p>
          </div>

          <div className="parallax-item">
            <motion.div
              whileInView={{ x: [-100, 30], opacity: [0, 1] }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="react-player2"
            >
              <ReactPlayer
                width={""}
                controls
                sandbox="allow-forms allow-scripts allow-pointer-lock allow-same-origin allow-top-navigation allow-presentation"
                url="https://https://www.youtube.com/watch?v=gosjiD288Jk&t=1252s"
              />
              <h2>The awesomeness of space</h2>
            </motion.div>
            <motion.div
              whileInView={{ y: [-500, 0], opacity: [0, 1] }}
              transition={{ duration: 1.2, ease: "easeIn" }}
              viewport={{ once: true }}
              className="pharagraph2"
            >
              <p>
                THIS WILL SHOW LIVE and PRE-RECORDED FOOTAGE - depending on
                signal from the station or if the ISS is on the night side of
                Earth. When the feed is live the words LIVE NOW will appear in
                the top left hand corner of the screen.
                As the Space Station passes into a period of night every 45 mins
                video is unavailable - during this time, and other breaks in
                transmission, recorded footage is shown . When back in daylight
                the live stream of earth will recommence
              </p>
            </motion.div>
          </div>
        </section>
      </>
    </div>
  );
}
