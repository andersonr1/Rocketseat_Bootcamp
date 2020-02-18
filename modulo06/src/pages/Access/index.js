import React from 'react';
import PropTypes from 'prop-types';

import { Browser } from './styles';

export default function Access() {
  return <Browser source={{ uri: 'https://github.com/' }} />;
}

Access.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

Access.navigationOptions = () => ({
  title: 'Meu GIT',
});
