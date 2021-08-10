import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './glossaryPopup.css';
import glossary from './GlossaryIndex.jsx';
import PropTypes from 'prop-types';
import { MathComponent } from 'mathjax-react';

import Benoit_Mandelbrot from './images/Benoit_Mandelbrot.jpg';
import Gaston_Julia from './images/Gaston_Julia.jpeg';
import Pierre_Fatou from './images/Pierre_Fatou.jpeg';

function GlossaryPopup(props) {
  // TODO:
  // Feed in an index/use word as id/index to retrieve the defintion from either a jsx file or md file then replace ipsum loren

  // Had to do this as it kept returning 'word' missing props validation -
  // realised that this is because of the of the fact that this component is not always sure whether or not
  // word is a string (or maybe null?), so when you pass it in the return statement as {props.word}, it goes
  // a bit crazy
  // But assuming that this doesn't happen, bc I am writing the code lmfao
  // This shouldn't be an issue

  // If I do forget to include a word, the component will return an error


  // Gaston Julia (1893 - 1978) was a French mathematician who devised the formula for the Julia set. It was the equation that helped Benoît Mandelbrot discover the Mandelbrot set. Julia was born in Algeria, which was then French governed. Though his family were poor, his mother invested in his schooling which paid off as his outstanding ability was noticed and he eventually received a high-school scholarship to study in Paris. His studies were frequently interrupted, during his scholarship he contracted typhoid fever, upon completing his first degree in mathematics he was conscripted to serve the army during World War I, where he lost his nose and resigned himself to wearing a leather strap as picture for the rest of his life after many painful and failed operations. 

  let glossary = [
    {
      glossaryName: 'Hover over me',
      img: null,
      description: (
        <p className="gloss-description">
          I provide further explaination to certain words. Hover over me to learn more
          about the highlighted word.
        </p>
      ),
    },
    {
      glossaryName: 'Benoit Mandelbrot',
      img: '<img src={./images/Benoit_Mandelbrot.jpg} />',
      description: (
        <p className="gloss-description">
          Benoît Mandelbrot (1924 - 2010) was a French-American mathematician who due to
          his access to IBM computers, was able to discover the Mandelbrot set in 1980
          while he worked there. He eventually left IBM when they ended reserach in his
          division, and moved onto work in the Mathematics department at Yale University.
        </p>
      ),
      // Born in Warsaw, Poland in 1924, the french-american Mathematician Benoit '
    },{
      glossaryName: 'Benoît Mandelbrot',
      img: '<img src={./images/Benoit_Mandelbrot.jpg} />',
      description: (
        <p className="gloss-description">
          Benoît Mandelbrot (1924 - 2010) was a French-American mathematician who due to
          his access to IBM computers, was able to discover the Mandelbrot set in 1980
          while he worked there. He eventually left IBM when they ended reserach in his
          division, and moved onto work in the Mathematics department at Yale University.
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
          An iteration is a repetition of an equation, where the inital
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
          decrease as the sequence grows, and eventually tend towards positive or negative infinity. On the other hand, if there is a
          value the terms will eventually near and tend towards as the sequence grows, then the sequence
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
          <MathComponent tex={String.raw`f(x) = sin(x)`} display={false} /> is bounded. Its values will always fall between its minimum value <MathComponent tex={String.raw`-1`} display={false} /> and it maximum value <MathComponent tex={String.raw`1`} display={false} />. It
          is worth noting here that though all convergent sequences are bounded, bounded
          sequences are not necessarily convergent.
        </p>
      ),
    },
    // Gaston Julia (1893 - 1978) was a French mathematician who devised the formula for the Julia set. It was the equation that helped Benoît Mandelbrot discover the Mandelbrot set. Julia was born in Algeria, which was then French governed. Though his family were poor, his mother invested in his schooling which paid off as his outstanding ability was noticed and he eventually received a high-school scholarship to study in Paris. His studies were frequently interrupted, during his scholarship he contracted typhoid fever, upon completing his first degree in mathematics he was conscripted to serve the army during World War I, where he lost his nose and resigned himself to wearing a leather strap as picture for the rest of his life after many painful and failed operations. 
    // Gaston Julia (1893 - 1978) was a French mathematician who devised the formula
    // for the Julia set. It was the equation that helped Benoît Mandelbrot discover
    // the Mandelbrot set.
    {
      glossaryName: 'Gaston Julia',
      img: null,
      description: (
        <p className="gloss-description">
        Gaston Julia (1893 - 1978) was a French mathematician who devised the formula for the Julia set. It was the equation that helped Benoît Mandelbrot discover the Mandelbrot set. <br/> <br/>Julia was born in Algeria, which was then French governed. Though his family were poor, his mother invested in his schooling which paid off as his outstanding ability was noticed and he eventually received a high-school scholarship to study in Paris. His studies were frequently interrupted, during his scholarship he contracted typhoid fever, and upon completing his first degree in mathematics he was conscripted to serve the army during World War I, where he lost his nose and resigned himself to wearing a leather strap as pictured for the rest of his life after many painful and failed operations. 
        </p>
      ),
    },
    {
      glossaryName: 'Pierre Fatou',
      img: null,
      description: (
        <p className="gloss-description">
          Pierre Fatou (1878 - 1929) was a French mathematician. He was born into a
          military family, however due to his poor health, he was unable to follow his
          parents’ footsteps to join the navy. Despite his poor health as reflected by his
          frequent sick leaves, he has made contributions to a branch of Mathematics called
          Analysis and introduced the study of Julia sets.
          </p>
      ),
    },
    {
      glossaryName: 'connected',
      img: null,
      description: (
        <p className="gloss-description">
          In maths, a set (a collection of elements) is connected if it cannot be split
          into smaller disjoint subsets (sets with no elements in common). For example,
          any interval of real numbers are a connected set since you cannot split this
          into disjoint sets without the sets sharing a common boundary.
        </p>
      ),
    },
    {
      glossaryName: 'disconnected',
      img: null,
      description: (
        <p className="gloss-description">
          Something is considered disconnected if it can be split up into disjointed sets.
          For example, a set containing the numbers (1,2,3,4,5) is a disconnected set as
          it can be split into two disjoint sets, such as set A and B containing the
          numbers (1,2) and (3,4,5) respectively. A and B are disjoint sets as they have
          no elements in common (i.e. nothing in common).
        </p>
      ),
    },
    {
      glossaryName: 'complex plane',
      img: null,
      description: (
        <p className="gloss-description">
          The complex plane is used to graph complex numbers which are of the form{' '}
          <MathComponent tex={String.raw`x+yi`} display={false} />, with{' '}
          <MathComponent tex={String.raw`x`} display={false} /> and{' '}
          <MathComponent tex={String.raw`y`} display={false} /> being real numbers. It can
          be likened to the Cartesian plane (x-y plane) that is used to represent real
          numbers. In the complex plane however, the y-axis represents the imaginary
          number <MathComponent tex={String.raw`yi`} display={false} />.
        </p>
      ),
    },
    {
      glossaryName: 'complex number',
      img: null,
      description: (
        <p className="gloss-description">
          Complex numbers are numbers of the form{' '}
          <MathComponent tex={String.raw`x+yi`} display={false} />, where{' '}
          <MathComponent tex={String.raw`x`} display={false} /> and{' '}
          <MathComponent tex={String.raw`y`} display={false} /> are real numbers, and{' '}
          <MathComponent tex={String.raw`i`} display={false} /> is an imaginary number
          representing <MathComponent tex={String.raw`\sqrt{-1}`} display={false} />. 
          It is called an imaginary number as <MathComponent tex={String.raw`\sqrt{-1}`} display={false} /> does not
          exist in the real numbers. If you type <MathComponent tex={String.raw`\sqrt{-1}`} display={false} /> in your calculator, it will
          return an error!{' '}
        </p>
      ),
    },
    {
      glossaryName: '',
      img: null,
      description: null,
    },
  ];

  function findIndex(valueName) {
    var i;
    for (i = 0; i < glossary.length; i++) {
      // for (index in glossary){
      if (glossary[i].glossaryName == valueName) {
        return i;
      }
    }
    return -1;
  }

  // if(props.word == 'Benoit Mandelbrot' || props.word == 'Gaston Julia' || props.word == 'Pierre Fatou'){
  //     setUsePic(true);
  //     console.log(usePic)
  // // null
  // }

  // if (typeof props.word === 'string'){
  // let index = glossary.findIndex(props.word);

  var index = findIndex(props.word);

  // if(props.word == 'Benoit Mandelbrot' || props.word == 'Gaston Julia' || props.word == 'Pierre Fatou'){
  //     setUsePic(true);
  //     console.log(usePic)
  // // null
  // }//else{
  //     setusePic(false);
  // }

  return (
    // ${} means it's a literal, so eg ${props.name} will literally print "props.name"
    //                     {glossary[index].img}
    //                     {usePic && <img src={Benoit_Mandelbrot} />}

    // <img src={glossary[index].glossaryName} />
    // the way i've coded the images is a bit cancerous but here we go - there'll only be 4 people anyway

    <span className="tooltip">
      {' '}
      {props.word}
      <span className="tooltiptext">
        {(props.word == 'Benoit Mandelbrot' || props.word === 'Benoît Mandelbrot') ? (
          <span>
            <img id="gloss_img" src={Benoit_Mandelbrot} align="center" />
            <br />
          </span>
        ) : null}
        {props.word == 'Gaston Julia' ? (
          <span>
            <img id="gloss_img" src={Gaston_Julia} align="center" />
            <br />
          </span>
        ) : null}
        {props.word == 'Pierre Fatou' ? (
          <span>
            <img id="gloss_img" src={Pierre_Fatou} align="center" /> <br />
          </span>
        ) : null}
        <span className="gloss-desc">{glossary[index].description}</span>
      </span>
    </span>
  );
  // } else{
  //     return (<span>ERROR</span>);
  // }
}

GlossaryPopup.propTypes = {
  word: PropTypes.string.isRequired,
};

export default GlossaryPopup;
