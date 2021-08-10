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
class AnswerComponent4 extends React.Component {
  constructor(props) {
    super(props);
    // Defining prop types: https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjokJuEh8DvAhVHa8AKHYMGAwkQFjAGegQIDRAD&url=https%3A%2F%2Fidkblogs.com%2Freact%2F56%2FError-Data-is-missing-in-props-validation--eslint-react-prop-types--React&usg=AOvVaw1RhWZ8bQcqgn0JioAdyguJ

    // A good explanation to intiallising states: https://daveceddia.com/where-initialize-state-react/

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

    // MC Options eventually needs to change and use the answer as the index to options available - if
    //  this becomes a problem, a new args for index number can be decided on

    // There should only be one answer, and this will be used as our key to finding alt options to the MC/hint
    // https://reactjs.org/docs/react-component.html

    // Learning: https://stackoverflow.com/questions/40445631/undefined-is-not-an-object-evaluating-this-state
    //  The reason the increment is bc the values of this was not binded to the function(?) ?
    //  Next thing to learn: What is this term 'this' that gets thrown around so liberally???
    // and what is this binding business why do we need to do this ratched thing????
    // Anyway you can do this!!! xxxx <3
  }

  handleClickOutside = () => this.setState({ showHints: false });

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
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
    console.log('before');
    console.log('value:', this.state.value);
    console.log('showhints:', this.state.showHints);
    this.setState({ value: event.currentTarget.innerText, showHints: false });
    console.log('after');
    console.log('value:', this.state.value);
    console.log('showhints:', this.state.showHints);

    // this.checkClickCorrect();
    let correctAnswer = this.state.answer.replace(/\s+/g, '').toLowerCase();
    // let userInput = ((this.state.value).replace(/\s+/g, '')).toLowerCase();
    let userInput = event.currentTarget.innerText.replace(/\s+/g, '').toLowerCase();

    if (userInput == correctAnswer) {
      // Make green
      // this.setState({setColour: true, correct:true,})
      this.setState({
        style: { backgroundColor: '#3D8F4B', border: '1px solid #3D8F4B' },
      });
      // this.setState({color: "backgroundColour: 'green'"});
    } else {
      //  Make it red
      // this.setState({setColour: true, correct:false,})
      this.setState({
        style: { backgroundColor: '#D72638', border: '1px solid #D72638' },
      });
      // this.setState({color: 'red'});
      // this.setState({color: "backgroundColour: 'red'"});
    }
  }

  findIndex(valueName) {
    var index;
    for (index = 0; index < options.length; index++) {
      // for (index in glossary){
      console.log(options[index].correctAnswer);
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
    console.log(index);
    console.log(options[index].selectionAvailable);
    this.setState({ mcOptions: options[index].selectionAvailable });
    // this.state.mcOptions = options[index].selectionAvailable;
  }

  checkAnswer(event) {
    // console.log('check answer works!');
    // 3 things can happen
    // answer correct
    // answer incorrect
    // hint turned on or 2 incorrect answers need

    // Added both bc to be safe bc fs i cba anymore https://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode
    if (event.charCode == 13 || event.keyCode == 13) {
      // on counters: this is how you use preState
      // https://teamtreehouse.com/community/react-docs-now-recommends-using-function-with-prevstate-inside-of-setstate
      // stack version: https://stackoverflow.com/questions/42364838/incrementing-state-value-by-one-using-react/42365066

      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));

      console.log(this.state.count);

      // let correctAnswer = "until I can figure out how to take in a props.answer";
      let correctAnswer = this.state.answer.replace(/\s+/g, '').toLowerCase();
      // let userInput = ((event.currentTarget.innerText).replace(/\s+/g, '')).toLowerCase();
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

      if (this.state.count > 1) {
        this.setState({ showHints: true });
      }
    }

    // https://stackoverflow.com/questions/5203407/how-to-detect-if-multiple-keys-are-pressed-at-once-using-javascript
    // If it's 'command' store it in an array
    // If it's h, check that the array has been stored - how do we ensure that the
    // if it's anything else, clear the array

    // array
    // command button
    // anything else but h
    // h

    // let hasPressedCommand = false;

    // If user has pressed the alt key or the command key (dependent on mac or not)
    // || (event.charCode == 224) || (event.keyCode == 224)
    // command key code for safari / chrome is 91, firefox is 224
    // alt key code is 18
    // https://stackoverflow.com/questions/3902635/how-does-one-capture-a-macs-command-key-via-javascript
    // https://keycode.info

    let command =
      event.charCode == 18 ||
      event.keyCode == 18 ||
      event.charCode == 91 ||
      event.keyCode == 91 ||
      event.charCode == 224 ||
      event.keyCode == 224;
    let questionMark = event.charCode == 191 || event.keyCode == 191;
    // if((event.charCode == 18) || (event.keyCode == 18)|| (event.charCode == 91) || (event.keyCode == 91) || (event.charCode == 224) || (event.keyCode == 224)){
    if (command) {
      // this.setState({value: event.target.value});
      this.setState({ hasPressedCommand: true });
      // hasPressedCommand = true;
      console.log('command pressed!');
      console.log(this.state.hasPressedCommand);
    }
    // else if ((event.charCode != 191) || (event.keyCode != 191)){
    if (!command && !questionMark) {
      this.setState({ hasPressedCommand: false });
      // hasPressedCommand = false;
      console.log('pressed after command is now false');
      console.log(this.state.hasPressedCommand);
    }

    // if(!command){
    //     if(!questionMark){
    //         hasPressedCommand = false;
    //         console.log(hasPressedCommand);
    //     }
    // }

    // if ((event.charCode == 191) || (event.keyCode == 191)){
    if (questionMark) {
      // console.log("question mark pressed!, has pressed command:");
      // console.log(this.state.hasPressedCommand);
      if (this.state.hasPressedCommand == true) {
        // console.log("Hint pressed!");
        // console.log(this.state.hasPressedCommand);

        if (!this.state.showHints) {
          this.setState({ showHints: true });
        } else {
          this.setState({ showHints: false });
        }

        // show multiple choice answer
        // SHOW HINT
        // NEW COMPONENT ?
      }
    }
  }
  // Component did mount

  // Render re-renders consistently for diffing, so when you set a thing to be set here, it does it constantly
  // hence react thinks it's an infinite loop.
  render() {
    // const{
    //     handleChange,
    //     handleSubmit,
    //     checkClickCorrect,
    //     handleClick,
    //     checkAnswer,
    //     state: {
    //         value,
    //         count,
    //         hasPressedCommand, showHints,
    //         setColour,
    //         correct,
    //         color,
    //         style,

    //     }
    // } = this;

    // https://www.digitalocean.com/community/tutorials/react-react-autocomplete
    // original https://codesandbox.io/s/8lyp733pj0
    // https://codesandbox.io/s/loving-brown-qrkfu?file=/src/index.js

    let suggestionsListComponent;
    if (this.state.showHints) {
      console.log('Answer:', this.state.answer);
      // let index = this.findIndex(this.state.answer);
      // let suggestions =
      // console.log("Before",this.state.mcOptions);
      // this.updateMCOptions(index);
      // updateMCOptions(index);
      // console.log(this.state.mcOptions);
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

    // Fragment just basically allows you to not put it in a big boi container -
    // but in this case it might even be more of a hassel - let's see lmfao
    // More info on fragment here lel: https://reactjs.org/docs/fragments.html
    // <Fragment> </Fragment> can now also be replaced with empty tags: <> <>

    // onBlur={()=> this.setState({showHints: false})}

    return (
      <span className="answer-div">
        <span>
          <span className="input-div">
            <input
              className="input"
              style={this.state.style}
              onKeyDown={this.checkAnswer}
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="???"
            />
          </span>
          {suggestionsListComponent}
        </span>
      </span>
    );
  }
}

// style={this.state.style}

//  style = {this.state.setColour ? ({this.state.correct ? { backgroundColor: 'green'} : { backgroundColor: 'red'}}) : { backgroundColor: 'white'}}

// works
// style = {this.state.setColour? { backgroundColor: 'green'} : { backgroundColor: 'blue'}}
//{this.state.setColour? {this.state.correct ? { backgroundColor: 'green'} : { backgroundColor: 'red'}} : { backgroundColor: 'white'}}

// { backgroundColor: 'green'} : { backgroundColor: 'blue'}}
// {this.state.correct ? { color: 'green'} : { color: 'red'}}
// style = {setColour? {correct? { color: 'green'} : { color: 'red'}} : null}

// style={expandPopup ? { height: '30vw' }: null}

AnswerComponent4.propTypes = {
  word: PropTypes.string.isRequired,
};

// const clickOutsideConfig = {
//     handleClickOutside: () => AnswerComponent4.handleClickOutside
//   };

// export default onClickOutside(AnswerComponent4, clickOutsideConfig);
export default onClickOutside(AnswerComponent4);

// export default AnswerComponent4;
