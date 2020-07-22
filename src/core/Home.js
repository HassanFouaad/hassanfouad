import React from "react";
import { Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
/* import "../App.css"; */
import labtop from "../images/labtop.jpg";
export default function Home() {
  return (
    <div className="container1">
      <div className="content1">
        <div className="slide">
          <div id="wholist">
            <div id="hello">Hey<span class="wave">👋</span> I'm Hassan</div>
            <div id="who">GRAPHIC DESINGER</div>
            <div id="who2">WEB DEVELOPER</div>
          </div>
        </div>
      </div>
      <div className="content2">
        <div className="slide2">
          <div id="offering">WHAT DO I DO?</div>
          <div>
            <ul className="service">
              <li>
                <Icon
                  className="paint brush"
                  name="computer"
                  size="huge"
                ></Icon>
                <a href="/graphic">
                  <span>Graphic Design</span>
                </a>
              </li>
              <li>
                <Icon className="Icon" name="computer" size="huge" />{" "}
                <a id="web" href="/web">
                  <span>Web Development</span>
                </a>
              </li>
              <li>
                <Icon className="Icon" name="shop" size="huge" />{" "}
                <a id="web" hre="/socialmedia">
                  <span>Social Media</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="content4">
        <span className="ami">EDUCATION</span>
        <div className="info">
          <div className="class">
            Faculty of Engineering KafrElshiekh University
            <br></br>
            <br></br>
            Class of 2020
          </div>
        </div>
      </div>
      <div className="content3">
        <div className="lang-i-code">Technical Skills I do</div>
        <div className="lang">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Node js</li>
            <li>Git</li>
            <li>Express js</li>
            <li>React js</li>
            <li>MONGO</li>
            <li>Firebase</li>
            <li>BootStrap</li>
            <li>jQuery</li>
            <li>Semantic UI</li>
            <li>jQuery</li>
            <li>Adobe Photoshop</li>
            <li>Microsoft Office</li>
          </ul>
        </div>
        <div className="lang-i-code">Soft Skills</div>
        <div className="lang">
          <ul>
            <li>Enthusiasm</li>
            <li>Visual Thinking</li>
            <li>Critical Thinking</li>
            <li>Communication</li>
            <li>Collaboration</li>
            <li>Adaptability</li>
          </ul>
        </div>
      </div>
      <div className="content5">

      </div>
    </div>
  );
}
