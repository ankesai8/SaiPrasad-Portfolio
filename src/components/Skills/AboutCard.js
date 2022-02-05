import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sai Prasad </span>
            from <span className="purple"> Anantapur, AndhraPradesh.</span>
            <br />I am B.Tech Graduate of Computer Science Engineering
             at SJCIT, Chickballapur. I'm{" "}
            <b className="purple"> Web developer</b> and
            <b className="purple"> Competative Programming enthusiast.</b>
            <br />I am looking forward to gain competency and exposure in{" "}
            <b className="purple">
              Web development.
            </b>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Browsing Internet
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Music
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "#14FFEC", opacity: 0.7 }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">SaiPrasad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
