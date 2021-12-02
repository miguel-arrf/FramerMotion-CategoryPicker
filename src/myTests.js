import * as React from "react";

export class MyComponentNovo extends React.Component {
  render() {
    return <Teste />;
  }
}

export class LNComponent extends React.Component {
  render() {
    return <LN />;
  }
}

export class CRCComponent extends React.Component {
  render() {
    return <CRC />;
  }
}

function CRC() {
  return (
    <div className="">
      <div className="font-mono font-bold">
        Complex Science Networks [20 out of 20]
      </div>
      <div className="mt-3 font-light">
        Question Classification using Naive Bayes and Cosine Similarities.
      </div>

      <div className="flex flex-row flex-wrap items-start gap-3 mt-5 ">
        <p className="sixthBlockTag_1 text-base font-light  text-black sm:text-lg  bg-blue-200 rounded-lg px-2.5 p-1">
          Python
        </p>
        <p className="sixthBlockTag_2 text-base font-light  text-black sm:text-lg  bg-blue-200 rounded-lg px-2.5 p-1">
          NLP
        </p>
        <p className="sixthBlockTag_3 text-base font-light  text-black sm:text-lg  bg-blue-200 rounded-lg px-2.5 p-1">
          Scikit-learn
        </p>
      </div>
    </div>
  );
}

function LN() {
  return (
    <div className="">
      <div className="font-mono font-bold">
        Natural Language Processing [20 out of 20]
      </div>
      <div className="mt-3 font-light">
        Question Classification using Naive Bayes and Cosine Similarities.
      </div>

      <div className="flex flex-row flex-wrap items-start gap-3 mt-5 ">
        <p className="sixthBlockTag_1 text-base font-light  text-black sm:text-lg  bg-red-200 rounded-lg px-2.5 p-1">
          Python
        </p>
        <p className="sixthBlockTag_2 text-base font-light  text-black sm:text-lg  bg-red-200 rounded-lg px-2.5 p-1">
          NLP
        </p>
        <p className="sixthBlockTag_3 text-base font-light  text-black sm:text-lg  bg-red-200 rounded-lg px-2.5 p-1">
          Scikit-learn
        </p>
      </div>
    </div>
  );
}

function Teste() {
  return (
    <div className="">
      <div className="font-mono font-bold">
        Multiparadigm Programming Project [19 out of 20]
      </div>
      <div className="mt-3 font-light">
        Application for creating and managing digital notebooks in an academic
        context.
      </div>

      <div className="flex flex-row flex-wrap items-start gap-3 mt-5 ">
        <p className="sixthBlockTag_1 text-base font-light  text-black sm:text-lg  bg-blue-200 rounded-lg px-2.5 p-1">
          SCALA
        </p>
        <p className="sixthBlockTag_2 text-base font-light  text-black sm:text-lg  bg-blue-200 rounded-lg px-2.5 p-1">
          CSS
        </p>
        <p className="sixthBlockTag_3 text-base font-light  text-black sm:text-lg  bg-blue-200 rounded-lg px-2.5 p-1">
          Functional Programming
        </p>
      </div>
    </div>
  );
}

function Mequie() {
  return (
    <div className="w-full ">
      <div className="font-mono font-bold">
        Information Processing Project [20 out of 20]
      </div>
      <div className="mt-3 font-light">
        Company modeling and stock generation with statistical and probabilistic
        treatment using Markov chainsjjjjjj.
      </div>

      <div className="flex flex-row flex-wrap items-start gap-3 pt-5 ">
        <p className="sixthBlockTag_1 text-base font-light  text-black sm:text-lg  bg-green-200 rounded-lg px-2.5 p-1">
          Statistics and Probabilities
        </p>
        <p className="sixthBlockTag_2 text-base font-light  text-black sm:text-lg  bg-green-200 rounded-lg px-2.5 p-1">
          Java
        </p>
        <a
          href="https://drive.google.com/file/d/12_oDRbKgF52lHoJ9TbPL0kvov-eOHGOp/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="sixthBlockTag_3 px-2.5 py-0.5 rounded-lg bg-green-200 text-base font-light  text-black p-1"
        >
          Report
          <i className="fas fa-external-link-square-alt"></i>
        </a>
      </div>
    </div>
  );
}

export class MyComponent extends React.Component {
  render() {
    return <Mequie />;
  }
}
