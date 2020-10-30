import React from "react";

export const items = [
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0.3,
  0.4,
  0.5,
  0.6,
  0.7,
  0.8,
  0.9,
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNum: props.firstNum,
      secondNum: props.secondNum,
    };
  }

  handleClick() {
    console.log("clicked");
    console.log(this.state);
    var firstRandom = items[Math.floor(Math.random() * items.length)];
    var secondRandom = items[Math.floor(Math.random() * items.length)];
    console.log(firstRandom + " - " + secondRandom);
    this.setState({
      firstNum: firstRandom,
      secondNum: secondRandom,
    });

    console.log("clicked baby");
    console.log(this.state.firstNum);
  }
  render() {
    console.log("here baby");
    return (
      <div className="ui container">
        <div className="ui grid">
          <div className="row">
            <div className="two wide column">
              <label className="ui black circular label">
                {this.state.firstNum}
              </label>
            </div>
            <div className="two wide column">
              <label alt="second number" className="ui black circular label">
                {this.state.secondNum}
              </label>
            </div>
          </div>
          <div className="row">
            <div className="center column">
              <button
                className="ui animated primary button"
                onClick={() => this.handleClick()}
              >
                <div className="visible content">Generate</div>
                <div className="hidden content">
                  <i className="right arrow icon"></i>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
App.defaultProps = {
  firstNum: "Not Randomized",
  secondNum: "Not Randomized",
};

export default App;
