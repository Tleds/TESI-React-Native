import styled from 'styled-components/native';
import {scale, verticalScale} from 'react-native-size-matters';

export const Container = styled.View`
  width: ${scale(280)}px;
  height: ${verticalScale(45)}px;
  background: #C4C4C4;
  border-radius: ${verticalScale(12)}px;
  border-bottom-color: #fff;
  border-bottom-width: ${scale(1)}px;
  flex-direction: row;
  align-items: center;
  margin: ${scale(10)}px;
  padding: ${scale(10)}px;
`;
export const TInputStyle = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255, 255, 255, 0.8)',
})`
  width: ${scale(270)}px;

  font-size: ${scale(18)}px;
  color: #fff;
`;
