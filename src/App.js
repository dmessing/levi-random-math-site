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
      <div className="ui container segment">
        <div className="ui  attached message">
          <h1 className="ui header">
            <i className="calculator icon"></i>Mr Litman's Magical Number
            Randomizer
          </h1>
        </div>
        <div className="ui segment four column grid centered">
          <div className="ui  two column centered">
            <label
              alt="first number"
              className="ui massive black circular label"
            >
              {this.state.firstNum}
            </label>
          </div>
          <div className="ui  two column centered">
            <label
              alt="second number"
              className="ui massive black circular label"
            >
              {this.state.secondNum}
            </label>
          </div>
        </div>

        <div
          className="ui bottom attached primary animated button"
          onClick={() => this.handleClick()}
        >
          <div className="visible content huge">Generate Random Numbers</div>
          <div className="hidden content">
            <i className="right arrow icon"></i>
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
