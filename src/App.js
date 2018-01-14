import React, { Component } from 'react';
import Icon from 'react-icons-kit';
import { mobile } from 'react-icons-kit/icomoon/mobile';
import { ic_language } from 'react-icons-kit/md/ic_language';
import { browser } from 'react-icons-kit/iconic/browser';
import TailwindIcon from './components/TailwindIcon';

import './App.css';
import Feature from './components/Feature';

class App extends Component {
  state = {
    email: '',
    error: null,
    submitting: false,
    subscribed: false
  };

  handleSubscribe = e => {
    e.preventDefault();

    this.setState({ submitting: true });

    fetch(
      `https://tailwind-themes.us17.list-manage.com/subscribe/post?u=cceff8adba7dcdcb1ca3d6b57&id=8b5f1b47b9&EMAIL=${encodeURIComponent(
        this.state.email
      )}`,
      {
        credentials: 'include'
      }
    )
      // .then(() => this.setState({subscribed: true}))
      // .catch((e) => this.setState({error: e.message}))
      .finally(() => this.setState({ submitting: false, subscribed: true }));
  };

  renderForm() {
    const disabled = !this.state.email || this.state.submitting;

    if (this.state.subscribed) {
      return (
        <div className="text-teal-light">
          Thank you for subscribing to updates{' '}
          <span className="font-bold">{this.state.email}</span>! We'll be in
          touch shortly.
        </div>
      );
    }

    return (
      <form method="POST" noValidate onSubmit={this.handleSubscribe}>
        <input
          autoFocus
          className="block md:inline w-full md:w-1/3 shadow appearance-none border rounded py-2 px-3 mr-1 mb-1 text-grey-darker"
          name="EMAIL"
          id="email"
          type="email"
          onChange={e => this.setState({ email: e.target.value })}
          placeholder="Enter your email to receive the latest news"
          value={this.state.email}
        />
        <button
          disabled={disabled}
          type="submit"
          className={`rounded-sm bg-teal hover:bg-teal-dark text-white text-bold p-2 ${
            disabled ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Sign up
        </button>
      </form>
    );
  }

  render() {
    return (
      <div className="App flex flex-col justify-center content-center items-center w-full h-screen bg-teal text-white p-4 overflow-auto">
        <h1 className="h-1 mb-8">Tailwind Themes</h1>
        <h2 className="mb-8 text-base text-center font-thin">
          High quality website templates supercharged by TailwindCSS.
        </h2>

        <div className="block mb-8 w-full text-center">{this.renderForm()}</div>

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
            description="Create a website which works flawlessly on Chrome, Firefox, Safari, Internet Explorer and more."
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
