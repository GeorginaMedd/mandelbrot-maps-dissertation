import React, { useState, Fragment } from 'react';
import './educationPopupContent.css';
// import educationalModeContent from './educationalScript.jsx';
import GlossaryPopup from './GlossaryPopup';
// import MCComponent from './MCComponent';
// import topic1content from './educationalTopic1.jsx';
// import { renderToString } from 'react-dom/server';
import PropTypes from 'prop-types';
import EducationPopup from './EducationPopup';
import { warpToPoint } from '../../common/utils';
import ProgressBar from './ProgressBar.jsx';
import { MathComponent } from 'mathjax-react';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CloseIcon from '@material-ui/icons/Close';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Button from '@material-ui/core/Button';
import MCComponent from './MCComponent';

// import { ViewerControlSprings, ViewerXYControl, ViewerRotationControl, ViewerXYControl, } from '../../common/types';
import { useSpring } from 'react-spring';
// import DOMPurify from "dompurify";
// Installed using yarn add dompurify
// dompurify santizes html code making it safe to use direct html code
// it is also a workaround to dangerouslySetInnerHTML
// https://github.com/cure53/DOMPurify
// https://stackoverflow.com/questions/52741262/how-to-install-import-and-use-dompurify-in-frontend-js-file

function EducationPopupContent(props) {
  let [pageIndex, setpageIndex] = useState(0);
  let [expandPopup, setExpandPopup] = useState(true);
  let [darkenSide, setDarkenSide] = useState(null);
  let [contentOn, setContentOn] = useState(true);
  let [mainPage, setMainPage] = useState(false);
  let [progressValue, setProgressValue] = useState(1 / 14);

  function changeStatus() {
    setMainPage(true);
    setContentOn(false);
  }

  function nextPage() {
    if (pageIndex < topic1content.length) {
      setpageIndex(pageIndex + 1);
      setProgressValue((pageIndex + 1) / (topic1content.length - 1));
      console.log('page index:', pageIndex);
      console.log('topic1 content length:', topic1content.length);
    } else {
      changeStatus();
    }
  }
  function prevPage() {
    if (pageIndex > 0) {
      setpageIndex(pageIndex - 1);
      setProgressValue(pageIndex / (topic1content.length - 1));
      console.log('page index:', pageIndex);
      console.log('topic1 content length:', topic1content.length);
    } else {
      changeStatus();
    }
  }

  function resetExpandPopupState() {
    if (expandPopup) {
      console.log('resetExpandPopupState if statement');
      setExpandPopup(false);
      // setExpansionDescription('Collapse');
    } else if (!expandPopup) {
      console.log('resetExpandPopupState else statement');
      setExpandPopup(true);
      // setExpansionDescription('Expand');
    }
  }

  function goToPoint() {
    warpToPoint(props.mandelbrotControls, {
      xy: [2, 1],
      z: 1,
      theta: 0,
    });
  }

  function zoomOut() {
    warpToPoint(props.mandelbrotControls, {
      xy: [-0.36, 0.33],
      z: 0.5,
      theta: 0,
    });
    warpToPoint(props.juliaControls, {
      xy: [-0.36, 0.33],
      z: 0.5,
      theta: 0,
    });
  }

  function firstCoordinate() {
    warpToPoint(props.mandelbrotControls, {
      xy: [-1.764, 0.0],
      z: 21,
      theta: 0,
    });

    warpToPoint(props.juliaControls, {
      xy: [-1.764, 0.0],
      z: 21,
      theta: 0,
    });
  }

  function zoomTwo() {
    warpToPoint(props.mandelbrotControls, {
      xy: [0.381, 0.355],
      z: 12,
      theta: 0,
    });

    warpToPoint(props.juliaControls, {
      xy: [0.381, 0.355],
      z: -0.5,
      theta: 0,
    });
  }


  function zoomThree() {
    warpToPoint(props.mandelbrotControls, {
      xy: [-0.111, 0.864],
      z: 2,
      theta: 0,
    });

    warpToPoint(props.juliaControls, {
      xy: [-0.111, 0.864],
      z: 0.5,
      theta: 0,
    });
  }

  function secondCoordinate() {
    warpToPoint(props.mandelbrotControls, {
      xy: [-0.11, 0.81],
      z: 10,
      theta: 0,
    });
    warpToPoint(props.juliaControls, {
      xy: [-0.11, 0.81],
      z: 0.5,
      theta: 0,
    });
  }

  function thirdCoordinate() {
    warpToPoint(props.mandelbrotControls, {
      xy: [-0.26, 0.7],
      z: 10,
      theta: 0,
    });
    warpToPoint(props.juliaControls, {
      xy: [-0.26, 0.7],
      z: 0.5,
      theta: 0,
    });
  }

  let topic1content = [
    {
      content: (
        <p>
          First, let’s delve into the Mandelbrot Set. <br /> Discovered by{' '}
          <GlossaryPopup word="Benoît Mandelbrot" /> in 1980, the Mandelbrot set is a
          beautiful <GlossaryPopup word="fractal" /> meaning it is a self-similar pattern
          and will repeat itself forever.
        </p>
      ),
      pageNumber: '1',
      darkening: 'right',
      additionalFunctionality: [('darkening', 'right'), ('settingsMenu', 'off')],
    },
    {
      content: (
        <p>
          <p>
            First, let’s delve into the Mandelbrot Set. <br /> Discovered by{' '}
            <GlossaryPopup word="Benoît Mandelbrot" /> in 1980, the Mandelbrot set is a
            beautiful <GlossaryPopup word="fractal" /> meaning it is a self-similar
            pattern and will repeat itself forever.
          </p>{' '}
          <p>
            {' '}
            This can be shown easily. For example,{' '}
            <button onClick={zoomOut} className="warpping-button">
              zoom out
            </button>
            of the Mandelbrot set, then zoom into these coordinates{' '}

            <button onClick={zoomTwo} className="warpping-button">
              (0.38, 0.35)
            </button>

            <button onClick={firstCoordinate} className="warpping-button">
              (-1.76, 0)
            </button>

            <button onClick={zoomThree} className="warpping-button">
              (-0.111, 0.864)
            </button>
            on Mandelbrot Maps.
          </p>
        </p>
      ),
      pageNumber: '1',
      darkening: 'right',
      additionalFunctionality: [('darkening', 'right'), ('settingsMenu', 'off')],
    },
    {
      content: (
        <p>
          <p>
            First, let’s delve into the Mandelbrot Set. <br /> Discovered by{' '}
            <GlossaryPopup word="Benoît Mandelbrot" /> in 1980, the Mandelbrot set is a
            beautiful <GlossaryPopup word="fractal" /> meaning it is a self-similar
            pattern and will repeat itself forever.
          </p>
          <p>
            {' '}
            This can be shown easily. For example,{' '}
            <button onClick={zoomOut} className="warpping-button">
              zoom out
            </button>
            of the Mandelbrot set, then zoom into these coordinates{' '}
            <button onClick={zoomTwo} className="warpping-button">
              (0.38, 0.35)
            </button>

            <button onClick={firstCoordinate} className="warpping-button">
              (-1.76, 0)
            </button>

            <button onClick={zoomThree} className="warpping-button">
              (-0.111, 0.864)
            </button>
            on Mandelbrot Maps.
          </p>
          <p>
            As you can see, there are lots of mini versions of the Mandelbrot set, this
            continues on forever! The reason will be explained soon.
          </p>
        </p>
      ),
      pageNumber: '2',
      darkening: 'right',
      additionalFunctionality: [('darkening', 'right'), ('settingsMenu', 'off')],
    },
    {
      content: (
        <p>
          <p>
            {' '}
            The fractal is made from an <GlossaryPopup word="iteration" /> of an equation.
            We first take the <GlossaryPopup word="complex number" />{' '}
            <MathComponent tex={String.raw`z_0 = 0`} display={false} />, and apply it to
            the function{' '}
            <MathComponent tex={String.raw`z_n = z_{n-1}^2 + c`} display={false} />, where{' '}
            <MathComponent tex={String.raw`c`} display={false} /> is also a complex
            number.
          </p>
        </p>
      ),
      pageNumber: '2',
      darkening: null,
      additionalFunctionality: [('', ''), ('', '')],
    },
    {
      content: (
        <p>
          <p>
            {' '}
            The fractal is made from an <GlossaryPopup word="iteration" /> of an equation.
            We first take the <GlossaryPopup word="complex number" />{' '}
            <MathComponent tex={String.raw`z_0 = 0`} display={false} />, and apply it to
            the function{' '}
            <MathComponent tex={String.raw`z_n = z_{n-1}^2 + c`} display={false} />, where{' '}
            <MathComponent tex={String.raw`c`} display={false} /> is also a complex
            number.
          </p>
          <p>
            As complex numbers are not real numbers, they cannot lie on the Cartesian
            plane (i.e. the x-y plane), and instead lie on the{' '}
            <GlossaryPopup word="complex plane" />. Thus, these fractals exist in the
            complex plane.
          </p>
        </p>
      ),
      pageNumber: '2',
      darkening: null,
      additionalFunctionality: [('', ''), ('', '')],
    },{
      content: (
        <p>
          <p>
            {' '}
            If the sequence <MathComponent tex={String.raw`z_n`} display={false} /> gets
            bigger and bigger, it <GlossaryPopup word="diverges" />, and <MathComponent tex={String.raw`c`} display={false} /> does not belong
            in the Mandelbrot Set. For example, when <MathComponent tex={String.raw`c = 3`} display={false} />, the sequence starts as
             </p>
        </p>
      ),
      pageNumber: '2',
      darkening: null,
      additionalFunctionality: [('', ''), ('', '')],
    },{
      content: (
        <p>
          <p>
            {' '}
            If the sequence <MathComponent tex={String.raw`z_n`} display={false} /> gets
            bigger and bigger, it <GlossaryPopup word="diverges" />, and <MathComponent tex={String.raw`c`} display={false} /> does not belong
            in the Mandelbrot Set. For example, when <MathComponent tex={String.raw`c = 3`} display={false} />, the sequence starts as


            <MathComponent tex={String.raw`z_0 = 0`} display={true} />
            <MathComponent tex={String.raw`z_1 = 0^2 + 3 = 3`} display={true} />
            <MathComponent tex={String.raw`z_2 = 3^2 + 3 = 12`} display={true} />
            <MathComponent tex={String.raw`z_3 = 12^2 + 3 = 147`} display={true} />
            
             </p>
        </p>
      ),
      pageNumber: '2',
      darkening: null,
      additionalFunctionality: [('', ''), ('', '')],
    },
    {
      content: (
        <p>
          <p>
            {' '}
            If the sequence <MathComponent tex={String.raw`z_n`} display={false} /> gets
            bigger and bigger, it <GlossaryPopup word="diverges" />, and <MathComponent tex={String.raw`c`} display={false} /> does not belong
            in the Mandelbrot Set. For example, when <MathComponent tex={String.raw`c = 3`} display={false} />, the sequence starts as


            <MathComponent tex={String.raw`z_0 = 0`} display={true} />
            <MathComponent tex={String.raw`z_1 = 0^2 + 3 = 3`} display={true} />
            <MathComponent tex={String.raw`z_2 = 3^2 + 3 = 12`} display={true} />
            <MathComponent tex={String.raw`z_3 = 12^2 + 3 = 147`} display={true} />
            
            The sequence will continue to grow larger and tend towards infinity, hence <MathComponent tex={String.raw`c = 3`} display={false} />s does not belong in the Mandelbrot Set.

             </p>
        </p>
      ),
      pageNumber: '2',
      darkening: null,
      additionalFunctionality: [('', ''), ('', '')],
    },{
      content: (
        <p>
          <p>
            {' '}
            Otherwise, if{' '}
            <MathComponent tex={String.raw`z_n`} display={false} /> stays{' '}
            <GlossaryPopup word="bounded" />, <MathComponent tex={String.raw`c`} display={false} /> belongs in the Mandelbrot Set.
            For example, when <MathComponent tex={String.raw`c = -1`} display={false} />, the sequence starts as
             </p>
        </p>
      ),
      pageNumber: '2',
      darkening: null,
      additionalFunctionality: [('', ''), ('', '')],
    },{
      content: (
        <p>
          <p>
            {' '}
            Otherwise, if{' '}
            <MathComponent tex={String.raw`z_n`} display={false} /> stays{' '}
            <GlossaryPopup word="bounded" />, <MathComponent tex={String.raw`c`} display={false} /> belongs in the Mandelbrot Set.
            For example, when <MathComponent tex={String.raw`c = -1`} display={false} />, the sequence starts as


            <MathComponent tex={String.raw`z_0 = 0`} display={true} />
            <MathComponent tex={String.raw`z_1 = 0^2 + (-1) = -1`} display={true} />
            <MathComponent tex={String.raw`z_2 = (-1)^2 + (-1) = 0`} display={true} />
            <MathComponent tex={String.raw`z-3 = 0^2 + (-1) = -1`} display={true} />
            
             </p>
        </p>
      ),
      pageNumber: '2',
      darkening: null,
      additionalFunctionality: [('', ''), ('', '')],
    },{
      content: (
        <p>
          <p>
            {' '}
            Otherwise, if{' '}
            <MathComponent tex={String.raw`z_n`} display={false} /> stays{' '}
            <GlossaryPopup word="bounded" />, <MathComponent tex={String.raw`c`} display={false} /> belongs in the Mandelbrot Set.
            For example, when <MathComponent tex={String.raw`c = -1`} display={false} />, the sequence starts as


            <MathComponent tex={String.raw`z_0 = 0`} display={true} />
            <MathComponent tex={String.raw`z_1 = 0^2 + (-1) = -1`} display={true} />
            <MathComponent tex={String.raw`z_2 = (-1)^2 + (-1) = 0`} display={true} />
            <MathComponent tex={String.raw`z-3 = 0^2 + (-1) = -1`} display={true} />
            
            This pattern will keep repeating and the sequence will remain bounded between 0 and -1. Hence <MathComponent tex={String.raw`c`} display={false} /> belongs in the Mandelbrot set.
             </p>
        </p>
      ),
      pageNumber: '2',
      darkening: null,
      additionalFunctionality: [('', ''), ('', '')],
    },{
      content: (
        <p>
          <p>
          What about the gradual colour change around the Mandelbrot?
          </p>
        </p>
      ),
      pageNumber: '2',
      darkening: null,
      additionalFunctionality: [('', ''), ('', '')],
    },
    {
      content: (
        <p>
          <p>
          What about the gradual colour change around the Mandelbrot?
          </p>
          <p>Aside from aesthetical pleasure, the gradual colour change around the Mandelbrot indicates the speed at which the sequence at <MathComponent tex={String.raw`c`} display={false} /> diverges. The lighter the colour, the quicker, i.e. the fewer number of iterations it took for the sequence to diverge.</p>
        </p>
      ),
      pageNumber: '2',
      darkening: null,
      additionalFunctionality: [('', ''), ('', '')],
    },
    // old
    // {
    //   content: (
    //     <p>
    //       <p>
    //         {' '}
    //         If the sequence <MathComponent tex={String.raw`z_n`} display={false} /> gets
    //         bigger and bigger, it <GlossaryPopup word="diverges" />, and <MathComponent tex={String.raw`c`} display={false} /> does not belong
    //         in the Mandelbrot Set. Otherwise,{' '}
    //         <MathComponent tex={String.raw`z_n`} display={false} /> stays{' '}
    //         <GlossaryPopup word="bounded" />, and <MathComponent tex={String.raw`c`} display={false} /> belongs in the Mandelbrot Set.
    //       </p>
    //     </p>
    //   ),
    //   pageNumber: '2',
    //   darkening: null,
    //   additionalFunctionality: [('', ''), ('', '')],
    // },
    // {
    //   content: (
    //     <p>
    //       <p>
    //         If the sequence <MathComponent tex={String.raw`z_n`} display={false} /> gets
    //         bigger and bigger, it <GlossaryPopup word="diverges" />, and <MathComponent tex={String.raw`c`} display={false} /> does not belong
    //         in the Mandelbrot Set. Otherwise,{' '}
    //         <MathComponent tex={String.raw`z_n`} display={false} /> stays{' '}
    //         <GlossaryPopup word="bounded" />, and <MathComponent tex={String.raw`c`} display={false} /> belongs in the Mandelbrot Set.
    //       </p>
    //       <p>
    //         Complex numbers that are in the Mandelbrot set are coloured{' '}
    //         <span className="makeTextBlack" color="black !important">
    //           black
    //         </span>
    //         .
    //       </p>
    //     </p>
    //   ),
    //   pageNumber: '2',
    //   darkening: null,
    //   additionalFunctionality: [('', ''), ('', '')],
    // },
    // {
    //   content: (
    //     <p>
    //       <p>
    //         If the sequence <MathComponent tex={String.raw`z_n`} display={false} /> gets
    //         bigger and bigger, it <GlossaryPopup word="diverges" />, and <MathComponent tex={String.raw`c`} display={false} /> does not belong
    //         in the Mandelbrot Set. Otherwise,{' '}
    //         <MathComponent tex={String.raw`z_n`} display={false} /> stays{' '}
    //         <GlossaryPopup word="bounded" />, and <MathComponent tex={String.raw`c`} display={false} /> belongs in the Mandelbrot Set.
    //       </p>
    //       <p>
    //         Complex numbers that are in the Mandelbrot set are coloured{' '}
    //         <span className="makeTextBlack" color="black !important">
    //           black
    //         </span>
    //         .
    //       </p>
    //       <p>What about the gradual colour change around the Mandelbrot?</p>
    //     </p>
    //   ),
    //   pageNumber: '2',
    //   darkening: null,
    //   additionalFunctionality: [('', ''), ('', '')],
    // },
    // {
    //   content: (
    //     <p>
    //       <p>
    //         If the sequence <MathComponent tex={String.raw`z_n`} display={false} /> gets
    //         bigger and bigger, it <GlossaryPopup word="diverges" />, and does not belong
    //         in the Mandelbrot Set. Otherwise,{' '}
    //         <MathComponent tex={String.raw`z_n`} display={false} /> stays{' '}
    //         <GlossaryPopup word="bounded" />, and belongs in the Mandelbrot Set.
    //       </p>
    //       <p>
    //         Complex numbers that are in the Mandelbrot set are coloured{' '}
    //         <span className="makeTextBlack" color="black !important">
    //           black
    //         </span>
    //         .
    //       </p>
    //       <p>What about the gradual colour change around the Mandelbrot?</p>
    //     </p>
    //   ),
    //   pageNumber: '2',
    //   darkening: null,
    //   additionalFunctionality: [('', ''), ('', '')],
    // },
    // {
    // Aside from
    //       aesthetic pleasure, it tells us how quickly a complex number{' '}
    //       <MathComponent tex={String.raw`c`} display={false} /> diverged. The lighter
    //       the colour the quicker, or the less number of iterations it took to diverge.
    // You may wonder, if complex numbers that are in the Mandelbrot set are coloured
    // black, why is there a gradual colour change around it?
    // <br></br>
    //   content: (
    //     <p>
    //       Move the crosshair along the edge of the Mandelbrot set. What do you notice?
    //     </p>
    //   ),
    //   pageNumber: '3',
    //   darkening: null,
    //   additionalFunctionality: [('', ''), ('', '')], MCComponent word="is not" />
    // },
    {
      content: (
        <p>
          <p>
            If a complex number <MathComponent tex={String.raw`c`} display={false} />{' '}
            <span>
              <MCComponent word="diverges" />
            </span>{' '}
            after a number of iterations, this means{' '}
            <MathComponent tex={String.raw`c`} display={false} />{' '}
            is not in the Mandelbrot Set. On the other hand, if the complex number{' '}
            <MathComponent tex={String.raw`c`} display={false} />{' '}
            <MCComponent word="remains bounded" />
            , it is in the Mandelbrot Set. When zooming in, the
            different colours indicate the speed the sequence at{' '}
            <MathComponent tex={String.raw`c`} display={false} /> diverges.
          </p>
          <p>
            Since these fractals stem from complex numbers, they lie on the <MCComponent word="complex plane" />. The complex plane represents numbers of the form <MCComponent word="x+yi" />, where i is <MCComponent word="an imaginary number" />.
          </p>
          <p>
            This set was discovered by <MCComponent word="Benoît Mandelbrot" /> in 1980, and is made by <MCComponent word="iterating" />{' '}
            the equation <MathComponent tex={String.raw`z_n = z_{n-1}^2 + c`} display={false} />, where{' '}
            <MathComponent tex={String.raw`z_0`} display={false} /> equals{' '}
            <MCComponent word="0" />.
          </p>
        </p>
      ),
      pageNumber: '3',
      darkening: null,
      additionalFunctionality: [('', ''), ('', '')],
    },
    // <MCComponent word="z_n = z_n-1 ^2+ c" />
    {
      content: <p>Now let us focus on the Julia sets.</p>,
      pageNumber: '4',
      darkening: null,
      additionalFunctionality: [('', ''), ('', '')],
    },
    {
      content: (
        <p>
          <p>Now let us focus on the Julia sets.</p>
          <p>
            Discovered by the French mathematicians <GlossaryPopup word="Gaston Julia" />
            and <GlossaryPopup word="Pierre Fatou" /> in the 1910’s, similar to the
            Mandelbrot Set, the Julia sets are fractals created using the same equation,
            however they have a different set of initial conditions.
          </p>
        </p>
      ),
      pageNumber: '4',
      darkening: null,
      additionalFunctionality: [('', ''), ('', '')],
    },
    {
      content: (
        <p>
          <p>Now let us focus on the Julia sets.</p>
          <p>
            Discovered by the French mathematicians <GlossaryPopup word="Gaston Julia" />
            and <GlossaryPopup word="Pierre Fatou" /> in the 1910’s, similar to the
            Mandelbrot Set, the Julia sets are fractals created using the same equation,
            however they have a different set of initial conditions.
          </p>
          <p>
            The value of <MathComponent tex={String.raw`c`} display={false} /> is fixed
            instead of <MathComponent tex={String.raw`z_0 `} display={false} />. So for
            every <MathComponent tex={String.raw`c`} display={false} /> value, we plug in
            a value <MathComponent tex={String.raw`z`} display={false} /> in the{' '}
            <GlossaryPopup word="complex plane" /> and <GlossaryPopup word="iterate" /> it
            to determine if with that{' '}
            <MathComponent tex={String.raw`c`} display={false} /> value, whether{' '}
            <MathComponent tex={String.raw`z`} display={false} /> diverges or stays
            bounded. If <MathComponent tex={String.raw`z`} display={false} /> is bounded,
            then <MathComponent tex={String.raw`z`} display={false} /> is in that Julia
            set.
          </p>
        </p>
      ),
      pageNumber: '4',
      darkening: null,
      additionalFunctionality: [('', ''), ('', '')],
    },
    {
      content: (
        <p>
          <p>
            Move the crosshair around the boundary of the Mandelbrot set(left). Do you
            notice anything about the way the shape of the Julia sets change?
          </p>
          <p>
            Alternatively, click on these coordinates{' '}
            <button onClick={secondCoordinate} className="warpping-button">
              (-0.11, 0.81)
            </button>{' '}
            <button onClick={thirdCoordinate} className="warpping-button">
              (-0.26, 0.70)
            </button>{' '}
            and observe the Julia sets, do you notice any significant differences in
            shapes between the two Julia sets?
          </p>
        </p>
      ),
      pageNumber: '5',
      darkening: null,
      additionalFunctionality: [('', ''), ('', '')],
    },
    {
      content: (
        <p>
          <p>
            Move the crosshair around the boundary of the Mandelbrot set(left). Do you
            notice anything about the way the shape of the Julia sets change?
          </p>
          <p>
            Alternatively, click on these coordinates{' '}
            <button onClick={secondCoordinate} className="warpping-button">
              (-0.11, 0.81)
            </button>{' '}
            <button onClick={thirdCoordinate} className="warpping-button">
              (-0.26, 0.70)
            </button>{' '}
            and observe the Julia sets, do you notice any significant differences in
            shapes between the two Julia sets? You may have guessed it. Sometimes the set
            seem linked together, and other times segmented.
          </p>
        </p>
      ),
      pageNumber: '5',
      darkening: null,
      additionalFunctionality: [('', ''), ('', '')],
    },
    {
      content: (
        <p>
          <p>
            Move the crosshair around the boundary of the Mandelbrot set(left). Do you
            notice anything about the way the shape of the Julia sets change?
          </p>
          <p>
            Alternatively, click on these coordinates{' '}
            <button onClick={secondCoordinate} className="warpping-button">
              (-0.11, 0.81)
            </button>{' '}
            <button onClick={thirdCoordinate} className="warpping-button">
              (-0.26, 0.70)
            </button>{' '}
            and observe the Julia sets, do you notice any significant differences in
            shapes between the two Julia sets? You may have guessed it. Sometimes the set
            seem linked together, and other times segmented.
          </p>

          <p>
            These are the 2 types of Julia sets - <GlossaryPopup word="connected" /> and{' '}
            <GlossaryPopup word="disconnected" /> Julia sets. The significance of this is
            discussed in the next topic.{' '}
          </p>
        </p>
      ),
      pageNumber: '5',
      darkening: null,
      additionalFunctionality: [('', ''), ('', '')],
    },
    {
      content: (
        <p>
          <p>
            The Julia sets were discovered by <MCComponent word="Gaston Julia" /> and{' '}
            <MCComponent word="Pierre Fatou" /> in the <MCComponent word="1910" />
            ’s, these are fractals which are created using the equation{' '}
            <MathComponent tex={String.raw`z_n = z_{n-1}^2 + c`} display={false} />, where unlike the Mandelbrot Set, for
            each Julia set, <MathComponent tex={String.raw`c`} display={false} /> is{' '}
            <MCComponent word="fixed" />.
          </p>
        </p>
      ),
      pageNumber: '6',
      darkening: null,
      additionalFunctionality: [('', ''), ('', '')],
    },
    {
      content: (
        <span>
          <h2>Congratulations on completing the topic</h2>
          <h4>
            Press the arrow to continue to the next topic, or simply press the cross to
            continue exploring the site.
          </h4>
        </span>
      ),
      pageNumber: '7',
      darkening: null,
      additionalFunctionality: [('', ''), ('', '')],
    },
  ];

  if (mainPage) {
    return <EducationPopup />;
  } else if (!contentOn) {
    return null;
  } else {
    return (
      <Fragment>
        <div
          className="education-popup-content"
          style={
            expandPopup
              ? { height: '30vh', overflow: 'visible' }
              : { height: '10vh', overflow: 'hidden' }
          }
        >
          <div className="exit-div">
            <p className="topic-name-content">{props.topicName}</p>
            <p onClick={resetExpandPopupState} className="expand-content">
              {expandPopup ? (
                <span className="expand-collapse-div">
                  <ArrowDropUpIcon m={1} fontSize="large" /> {'  '}
                </span>
              ) : (
                <span className="expand-collapse-div">
                  <ArrowDropDownIcon m={1} fontSize="large" />
                </span>
              )}
            </p>
            <p onClick={() => setContentOn(false)} className="exit">
              <CloseIcon m={1} fontSize="small" />
            </p>
          </div>
          <div className="topic-name-div-content"></div>

          <div
            className="topic-content"
            style={expandPopup ? { zIndex: '12' } : { height: '5vh', overflow: 'hide' }}
          >
            {topic1content[pageIndex].content}
          </div>
          <div className="arrow-button-div">
            <div
              className="arrow-button-div-inner"
              style={expandPopup ? { bottom: '71vh' } : { bottom: '91vh' }}
            >
              {pageIndex > 0 && (
                <NavigateBeforeIcon
                  fontSize="large"
                  onClick={prevPage}
                  id="prev-button"
                />
              )}
              {pageIndex < topic1content.length - 1 && (
                <NavigateNextIcon fontSize="large" onClick={nextPage} id="next-button" />
              )}
              {pageIndex == topic1content.length - 1 && (
                <Button id="next-topic-button">{'Next topic'}</Button>
              )}
            </div>
          </div>

          {expandPopup ? (
            <span>
              <span className="progress-bar-position-outer">
                <span className="progress-bar-position">
                  <ProgressBar percentage={progressValue} />
                </span>
              </span>
              <div className="select-another-topic">
                <p onClick={changeStatus} className="select-another-topic-text">
                  Select another topic
                </p>
              </div>
            </span>
          ) : null}
          <div className="hide-content-from-header"></div>
          <div className="hide-content-from-footer"></div>
        </div>

        <div className={topic1content[pageIndex].darkening}></div>
      </Fragment>
    );
  }
}

EducationPopupContent.propTypes = {
  topicName: PropTypes.string.isRequired,
};

export default EducationPopupContent;

// <a onClick={prevPage} id="prev-button">
//                   <NavigateBeforeIcon />
//                 </a>
// <a onClick={nextPage} id="next-button">
// {'>'}
// </a>

// {pageIndex == topic1content.length - 1 && (
//   <a id="next-topic-button">{'Next topic'}</a>
// )}
