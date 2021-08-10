import React, { useState } from 'react';
import './educationPopup.css';
// import educationalModeContent from './educationalScript.jsx';
// import topic1content from './educationalTopic1.jsx';
import EducationalPopupContent from './EducationalPopupContent.jsx';
import PropTypes from 'prop-types';
import { warpToPoint } from '../../common/utils';
import GlossaryPopup from './GlossaryPopup';
import AnswerComponent4 from './AnswerComponent4';
import MCComponent from './MCComponent';
import CloseIcon from '@material-ui/icons/Close';

function EducationPopup(props) {
  let [pageIndex, setpageIndex] = useState(0);
  let [expandPopup, setExpandPopup] = useState(false);
  let [topicPicked, setTopicPicked] = useState(false);
  let [topicNumber, setTopicNumber] = useState('');
  let [leave, setLeave] = useState(false);

  function nextPage() {
    setpageIndex(pageIndex + 1);
  }

  function resetExpandPopupState() {
    if (expandPopup) {
      setExpandPopup(false);
      // setExpansionDescription('Collapse');
    } else {
      setExpandPopup(true);
      // setExpansionDescription('Expand');
    }
  }

  function goToContent1() {
    setTopicPicked(true);
    setTopicNumber('The basics of the Mandelbrot and Julia sets explained');
  }
  function goToContent2() {
    setTopicPicked(true);
    setTopicNumber('The relationship between the Mandelbrot and Julia sets');
  }

  function zoomOut() {
    warpToPoint(props.mandelbrotControls, {
      // xy_arg = [0,0], z_arg = 1, theta_arg = 0
      // xy: xy_arg,
      // z: z_arg,
      // theta: theta_arg,
      xy: [0.2361652, 0.5633767],
      z: 4,
      theta: 0.2,
    });
  }

  if (topicPicked) {
    return (
      <EducationalPopupContent
        topicName={topicNumber}
        mandelbrotControls={props.mandelbrotControls}
        juliaControls={props.juliaControls}
      />
    );
  } else if (!leave) {
    // return <>{props.show ? markers : null}</>;

    return (
      <>
        <div className="education-popup" style={expandPopup ? { height: '30vh' } : null}>
          <div className="cross-div">
            <p onClick={() => setLeave(true)} className="cross">
              <CloseIcon fontSize="small" />
            </p>
          </div>

          <div className="educational-header">
            <h4 style={{ margin: '0' }}>
              To learn more about these fractals, select a topic below.
            </h4>
            <p style={{ margin: '0', fontSize: '12px' }}>
              Each topic takes around 5 - 10 minutes to complete.
            </p>
          </div>

          <div className="topic-selection">
            <a className="topics" onClick={goToContent1}>
              The basics of the Mandelbrot and Julia sets explained.
            </a>
            <div className="topic-divider" />
            <a className="topics" onClick={goToContent2}>
              The relationship between the Mandelbrot and Julia sets.
            </a>
            <br />
          </div>

          <div className="hr-margin" />
          <hr size="2" width="90%" color="white" />
          <div className="hr-margin" />

          <p className="tutorial-content">
            <span>If you see these... </span> <br />
            <button
              title="I'm a button, click on me to interact with the site in a specific manner when needed."
              onClick={zoomOut}
              className="warpping-button"
            >
              Click on me
            </button>
            <GlossaryPopup word="Hover over me" />
            <br />
            <MCComponent word="Benoit Mandelbrot" /> Click to answer me.
          </p>
        </div>
      </>
    );
  } else {
    return null;
  }
}
// originally below exit inside cross div
// <p onClick={resetExpandPopupState} className="expand">
//   {expandPopup ? 'Collapse' : 'Expand'}
// </p>
// <div className="page-number-div">
//   <p className="guided-page-number">{educationalModeContent[pageIndex].pageNumber}</p>
// </div>
// <div className="expand-div">
// <a onClick={resetExpandPopupState} className="expand" href="#">
//   {expandPopup ? 'Collapse' : 'Expand'}
// </a>
// </div>

// <br/>
// <a className="topics" onClick={goToContent3}>The computation of the Mandelrbot and Julia sets.</a>

// EducationPopup.propTypes = {
//   show: PropTypes.bool.isRequired,
// };

export default EducationPopup;

// <div className="guided-next">
//         <a onClick={nextPage} id="next-button">
//           Next
//         </a>
//       </div>

// {`I'm a button.`} Please click on me when you see me.
// <br />
// Hover over me to learn more about
// the highlighted word.
