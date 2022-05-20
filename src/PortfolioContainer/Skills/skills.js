import React from "react";
import "./skills.css";
const skills = () => {
  return (
    <section id="skills">
      <div className="skills_aboutme">
        <div className="skills_all">
          <div className="skills__main">
            <div className="about_skills_title">
              <h1>About Me &amp;Skills</h1>
            </div>
            <div className="introduction">
              <h2 className="introduction__title">
                <strong>🙋‍♂️</strong> Introduction
              </h2>
            </div>
          </div>

          <div className="introduction__list">
            <ul>
              <li>안녕하세요.신입 프론트엔드 개발자 홍화낙입니다.</li>
              <li>
                개발자가 되기 위해서 Clone coding이나 인프런 강의를 통해
                독학하며 꾸준히 발전하고 있습니다.
              </li>
              <li>
                꾸준히 노력하고 지금은 새로운 개발 프로젝트에 빠져있습니다.
              </li>
              <li>여행과 카페☕,개발에 대한 관심이 많습니다.</li>
            </ul>
          </div>
        </div>

        <div className="skills2">
          <div className="section__main">
            <div className="section__all2">
              <div className="section__header">
                <h2 className="section__title">
                  <strong>🛠</strong> skills
                </h2>
                <h3>FrontEnd</h3>
              </div>

              <div className="skills__list">
                <ul>
                  <li>HTML , CSS , JS</li>
                  <li>React</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="collaboration">
            <div className="collaboration_title">
              <h3>Collaboration</h3>
            </div>
            <div className="collaboration__contents">
              <div className="collaboration__list">
                <ul>
                  <li>Slack</li>
                  <li>Kakaotalk group chat</li>
                  <li>Firebase</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default skills;
