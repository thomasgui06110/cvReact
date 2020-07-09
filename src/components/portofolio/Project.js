import React, { Component } from "react";

class Project extends Component {
  state = {
    showInfo: false,
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    const { name, source, info, picture, languagesIcons } = this.props.item;
    return (
      <div className="project">
        <div className="icons">
          {languagesIcons.map((icon) => (
            <i className={icon} key={icon}></i>
          ))}
        </div>
        <h3>{name}</h3>
        <img src={picture} alt={name} onClick={this.handleInfo} />
        <span className="infos" onClick={this.handleInfo}>
          <i className="fas fa-plus-circle"></i>
        </span>
        {this.state.showInfo && (
          <div className="showInfos">
            <div className="infosContent">
              <div className="head">
                <h2>{name}</h2>
                <div className="sourceCode">
                  <a href={source} rel="noopener noreferrer" target="_blank" className="button">Code source</a>
                </div>
              </div>
              <p className="text">{info}</p>
              <div className="button return" onClick={this.handleInfo}>
                Retourner sur la page
              </div>
           
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Project;
