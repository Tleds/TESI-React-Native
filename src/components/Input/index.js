import React, {forwardRef} from 'react';

import { Container, TInputStyle } from './styles';

function Input({style, ...rest}, ref) {
    return (
        <Container {...rest} style={style}>
          <TInputStyle {...rest} ref={ref} />
        </Container>
      );
}

export default forwardRef(Input);