import React, { Component } from 'react';

class Feature extends Component {
  render() {
    const { description, icon, title } = this.props;

    return (
      <div className="w-1/2 mb-8 p-4">
        <span className="block w-full text-center mb-2">{icon}</span>
        <h3 className="block text-center h-12 md:h4">{title}</h3>
        <span className="text-sm md:text-base leading-normal">
          {description}
        </span>
      </div>
    );
  }
}

export default Feature;
