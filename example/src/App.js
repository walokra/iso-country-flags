import React from 'react';
import PropTypes from 'prop-types';
import { findFlagByIso2Code } from 'iso-country-flags';

const dimensions = { height: '3.33vw', width: '2.5vh' };

const CountryFlagImg = ({ countryCode, dimensions }) => {
  const Flag = findFlagByIso2Code(countryCode).ReactComponent;
  return (
    <svg width={dimensions.width} height={dimensions.height}>
      <Flag />
    </svg>
  );
};

const App = (props) => {
  return (
    <CountryFlagImg countryCode={props.countryCode} dimensions={dimensions} />
  );
};

App.propTypes = {
  countryCode: PropTypes.string.isRequired,
};

App.defaultProps = {
  countryCode: 'fi',
};

export default App;
