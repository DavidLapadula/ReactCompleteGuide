import React, { Component } from "react";
import Transition from "react-transition-group/Transition";
import CSSTransition from "react-transition-group/CSSTransition";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          onCLick={() =>
            this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
          }
        ></button>
        <CSSTransition classNames="fade-slide">
          <div>hello</div>
        </CSSTransition>
        {this.state.showBlock ? (
          <Transition
            in={this.state.showBlock}
            timeout={300}
            mountOnEnter
            unmountOnExit
            onEnter={() => {}}
          >
            {(state) => (
              <div
                style={{
                  backgroundColor: "red",
                  transition: "opacity 1s ease-out",
                  opacity: state === "exited" ? 0 : 1,
                }}
              ></div>
            )}
          </Transition>
        ) : null}
        <Modal show={this.state.modalIsOpen} closes={this.closeModal} />
        <Backdrop />
        <button className="Button">Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
