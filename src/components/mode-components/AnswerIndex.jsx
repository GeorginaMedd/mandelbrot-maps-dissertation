import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import './glossaryPopup.css';

let options = [
  {
    correctAnswer: 'diverges',
    selectionAvailable: ['diverges', 'converges', 'remains bounded'],
  },
  {
    correctAnswer: 'is not',
    selectionAvailable: ['is', 'is not'],
  },
  {
    correctAnswer: 'is',
    selectionAvailable: ['is', 'is not'],
  },
  {
    correctAnswer: 'remains bounded',
    selectionAvailable: ['remains bounded', 'diverges', 'converges'],
  },
  {
    correctAnswer: '1980',
    selectionAvailable: ['1960', '1970', '1980', '1990'],
  },
  {
    correctAnswer: 'Benoit Mandelbrot',
    selectionAvailable: [
      'Thomas Mandelbrot',
      'Benoit Mandelbrot',
      'Gaston Julia',
      'Pierre Fatou',
    ],
  },{
    correctAnswer: 'Benoît Mandelbrot',
    selectionAvailable: [
      'Thomas Mandelbrot',
      'Benoît Mandelbrot',
      'Gaston Julia',
      'Pierre Fatou',
    ],
  },
  {
    correctAnswer: 'iterating',
    selectionAvailable: ['iterating', 'repeating', 'optimising', 'maximising'],
  },
  {
    correctAnswer: 'z_n = z_n-1 ^2+ c',
    selectionAvailable: [
      'z_n = z_n-1 ^2+ c',
      'z_n = z_n-1 ^2+ 1',
      'z_n = z_n-1+ c',
      'z_n^2 = z_n-1 + c',
    ],
  },
  {
    correctAnswer: '0',
    selectionAvailable: ['-1', '0', '1', '2', '3'],
  },
  {
    correctAnswer: 'Gaston Julia',
    selectionAvailable: ['Benoit Mandelbrot', 'Pierre Julia', 'Gaston Julia'],
  },
  {
    correctAnswer: 'Pierre Fatou',
    selectionAvailable: [
      'Gaston Fatou',
      'Pierre Fatou',
      'Pierre Julia',
      'Benoit Mandelbrot',
    ],
  },
  {
    correctAnswer: '1910',
    selectionAvailable: ['1900', '1910', '1920', '1930'],
  },
  {
    correctAnswer: 'z_n = z_n-1 ^2+ c',
    selectionAvailable: [],
  },
  {
    correctAnswer: 'fixed',
    selectionAvailable: ['unfixed', 'fixed'],
  },
  {
    correctAnswer: 'connected',
    selectionAvailable: ['disconnected', 'connected', 'tethered', 'untethered'],
  },
  {
    correctAnswer: 'disconnected',
    selectionAvailable: ['disconnected', 'connected', 'tethered', 'untethered'],
  },
  {
    correctAnswer: 'complex plane',
    selectionAvailable: ['Cartesian plane', 'complex plane'],
  },
  {
    correctAnswer: 'x+yi',
    selectionAvailable: ['x + y','xyi', 'x+yi', ],
  },
  {
    correctAnswer: 'an imaginary number',
    selectionAvailable: ['a real number', 'an imaginary number', 'a fake number'],
  },{
    correctAnswer: '',
    selectionAvailable: [],
  },{
    correctAnswer: '',
    selectionAvailable: [],
  },
];
// an imaginary numnber
export default options;
