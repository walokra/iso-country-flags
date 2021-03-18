import React from 'react';
import App from './App';

export default {
  component: App,
  title: 'App',
};

const Template = (args) => <App {...args} />;

export const Default = Template.bind({});

export const Sweden = Template.bind({});
Sweden.args = {
  countryCode: 'se',
  dimensions: {
    height: '3.33vw',
    width: '2.5vh',
  },
};

export const Germany = Template.bind({});
Germany.args = {
  countryCode: 'de',
  dimensions: {
    height: '3.33vw',
    width: '2.5vh',
  },
};


export const Japan = Template.bind({});
Japan.args = {
  countryCode: 'jp',
  dimensions: {
    height: '3.33vw',
    width: '2.5vh',
  },
};
