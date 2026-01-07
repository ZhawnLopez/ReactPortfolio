import React, { useState, useRef } from "react";
import PageTransition from "../components/PageTransition";

export default function Profile({ darkMode }) {
  const boxes = [
    {
      title: "Education",
      summary: "school, degree, and whatever seminars here.",
      details: "Back at it again at Krispy Kreme.",
    },
    {
      title: "Skills",
      summary: "Dawg thinks he got skills",
      details: "IM TOP OSU RANK YEAH TOTALLY ",
    },
    {
      title: "Interests",
      summary: "ummm yeah",
      details: "im spongebob",
    },
    {
      title: "Projects",
      summary: "prsonal or school projects.",
      details: "im sorry. but idk what to actually put here",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRefs = useRef([]);

  const handleBoxClick = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
    setTimeout(() => {
      sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100); 
  };

  return (
    <PageTransition>
      <div
        className="container py-5"
        style={{
          backgroundColor: darkMode ? "#1e1e1e" : "#f8f9fa",
          color: darkMode ? "white" : "black",
          minHeight: "90vh",
          transition: "background-color 0.3s, color 0.3s",
        }}
      >
        <h2 className="mb-4 text-center">Portfolio</h2>

        <div className="row g-3">
          {boxes.map((box, index) => (
            <div className="col-md-6" key={index}>
              <div
                className={`p-3 rounded shadow ${
                  darkMode ? "bg-secondary text-light" : "bg-white text-dark"
                }`}
                style={{
                  cursor: "pointer",
                  minHeight: "120px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "transform 0.2s",
                }}
                onClick={() => handleBoxClick(index)}
              >
                <h5>{box.title}</h5>
                <p>{box.summary}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5">
          {boxes.map((box, index) => (
            <div
              ref={(el) => (sectionRefs.current[index] = el)}
              key={index}
              style={{
                display: activeIndex === index ? "block" : "none",
                padding: "30px",
                borderRadius: "10px",
                marginBottom: "40px",
                backgroundColor: darkMode ? "#222222" : "#e0e0e0", 
                boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
              }}
            >
              <h4>{box.title}</h4>
              <p>{box.details}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}