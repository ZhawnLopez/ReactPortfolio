import React, { useState, useEffect, useRef } from "react";
import PageTransition from "../components/PageTransition";
import profilePic from "../assets/images/cat.jpg";
import agarthaImg from "../assets/images/agartha.jpeg";
import yakubGif from "../assets/images/yakub.gif";

export default function About({ darkMode }) {
  const [scrollY, setScrollY] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [yakubVisible, setYakubVisible] = useState(false);

  const yakubRef = useRef(null);

  const fullText =
    "...dont ask the maker of the page questions to keep the entrance to agartha safe, like sub and hit the bell for more agartha content im crying why does he slur his speech";
  const typingSpeed = 100; // ms per character

  // track scroll
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // check if yakub section is in view
  useEffect(() => {
    if (yakubRef.current) {
      const rect = yakubRef.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      setYakubVisible(isVisible);
    }
  }, [scrollY]);

  // yakub typing effect like dialogue lmaooo
  useEffect(() => {
    if (!yakubVisible) {
      setDisplayedText("");
      return;
    }

    let currentIndex = 0;
    setDisplayedText("");

    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(currentIndex));
        currentIndex++;
      } else clearInterval(interval);
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [yakubVisible]);

  // scroll thresholds for overlay (white > transparent)
  const fadeStart = 1800;
  const fadeEnd = 2200;
  const overlayOpacity =
    scrollY <= fadeStart
      ? 1
      : scrollY >= fadeEnd
      ? 0
      : 1 - (scrollY - fadeStart) / (fadeEnd - fadeStart);

  const sectionOpacity =
    scrollY < fadeStart
      ? 1
      : Math.max(1 - (scrollY - fadeStart) / (fadeEnd - fadeStart), 0);

  // body background for About only
  useEffect(() => {
    document.body.style.backgroundImage = `url(${agarthaImg})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundColor = "white"; // start white
    document.body.style.transition = "background 0.5s ease";

    return () => {
      // cleanup when leaving About
      document.body.style.backgroundImage = "";
      document.body.style.backgroundColor = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundAttachment = "";
      document.body.style.backgroundRepeat = "";
    };
  }, []);

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: `rgba(255,255,255,${overlayOpacity})`,
    pointerEvents: "none",
    transition: "background-color 0.5s ease",
    zIndex: 0,
  };

  // navbar background slightly darker but visible
  const navbarBackground = darkMode
    ? "rgba(40, 40, 40, 0.95)"
    : "rgba(200, 200, 200, 0.95)";

  return (
    <PageTransition>
      {/* overlay hiding agartha initially */}
      <div style={overlayStyle}></div>

      {/* About section */}
      <section
        className="py-5"
        style={{
          minHeight: "4200px",
          backgroundColor: darkMode ? "#1e1e1e" : "white", // Dark mode only affects this section
          color: darkMode ? "white" : "black",
          padding: "5rem 0",
          position: "relative",
          opacity: sectionOpacity,
          zIndex: 1,
          transition: "background-color 0.5s ease, color 0.5s ease",
        }}
      >
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="row align-items-center">
            <div className="col-md-4 text-center">
              <img
                src={profilePic}
                alt="Profile"
                className="img-fluid rounded-circle shadow"
                style={{ maxWidth: "220px" }}
              />
            </div>

            <div className="col-md-8">
              <h2>About Me</h2>
              <p className="lead">Hello. I am Zhawn Lopez.</p>
              <p>
                I am currently a 2nd Year Computer Science student and I enjoy experimenting with
                different games and ideas. One of my favorite things is discovering unique work
                from other people.
              </p>
              <p><i>asdhashdasd goodbye games page.</i></p>
              <p><b>scrolling down brings you to the land of under 💀</b></p>
            </div>
          </div>
        </div>
      </section>

      {/* yakub Section */}
      <section
        ref={yakubRef}
        className="py-5"
        style={{
          minHeight: "600px",
          position: "relative",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "2rem",
          gap: "1rem",
        }}
      >
        {/* yakub dialogue text */}
        <div
          style={{
            maxWidth: "60%",
            backgroundColor: darkMode ? "#2c2c2c" : "#f0f0f0",
            color: darkMode ? "white" : "black",
            borderRadius: "12px",
            padding: "1rem 1.5rem",
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: "1.1rem",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          {displayedText}
        </div>

        {/* yakub GIF with manual side cropping via overflow */}
        <div
          style={{
            maxWidth: "35%",
            overflow: "hidden", // crops the empty sides
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            transform: yakubVisible ? "translateX(0)" : "translateX(200px)",
            transition: "transform 0.7s ease-out",
          }}
        >
          <img
            src={yakubGif}
            alt="Yakub"
            className="img-fluid"
            style={{
              width: "120%", // manually zoom in to cut empty sides
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      </section>

      {/* navbar styling */}
      <style>{`
        .navbar {
          background-color: ${navbarBackground} !important;
          transition: background-color 0.3s ease;
        }
      `}</style>
    </PageTransition>
  );
}
