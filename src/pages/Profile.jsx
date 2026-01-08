import React, { useState, useRef } from "react";
import PageTransition from "../components/PageTransition";

import cert1 from "../assets/images/cert1.png";
import cert2 from "../assets/images/cert2.png";
import cert3 from "../assets/images/cert3.png";
import cert4 from "../assets/images/cert4.png";
import cert5 from "../assets/images/cert5.png";
import spongebob from "../assets/images/spongebob.jpeg";

export default function Profile({ darkMode }) {
  const boxes = [
    {
      title: "Education",
      summary: "School, degree, and seminars.",
      details:
        "Back at it again in the mines. AUUGHUGHASUDHASD yes its all from linkedin learning i forgot the rest",
      certificates: [
        {
          img: cert1,
          title: "Electronics Foundations: Basic Circuits",
          description: "completed a basic electronics circuits course. yay",
        },
        {
          img: cert2,
          title: "Electronics Foundations: Fundamentals",
          description: "learned yes learned fundamental electronics concepts.",
        },
        {
          img: cert3,
          title: "Learning Arduino Foundations",
          description: "arduino basics and programming.",
        },
        {
          img: cert4,
          title: "Arduino Interfacing with Hardware",
          description: "aonnecting Arduino with real hardware. u can tell im getting lost with what to describe these",
        },
        {
          img: cert5,
          title: "Programming Foundations: Databases",
          description: "database basics with programming.",
        },
      ],
    },
    {
      title: "Skills",
      summary: "Dawg thinks he got skills",
      details: "IM TOP OSU RANK YEAH TOTALLY",
    },
    {
      title: "Interests",
      summary: "ummm yeah",
      details: "im spongebob",
      img: spongebob,
    },
    {
      title: "Projects",
      summary: "Personal or school projects.",
      details: "this thing is my project yes",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRefs = useRef([]);

  const handleBoxClick = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
    setTimeout(() => {
      sectionRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
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

        {/* box selectors */}
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

        {/* details sections */}
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

              {/* certificates for Education */}
              {box.title === "Education" && box.certificates && (
                <div className="row g-4 mt-4">
                  {box.certificates.map((cert, i) => (
                    <div className="col-md-4" key={i}>
                      <div
                        className={`p-2 rounded shadow ${
                          darkMode ? "bg-dark text-light" : "bg-white text-dark"
                        }`}
                        style={{ textAlign: "center", padding: "1rem" }}
                      >
                        <img
                          src={cert.img}
                          alt={cert.title}
                          className="img-fluid mb-2"
                          style={{
                            maxHeight: "150px",
                            objectFit: "cover",
                            borderRadius: "8px",
                          }}
                        />
                        <h6 className="mt-2">{cert.title}</h6>
                        <p style={{ fontSize: "0.9rem" }}>{cert.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* display spongebob image for Interests im spngebob*/}
              {box.img && (
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "2rem",
                  }}
                >
                  <img
                    src={box.img}
                    alt={box.title}
                    className="img-fluid"
                    style={{
                      maxHeight: "300px",
                      borderRadius: "12px",
                      objectFit: "contain",
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
