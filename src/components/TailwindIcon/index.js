import React, { Component } from 'react';

class TailwindIcon extends Component {
  render() {
    return (
      <svg className="mx-auto block h-12" viewBox="0 20 90 45">
        <defs>
          <circle id="b" cx="40" cy="40" r="40" />
          <filter
            x="-8.8%"
            y="-6.2%"
            width="117.5%"
            height="117.5%"
            filterUnits="objectBoundingBox"
            id="a"
          >
            <feOffset dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur
              stdDeviation="2"
              in="shadowOffsetOuter1"
              result="shadowBlurOuter1"
            />
            <feColorMatrix
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              in="shadowBlurOuter1"
            />
          </filter>
          <linearGradient x1="0%" y1="0%" y2="100%" id="c">
            <stop stopColor="#2383AE" offset="0%" />
            <stop stopColor="#6DD7B9" offset="100%" />
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
          <g transform="translate(5 5)">
            <use fill="#000" filter="url(#a)" />
            <use fill="#FFF" />
          </g>
          <path
            d="M25.6 33.92C27.52 26.24 32.32 22.4 40 22.4c11.52 0 12.96 8.64 18.72 10.08 3.84.96 7.2-.48 10.08-4.32-1.92 7.68-6.72 11.52-14.4 11.52-11.52 0-12.96-8.64-18.72-10.08-3.84-.96-7.2.48-10.08 4.32zM11.2 51.2c1.92-7.68 6.72-11.52 14.4-11.52 11.52 0 12.96 8.64 18.72 10.08 3.84.96 7.2-.48 10.08-4.32-1.92 7.68-6.72 11.52-14.4 11.52-11.52 0-12.96-8.64-18.72-10.08-3.84-.96-7.2.48-10.08 4.32z"
            fill="url(#c)"
            transform="translate(5 5)"
          />
        </g>
      </svg>
    );
  }
}

export default TailwindIcon;
