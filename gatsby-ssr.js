// gatsby-ssr.js

const React = require('react');
const { onRenderBody } = require('gatsby');
require('./src/styles/global.css');

exports.onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: `en` });
};

exports.wrapRootElement = ({ element }) => {
  return <React.Fragment>{element}</React.Fragment>;
};
