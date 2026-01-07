import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import demoVideo from "../assets/videos/bombstrapped.mp4";
import robinGif from "../assets/images/robin.gif"; 

const games = [
  "Roblox of course",
  "Minecraft that should also naturally come with",
  "Star Rail someone save me i hate this game",
  "ML",
  "the project moon trio",
  "monkey vs bloons tower defense",
  "terraria please someone play this with me us",
  "the horse training game with the autism factors",
  "OSU YEAHH 🔥 i fell off hard though",
  "visual novels mostly horror or mystery ones",
  "those idol rhythm games i miss llsif",
  "touhou fan games sometimes",
  "stupid weird niche games i find on steam which i shouldnt even be playing or spending money on",
  "BRO IS NOT BEATING THE COMSCI NERD ALLEGATIONS 😭😭"
];

export default function Accordion() {
  return (
    <div className="accordion my-3" id="accordionExample">

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            to be fair i have no idea what to include here
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body border rounded p-3 bg-light">
            wassupp 😭
            crying im so much confusions<br />
            i should just put my contacts here but i dont think i have much of that either 
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            look at this gif btw
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>This is me 24/7 as a neat introduction:</p>
            <img src={robinGif} alt="Robin GIF" style={{ maxWidth: "100%" }} />
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            lets have a look at what goes on in my days
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <p>Here is a short video demonstration, DO NOT REPLICATE:</p>
            <video controls width="100%">
              <source src={demoVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="headingFour">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="true"
            aria-controls="collapseFour"
          >
            games yeay 
          </button>
        </h2>
        <div
          id="collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body border rounded p-3 bg-light">
           {games.map((game, index) => (
            <div key={index}>
             <p>{game}</p>
             {index !== games.length - 1 && <hr />} {/* skip last line */}
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
