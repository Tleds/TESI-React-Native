import React from 'react';
import {ActivityIndicator} from 'react-native';
import Proptypes from 'prop-types';

import {Container, TextStyle} from './styles';

const Button = ({children, loading, ...rest}) => {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#643196" />
      ) : (
        <TextStyle>{children}</TextStyle>
      )}
    </Container>
  );
};

Button.propTypes = {
  children: Proptypes.string.isRequired,
  loading: Proptypes.bool,
};
Button.defaultProps = {
  loading: false,
};

export default Button;
