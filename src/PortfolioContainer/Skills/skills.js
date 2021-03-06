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
                <strong>πββοΈ</strong> Introduction
              </h2>
            </div>
          </div>

          <div className="introduction__list">
            <ul>
              <li>μλνμΈμ.μ μ νλ‘ νΈμλ κ°λ°μ ννλμλλ€.</li>
              <li>
                κ°λ°μκ° λκΈ° μν΄μ Clone codingμ΄λ μΈνλ° κ°μλ₯Ό ν΅ν΄
                λννλ©° κΎΈμ€ν λ°μ νκ³  μμ΅λλ€.
              </li>
              <li>
                κΎΈμ€ν λΈλ ₯νκ³  μ§κΈμ μλ‘μ΄ κ°λ° νλ‘μ νΈμ λΉ μ Έμμ΅λλ€.
              </li>
              <li>μ¬νκ³Ό μΉ΄νβ,κ°λ°μ λν κ΄μ¬μ΄ λ§μ΅λλ€.</li>
            </ul>
          </div>
        </div>

        <div className="skills2">
          <div className="section__main">
            <div className="section__all2">
              <div className="section__header">
                <h2 className="section__title">
                  <strong>π </strong> skills
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
