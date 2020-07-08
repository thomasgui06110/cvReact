import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "JavaScript", xp: 1.8 },
      { id: 2, value: "CSS", xp: 2 },
      { id: 3, value: "Php", xp: 0.7 },
      { id: 4, value: "Python", xp: 0.4 },
    ],
    framworks: [
      { id: 1, value: "React", xp: 1.4 },
      { id: 2, value: "Bootstrap", xp: 2 },
      { id: 3, value: "Sass", xp: 1.5 },
      { id: 4, value: "MAterial UI", xp: 0.4 },
    ],
  };
  render() {
    let { languages, framworks } = this.state;

    return (
      <div className="languagesFramworks">
        <ProgressBar languages={languages} className="languagesDisplay" title="languages" />
        <ProgressBar languages={framworks} className="framworkDisplay" title="framworks & bibliothèques" />
      </div>
    );
  }
}

export default Languages;
