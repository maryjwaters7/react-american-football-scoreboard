import React, { useState } from "react";
import "./App.css";

const ScoreButtons = () => {

    
  const [home, setHome] = useState(0);
  const [away, setAway] = useState(0);

    return (
        <section className="buttons">
            <div className="homeButtons">
                <button className="homeButtons__touchdown"
                onClick={() => setHome(home + 7)}>
                    Home Touchdown
                </button>
                <button className="homeButtons__fieldGoal"
                onClick={() => setHome(home + 3)}>
                    Home Field Goal
                </button>
            </div>
            <div className="awayButtons">
                <button className="awayButtons__touchdown"
                onClick={() => setAway(away + 7)}>
                    Away Touchdown
                </button>
                <button className="awayButtons__fieldGoal"
                onClick={() => setAway(away + 3)}>
                    Away Field Goal
                </button>
            </div>
      </section>
    );
};

export default ScoreButtons;