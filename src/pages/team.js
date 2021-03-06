import React from "react";
import Card from "../components/Card";
import "../App.css";

const team = (props) => {
  return (
    <>
      <Card
        key="team"
        onClick={props.onClick}
        title=""
        text={
          <div className="flex flex-col text-xs gap-4 sm:gap-6">
            <div className="team-holder">
              <p className="team-position">Don</p>
              <p className="team-name">Gabe</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com/gabehilt"
                className="team-contact"
              >
                @gabehilt
              </a>
            </div>
            <div className="team-holder">
              <p className="team-position">Advisor</p>
              <p className="team-name">Danielle</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com/bydaniellekim"
                className="team-contact"
              >
                @bydaniellekim
              </a>
            </div>
            <div className="team-holder">
              <p className="team-position">Global Affairs</p>
              <p className="team-name">Logan</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com/logancayton"
                className="team-contact"
              >
                @logancayton
              </a>
            </div>
            <div className="team-holder">
              <p className="team-position">Graphic Design</p>
              <p className="team-name">Sierra</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com/madebysi.co "
                className="team-contact"
              >
                @madebysi.co
              </a>
            </div>
            <div className="team-holder">
              <p className="team-position">Marketing</p>
              <p className="team-name">Stingray</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com/dymthelights57 "
                className="team-contact"
              >
                @dymthelights57
              </a>
            </div>
            <div className="team-holder">
              <p className="team-position">Web Design</p>
              <p
                className="team-name"
                onDoubleClick={() => alert("Check /katsuya")}
              >
                Katsuya
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://instagram.com/katsuyawashere "
                className="team-contact"
              >
                @katsuyawashere
              </a>
            </div>
          </div>
        }
        nav={props.nav}
      />
    </>
  );
};

export default team;
