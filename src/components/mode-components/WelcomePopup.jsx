import React, { useState } from 'react';
import './welcomePopup.css';
import GuidedPopup from './GuidedPopup.jsx';
import EducationPopup from './EducationPopup.jsx';
// import onClickOutside from 'react-onclickoutside';
import { warpToPoint } from '../../common/utils';
import FirstTimeAlert from './FirstTimeAlert';

function WelcomePopup(props) {
  let [guidedButton, setGuidedButton] = useState(false);
  let [educationalButton, setEducationalButton] = useState(false);
  let [showPopup, setshowPopup] = useState(true);
  // this function ends up showing immediately
  function goToGuidedMode() {
    // e.preventDefault();
    setGuidedButton(true);
    // return(alert('hidePopup'));
  }

  function goToEducationalMode() {
    setEducationalButton(true);
  }

  // function mandlebrotWarp(){
  //     // alert("HELLO!");
  //     warpToPoint(props.mandelbrotControls, {
  //         xy: [2,-1],
  //         z: 1,
  //         theta: 0,
  //       });
  // }
  //nothing like classlist.add in react
  //where you can add classname

  WelcomePopup.handleClickOutside = () => setshowPopup(false);

  // tabIndex="0" handleClickOutside={()=>setshowPopup(false)} in div

  if (guidedButton) {
    return <GuidedPopup />;
  } else if (educationalButton) {
    return (
      <EducationPopup
        mandelbrotControls={props.mandelbrotControls}
        juliaControls={props.juliaControls}
      />
    );
  } else if (showPopup) {
    return (
      <div tabIndex="1" onBlur={() => setshowPopup(false)} className="welcome-popup">
        <FirstTimeAlert />
      </div>
    );
  } else {
    return null;
  }
}
// <a onClick={mandlebrotWarp}>Lei Tan Test</a>

// const clickOutsideConfig = {
//     handleClickOutside: () => WelcomePopup.handleClickOutside
//   };

// export default onClickOutside(WelcomePopup);
export default WelcomePopup;
// export default onClickOutside(WelcomePopup, clickOutsideConfig);

// <h1>Welcome to Mandelbrot Maps!</h1>
//         <h2>An interactive fractal explorer</h2>
//         <h3>First, please select a mode:</h3>
//         <div className="modes">
//           <a id="exploratory" onClick={() => setshowPopup(false)}>
//             Exploratory
//           </a>
//           {/* <!-- div className="hide-no-hover explore-hover">
//             Explore the site immediately </div> -->
//             onClick={() =>alert("Hi!")
//             goToGuidedMode()*/}
//           <a id="Guided-Button" onClick={goToGuidedMode}>
//             Guided
//           </a>
//           <a id="Education-Button" onClick={goToEducationalMode}>
//             Educational
//           </a>
//         </div>
