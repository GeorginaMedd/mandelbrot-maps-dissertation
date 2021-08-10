import React, { useState } from 'react';
import './GuidedPopup.css';
// import guidedModeContent from './GuidedScript';
import ProgressBar from './ProgressBar.jsx';
import { warpToPoint } from '../../common/utils';
import CloseIcon from '@material-ui/icons/Close';
import { MathComponent } from 'mathjax-react';

function GuidedPopup(props) {
  let [pageIndex, setpageIndex] = useState(0);
  let [close, setClose] = useState(false);

  function nextPage() {
    setpageIndex(pageIndex + 1);
  }
  function prevPage() {
    setpageIndex(pageIndex - 1);
  }

  function closeComponent() {
    setClose(true);
  }

  function firstCoordinate() {
    warpToPoint(props.mandelbrotControls, {
      // xy_arg = [0,0], z_arg = 1, theta_arg = 0
      // xy: xy_arg,
      // z: z_arg,
      // theta: theta_arg,

      // This one is a bit too intense
      // xy: [-0.1160968, 0.8822117],
      // z: 3.8,
      // theta: 4.7,

      xy: [0.2724788, 0.59647],
      z: 19,
      theta: 0.2,
    });
  }

  function secondCoordinate() {
    warpToPoint(props.juliaControls, {
      // xy_arg = [0,0], z_arg = 1, theta_arg = 0
      // xy: xy_arg,
      // z: z_arg,
      // theta: theta_arg,
      xy: [0.2361652, 0.5633767],
      z: 4,
      theta: 0.2,
    });
  }

  function thirdCoordinate() {
    warpToPoint(props.mandelbrotControls, {
      // xy_arg = [0,0], z_arg = 1, theta_arg = 0
      // xy: xy_arg,
      // z: z_arg,
      // theta: theta_arg,
      xy: [-1.1443659, 0.3147195],
      z: 500,
      theta: -0.75,
    });

    warpToPoint(props.juliaControls, {
      // xy_arg = [0,0], z_arg = 1, theta_arg = 0
      // xy: xy_arg,
      // z: z_arg,
      // theta: theta_arg,
      xy: [-1.1443659, 0.3147195],
      z: 615,
      theta: -1.47,
    });
  }

  let guidedModeContent = [
    {
      title: "Welcome to Mandelbrot Maps' site tour!",
      content: (
        <p>
          Throughout this tour, use the arrows to navigate. Use the cross in the top-right
          corner to exit the tour.
        </p>
      ),
      darkening: '',
      pageNumber: '0',
    },
    {
      title: 'This website is split into 2 sections',
      content: <p>Namely...</p>,
      darkening: '',
      pageNumber: '1',
    },
    // {
    //   title: 'The Mandelbrot Set',
    //   content: (
    //     <p>A beautiful and complex pattern discovered by Benoît Mandelbrot in 1980.</p>
    //   ),
    //   darkening: 'right-guided',
    //   pageNumber: '2',
    // },
    {
      title: 'The Mandelbrot Set..',
      content: (
        <p>
          A beautiful and complex pattern discovered by Benoît Mandelbrot in 1980. It is
          made from a repetition of an incredibly simple equation.
        </p>
      ),
      darkening: 'right-guided',
      pageNumber: '99',
    },
    {
      title: '..and the Julia Sets',
      content: (
        <p>
          Discovered by Pierre Fatou and Gaston Julia, this set also created with the same
          equation,{' '}
          <MathComponent tex={String.raw`z_n = z_{n-1}^2 + c`} display={false} />.
        </p>
      ),
      darkening: 'left-guided',
      pageNumber: '100',
    },
    // {
    //   title: ' ',
    //   content: <p>Known as fractals,</p>,
    //   darkening: '',
    //   pageNumber: '4',
    // },
    {
      title: ' ',
      content: (
        <p>
          Known as fractals, these intricate patterns are never-ending and occur when
          repeating a simple process.
        </p>
      ),
      darkening: '',
      pageNumber: '4',
    },
    // {
    //   title: ' ',
    //   content: <p>Zoom in or out by moving 2 fingers up or down.</p>,
    //   darkening: '',
    //   pageNumber: '5',
    // },
    {
      title: ' ',
      content: (
        <p>
          Zoom in or out by moving 2 fingers up or down on your trackpad. You may discover
          at certain points, these sets look identical.
        </p>
      ),
      darkening: '',
      pageNumber: '5',
    },
    {
      title: ' ',
      content: (
        <p>
          Zoom in or out by moving 2 fingers up or down on your trackpad. You may discover
          at certain points, these sets look identical. Just like this.
        </p>
      ),
      darkening: '',
      pageNumber: '101',
    },
    {
      title: ' ',
      content: (
        <p>
          You can try this for yourself by selecting{" '"}
          <span style={{ fontWeight: 'bold' }}>{`Exploring Tan's Theorem`}</span>
          {"' "}in Settings. This is named after Lei Tan, the person who discovered this
          relationship.
        </p>
      ),
      darkening: '',
      pageNumber: '6',
    },
    {
      title: ' ',
      content: (
        <p>
          In Settings, you can also make different configurations, such as changing the
          sets’ colour, and removing the crosshair.
        </p>
      ),
      darkening: '',
      pageNumber: '7',
    },
    {
      title: ' ',
      content: (
        <p>
          Use the crosshair to help navigate through the Mandelbrot Set. Press and move on
          your trackpad with two fingers to move it.
        </p>
      ),
      darkening: '',
      pageNumber: '8',
    },
    {
      title: ' ',
      content: (
        <p>
          To learn more about these sets, select {" '"}
          <span style={{ fontWeight: 'bold' }}>{`Learn about these fractals`}</span>
          {"' "}in the Settings menu.
        </p>
      ),
      darkening: '',
      pageNumber: '9',
    },
    {
      title: 'Your feedback is always appreciated',
      content: <p>Feedback forms can be found in Settings.</p>,
      darkening: '',
      pageNumber: '10',
    },
  ];

  if (close) {
    return null;
  } else {
    return (
      <div>
        <div className="guided-popup">
          <div className="cross-div-guided">
            <a onClick={closeComponent} className="cross-guided">
              <CloseIcon fontSize="small" />
            </a>
          </div>
          <h3 style={{ margin: '0', padding: '0' }} className="guided-header">
            {guidedModeContent[pageIndex].title}
          </h3>
          <p style={{ margin: '0', padding: '0' }} className="guided-content">
            {guidedModeContent[pageIndex].content}
          </p>
          <div className="prog-bar-loc">
            <ProgressBar percentage={(pageIndex + 1) / guidedModeContent.length} />
          </div>

          <div className="guided-next">
            {pageIndex > 0 && (
              <a onClick={prevPage} id="next-button">
                {'<'}
              </a>
            )}
            {pageIndex < guidedModeContent.length - 1 && (
              <a onClick={nextPage} id="next-button">
                {'>'}
              </a>
            )}
            {pageIndex == guidedModeContent.length - 1 && (
              <a onClick={closeComponent} id="next-button">
                Explore site!
              </a>
            )}
          </div>
          <div className="guided-back-to-main">
            <a href="index.html"> Back to main page</a>
          </div>
        </div>
        <div className={guidedModeContent[pageIndex].darkening} />
        {guidedModeContent[pageIndex].pageNumber == 99 && firstCoordinate()}
        {guidedModeContent[pageIndex].pageNumber == 100 && secondCoordinate()}
        {guidedModeContent[pageIndex].pageNumber == 101 && thirdCoordinate()}
      </div>
    );
  }
}

export default GuidedPopup;

// <div className="page-number-div">
// <p className="guided-page-number">
//   {guidedModeContent[pageIndex].pageNumber}
// </p>
// </div>

// pageIndex < guidedModeContent.length - 1
