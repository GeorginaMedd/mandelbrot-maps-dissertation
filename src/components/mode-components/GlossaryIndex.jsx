import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './glossaryPopup.css';
import { MathComponent } from 'mathjax-react';

import Benoit_Mandelbrot from './images/Benoit_Mandelbrot.jpg';

// /Users/georgiemedd/Desktop/DissInReact/Fifth-iteration/src/components/mode-components/images/Benoit_Mandelbrot.jpg
// /images/Benoit_Mandelbrot.jpg

// <img src={Benoit_Mandelbrot} alt="Image of Benoit_Mandelbrot" />;
// <img src={Benoit_Mandelbrot} />

let glossary = [
  {
    glossaryName: 'Hover over me',
    img: null,
    description: (
      <p className="gloss-description">
        Hover over me to learn more about the highlighted word.
      </p>
    ),
  },
  {
    glossaryName: 'Benoit Mandelbrot',
    img: '<img src={./images/Benoit_Mandelbrot.jpg} />',
    description: (
      <p className="gloss-description">
        Benoit Mandelbrot (1924 - 2010) was a French-American mathematician who due to his
        access to IBM computers, was able to discover the Mandelbrot set in 1980 while he
        worked there. He eventually left IBM when they ended reserach in his division, and
        moved onto work in the Mathematics department at Yale University.
      </p>
    ),
    // Born in Warsaw, Poland in 1924, the french-american Mathematician Benoit '
  },
  {
    glossaryName: 'fractal',
    img: null,
    description: (
      <p className="gloss-description">
        Fractals are self-similar patterns which are created by repeating an equation.
        Examples of fractals include the Mandelbrot set, the Serpinski Triangles, and
        snowflakes.
      </p>
    ),
  },
  {
    glossaryName: 'iteration',
    img: null,
    description: (
      <p className="gloss-description">
        In Mathematics, an iteration is a repetition of an equation, where the inital
        value of the equation is substituted to calculate the next value, this new value
        is substituted to calculate the next value, and so on.
      </p>
    ),
  },
  {
    glossaryName: 'iterate',
    img: null,
    description: (
      <p className="gloss-description">
        In Mathematics, an iteration is a repetition of an equation, where the inital
        value of the equation is substituted to calculate the next value, this new value
        is substituted to calculate the next value, and so on.
      </p>
    ),
  },
  {
    glossaryName: 'diverges',
    img: null,
    description: (
      <p className="gloss-description">
        If a sequence diverges, it means that its terms will continue to increase or
        decrease as the sequence grows, and eventually reach infinity. If there is a value
        the terms will eventually near as the sequence grows, then the sequence
        converges(to that value).
      </p>
    ),
  },
  {
    glossaryName: 'bounded',
    img: null,
    description: (
      <p className="gloss-description">
        A sequence is bounded if, as the sequence grows, the {`term's`} values stay
        limited to some finite number, for example,{' '}
        <MathComponent tex={String.raw`f(x) = (-1)^x`} display={false} /> is bounded. It
        is worth noting here that though all convergent sequences are bounded, bounded
        sequences are not necessarily convergent.
      </p>
    ),
  },
  {
    glossaryName: 'Gaston Julia',
    img: null,
    description: (
      <p className="gloss-description">
        Gaston Julia (1893 - 1978) was a French mathematician who devised the formula for
        the Julia set. It was the equation that helped Benoit Mandelbrot discover the
        Mandelbrot set.
      </p>
    ),
  },
  {
    glossaryName: 'Pierre Fatou',
    img: null,
    description: (
      <p className="gloss-description">
        Pierre Fatou (1878 - 1929) was a French mathematician. He was born into a military
        family, however due to his poor health, he was unable to follow his parents’
        footsteps to join the navy. Despite his poor health as seen by his frequent sick
        leaves, he made contributions to a branch of Mathematics called Analysis and was
        the first to introduce and study the Julia sets.
      </p>
    ),
  },
  {
    glossaryName: 'connected',
    img: null,
    description: (
      <p className="gloss-description">
        In maths, a set (a collection of elements) is connected if it cannot be split into
        smaller disjoint subsets (sets with no elements in common). For example, any
        interval of real numbers are a connected set since you cannot split this into
        disjoint sets without the sets sharing a common boundary.
      </p>
    ),
  },
  {
    glossaryName: 'disconnected',
    img: null,
    description: (
      <p className="gloss-description">
        Something is considered disconnected if it can be split up into disjointed sets.
        For example, a set containing the numbers (1,2,3,4,5) is a disconnected set as it
        can be split into two disjoint sets, such as set A and B containing the numbers
        (1,2) and (3,4,5) respectively. A and B are disjoint sets as they have no elements
        in common (i.e. nothing in common).
      </p>
    ),
  },
  {
    glossaryName: 'Fatou set',
    img: null,
    description: <p className="gloss-description">FS</p>,
  },
  {
    glossaryName: 'Fatou dust',
    img: null,
    description: <p className="gloss-description">FD</p>,
  },
  {
    glossaryName: '',
    img: null,
    description: null,
  },
];

export default glossary;
