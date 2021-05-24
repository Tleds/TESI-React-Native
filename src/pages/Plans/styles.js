import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';

export const Container = styled.KeyboardAvoidingView.attrs({
    behavior: Platform.select({android: undefined, ios: 'padding'}),
  })`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 500px;
    margin: 0 auto;
    padding: ${verticalScale(15)}px;
`;
export const VerticalRow = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const Title = styled.Text`
  font-size: ${scale(18)}px;
  font-weight: bold;
`;