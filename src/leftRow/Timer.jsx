import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      running: false,
      seconds: 0
    };
  }
  handleStartButton = () => {
    if (!this.state.running) {
      this.myInterval = setInterval(() => {
        this.setState((prevState) => ({
          seconds: prevState.seconds + 1,
        }));
      }, 1000);
    } else {
      clearInterval(this.myInterval);
    }
    this.setState({ running: !this.state.running });
  };

  handleResetButton = () => {
    this.setState({ running: false, seconds: 0 });
  };

  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    // const {running, seconds} = this.state
    return (
      <div>
        <p>Elapsed Time: {this.state.seconds}s</p>
        <button onClick={this.handleStartButton}>
          {this.state.running ? "Stop" : "Start"}
        </button>
        <button onClick={this.handleResetButton}>Reset</button>
      </div>
    );
  }
}


export default Timer;