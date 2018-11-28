import React, { Component } from "react";
import Modal from "./components/modal/";

class App extends Component {
  state = {
    menu: [],
    activeDirection: "Top",
    show: false,
    showModal: false,
    modalType: 1,
    activeMan: {}
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  setActiveMan = id => {
    let activeMan = this.state.menu.find(elem => elem.id === id);
    this.setState({ activeMan });
    this.setState({ showModal: !this.state.showModal });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(menu => this.setState({ menu }));
  }

  setActiveDirection = e => {
    this.setState({ activeDirection: e.target.value });
  };

  render() {
    const { activeDirection, show, showModal, activeMan } = this.state;

    return (
      <div className="App">
        <ul className={`myMenu menu${activeDirection} ${show ? "active" : ""}`}>
          {this.state.menu.map(singleMenuItem => (
            <li
              className="menuItem"
              key={singleMenuItem.id}
              onClick={() => this.setActiveMan(singleMenuItem.id)}
            >
              {singleMenuItem.name}
            </li>
          ))}
        </ul>
        <select onChange={this.setActiveDirection}>
          <option value="Top" defaultChecked>
            Position Top
          </option>
          <option value="Left">Position Left</option>
          <option value="Bottom">Position Bottom</option>
          <option value="Right">Position Right</option>
        </select>
        <button onClick={() => this.setState({ show: !show })}>
          {show ? "Hide" : "Show"}
        </button>
        <button onClick={this.toggleModal}>Show Modal</button>
        <Modal
          showModal={showModal}
          toggleModal={this.toggleModal}
          activeMan={activeMan}
        />
      </div>
    );
  }
}

export default App;
