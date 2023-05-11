import React, { Component } from "react";
import "./temp.css";
export default class Temp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempDisplaye: 10,
      tempColor: "cold",
    };
  }
  addTempNumber() {
    if (this.state.tempDisplaye >= 30) {
      return false;
    }
    this.setState((prevState) => {
      return { tempDisplaye: prevState.tempDisplaye + 1 };
    });
    if (this.state.tempDisplaye >= 15) {
      this.setState({ tempColor: "hot" });
    }
  }

  negativeTempNumber() {
    if (this.state.tempDisplaye <= 0) {
      return false;
    }
    this.setState((prevState) => {
      return { tempDisplaye: prevState.tempDisplaye - 1 };
    });
    if (this.state.tempDisplaye <= 15) {
      this.setState({ tempColor: "cold" });
    }
  }

  render() {
    return (
      <div>
        <div className="app-container">
          <div className="tempPerature-display-container">
            <div className={`temperature-display ${this.state.tempColor}`}>
              {this.state.tempDisplaye}
            </div>
          </div>
          <div className="button-Container">
            <button onClick={this.addTempNumber.bind(this)}>+</button>
            <button onClick={this.negativeTempNumber.bind(this)}>_</button>
          </div>
        </div>
      </div>
    );
  }
}
