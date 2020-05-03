import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const Counters = this.state.counters;
    const index = Counters.indexOf(counter);
    Counters[index].value++;
    this.setState({ counters: Counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const Counters = this.state.counters.filter(
      (counter) => counterId !== counter.id
    );
    this.setState({ counters: Counters });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          totleCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container-fluid">
          <Counters
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
