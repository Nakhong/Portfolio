import React from "react";
import { Typing } from "typing-effect-reactjs";
import "./Profile.css";
import ME from "./me.jpg";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

export default function Profile() {
  const mystack = ["프론트엔드 개발", "자기소개서"];
  return (
    <header>
      <div className="toolbar">
        <h2 className="toolbar_main">
          <a> HwaNak Hong</a>
        </h2>
        <div className="list_home">
          <ul className="list_main">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#Portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#ContactMe">Contact me</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details">
            <div className="me">
              <img alt="me" src={ME} />
            </div>

            <div className="profile-details-name">
              {" "}
              Hello I`m <sapn className="highlighted-text">Hwa_Nak_Hong</sapn>
            </div>
            <div className="colz">
              <div className="colz-icon">
                <a
                  href="https://www.facebook.com/profile.php?id=100003576937305"
                  target="_blank"
                >
                  <AiFillFacebook />
                </a>
                <a href="https://github.com/Nakhong/" target="_blank">
                  <AiFillGithub />
                </a>
                <a
                  href="https://www.instagram.com/hwa_nak_hong/"
                  target="_blank"
                >
                  <AiFillInstagram />
                </a>
              </div>
            </div>
            <div className="profile-dtails-role">
              <Typing
                text={mystack}
                typeSpeed={200}
                deleteSpeed={200}
                disableBlickingOnEnd={100}
                blinkingSpeed={1}
              />
              <span className="profile-role-tagline">FrontEnd Dev.</span>
            </div>
          </div>

          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
