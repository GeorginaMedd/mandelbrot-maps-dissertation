import React, { useState, Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './answerComponent.css';
import options from './AnswerIndex.jsx';
import onClickOutside from 'react-onclickoutside';
// Dealing with prop type issue:
// https://stackoverflow.com/questions/48107943/line-5-tags-is-missing-in-props-validation-react-prop-types
// import PropTypes from 'prop-types';
// This helped with installation! : https://www.smashingmagazine.com/2020/08/mastering-props-proptypes-react/
import PropTypes from 'prop-types';

// This was taken from answercomponent2 - i decided to leave the comments on answercomponent2 so that i can use it if i need to
class MCComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.checkClickCorrect = this.checkClickCorrect.bind(this);

    this.checkAnswer = this.checkAnswer.bind(this);
    this.findIndex = this.findIndex.bind(this);
    this.updateMCOptions = this.updateMCOptions.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);

    this.state = {
      value: '', //userInput
      count: 1,
      answer: props.word, //actual answer, taking from props
      hasPressedCommand: false,
      mcOptions: options[this.findIndex(props.word)].selectionAvailable,
      showHints: false,
      setColour: false,
      correct: false,
      color: null,
      style: { backgroundColor: '' },
    };
  }

  handleClickOutside = () => this.setState({ showHints: false });

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  checkClickCorrect() {
    let correctAnswer = this.state.answer.replace(/\s+/g, '').toLowerCase();
    let userInput = this.state.value.replace(/\s+/g, '').toLowerCase();

    if (userInput == correctAnswer) {
      // Make green
      this.setState({ setColour: true, correct: true });
      this.setState({
        style: { backgroundColor: '#3D8F4B', border: '1px solid #3D8F4B' },
      });
    } else {
      //  Make it red
      this.setState({ setColour: true, correct: false });
      this.setState({
        style: { backgroundColor: '#D72638', border: '1px solid #D72638' },
      });
    }
  }

  handleClick(event) {
    this.setState({ value: event.currentTarget.innerText, showHints: false });

    // event.checkClickCorrect();

    let correctAnswer = this.state.answer.replace(/\s+/g, '').toLowerCase();
    let userInput = event.currentTarget.innerText.replace(/\s+/g, '').toLowerCase();

    if (userInput == correctAnswer) {
      // Make green
      this.setState({
        style: { backgroundColor: '#3D8F4B', border: '1px solid #3D8F4B' },
      });
    } else {
      //  Make it red
      this.setState({
        style: { backgroundColor: '#D72638', border: '1px solid #D72638' },
      });
    }
  }

  findIndex(valueName) {
    var index;
    for (index = 0; index < options.length; index++) {
      if (
        options[index].correctAnswer.replace(/\s+/g, '').toLowerCase() ===
        valueName.replace(/\s+/g, '').toLowerCase()
      ) {
        return index;
      }
    }
    return -1;
  }

  updateMCOptions(index) {
    this.setState({ mcOptions: options[index].selectionAvailable });
  }

  checkAnswer(event) {
    this.setState({ showHints: true });

    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));

    if (this.state.count > 1) {
      let correctAnswer = this.state.answer.replace(/\s+/g, '').toLowerCase();
      let userInput = this.state.value.replace(/\s+/g, '').toLowerCase();

      if (userInput == correctAnswer) {
        // Make green
        this.setState({
          style: { backgroundColor: '#3D8F4B', border: '1px solid #3D8F4B' },
        });
      } else {
        //  Make it red
        this.setState({
          style: { backgroundColor: '#D72638', border: '1px solid #D72638' },
        });
      }
    }
  }

  // Render re-renders consistently for diffing, so when you set a thing to be set here, it does it constantly
  // hence react thinks it's an infinite loop.
  render() {
    // https://www.digitalocean.com/community/tutorials/react-react-autocomplete
    // original https://codesandbox.io/s/8lyp733pj0
    // https://codesandbox.io/s/loving-brown-qrkfu?file=/src/index.js

    let suggestionsListComponent;
    // needs to be if clicked on instead of show hints
    if (this.state.showHints) {
      suggestionsListComponent = (
        <ul className="suggestions">
          {this.state.mcOptions.map((suggestion) => {
            let className;
            className = 'suggestion-active';

            return (
              <li className={className} key={suggestion} onClick={this.handleClick}>
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    } else {
      suggestionsListComponent = null;
    }

    return (
      <span className="answer-div">
        <span>
          <span className="input-div">
            <button
              className="input"
              style={this.state.style}
              onClick={this.checkAnswer}
              value={this.state.value}
              onChange={this.handleChange}
            >
              {!this.state.value ? '???' : this.state.value}
            </button>
          </span>
          {suggestionsListComponent}
        </span>
      </span>
    );
  }
}

MCComponent.propTypes = {
  word: PropTypes.string.isRequired,
};

export default onClickOutside(MCComponent);
