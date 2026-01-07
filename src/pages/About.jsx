import React from "react";
import PageTransition from "../components/PageTransition";
import profilePic from "../assets/images/cat.jpg";

export default function About({ darkMode }) {
  return (
    <PageTransition>
      <section
        className="py-5"
        style={{
          backgroundColor: darkMode ? "#1e1e1e" : "#f8f9fa",
          color: darkMode ? "white" : "black",
          minHeight: "80vh",
          transition: "background-color 0.5s, color 0.5s",
        }}
      >
        <div className="container">
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
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
