import React, { Component } from 'react';
import Icon from 'react-icons-kit';
import { mobile } from 'react-icons-kit/icomoon/mobile';
import { ic_language } from 'react-icons-kit/md/ic_language';
import { browser } from 'react-icons-kit/iconic/browser';
import TailwindIcon from './components/TailwindIcon';
import './App.css';
import Feature from './components/Feature';

class App extends Component {
  render() {
    return (
      <div className="App flex flex-col justify-center content-center items-center w-full h-screen bg-teal text-white p-4 overflow-auto">
        <h1 className="h-1 mb-8">Tailwind Themes</h1>
        <h2 className="mb-8 text-base text-center font-thin">
          High quality website templates supercharged by TailwindCSS.
        </h2>

        <div className="block mb-8 w-full text-center">
          <input
            autoFocus
            className="block md:inline w-full md:w-1/3 shadow appearance-none border rounded py-2 px-3 mr-1 mb-1 text-grey-darker"
            id="email"
            type="email"
            placeholder="Enter your email to receive the latest news"
          />
          <button
            type="submit"
            className="rounded-sm bg-teal-lighter hover:bg-teal-dark text-teal-darker text-bold p-2"
          >
            Sign up
          </button>
        </div>

        <div className="w-full md:w-3/4 h-auto flex flex-wrap">
          <Feature
            description="Tailwind is a utility-first CSS framework for rapidly building custom user interfaces."
            icon={<TailwindIcon />}
            title="TailwindCSS"
          />

          <Feature
            description="Build a website which looks outstanding on desktop, tablet and mobile."
            icon={<Icon icon={mobile} size={40} />}
            title="Fully Responsive"
          />

          <Feature
            description="Create a website which works flawlessly on Chrome, Firefox, Internet Explorer and more."
            icon={<Icon icon={browser} size={40} />}
            title="Cross-Browser Support"
          />

          <Feature
            description="Built in localised support makes translating content as simple as possible."
            icon={<Icon icon={ic_language} size={40} />}
            title="Localised Support"
          />
        </div>
      </div>
    );
  }
}

export default App;
