import React from "react";
import "./AboutApp.scss";
import aboutImg from "../../../images/AboutApp/about.jpg";
const AboutApp = () => {
  return (
    <section className="about" id="about">
      <h2 className="about__header">Poznaj aplikację eatWeek</h2>
      <div className="container">
        <div className="about__text">
          <span>eatWeek</span> to aplikacja ułatwiająca zaplanowanie swoich
          posiłków w rozsądny sposób. Ogranicza się do każdego następnego
          tygodnia aby skupić się na konkretnym celu i małymi krokami pozwala go
          osiągnąć. Ogromna baza przepisów oraz osobiste filtry i preferencje
          użytkownika umożliwiają mu sworzenie swojej spersonalizowanej diety
          oraz jej planera.
        </div>
        <img src={aboutImg} alt="Tasty dinner" className="about__img" />
      </div>
    </section>
  );
};

export default AboutApp;
