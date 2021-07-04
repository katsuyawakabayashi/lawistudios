import React from "react";
import Card from "../components/Card";
import "../App.css";

const team = () => {
  return (
    <>
      <Card
        title=""
        body={
          <div className="flex flex-col text-xs gap-4">
            <div className="team-holder">
              <p className="team-position">Don</p>
              <p className="team-name">GABE</p>
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
              <p className="team-position">Consigliere</p>
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
                href="https://instagram.com/logancaytonm"
                className="team-contact"
              >
                @logancayton
              </a>
            </div>
            <div className="team-holder">
              <p className="team-position">Design</p>
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
              <p className="team-position">Architecture</p>
              <p className="team-name">Katsuya</p>
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
        moreNav="true"
      />
    </>
  );
};

export default team;
