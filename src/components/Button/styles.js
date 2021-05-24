import styled from 'styled-components/native';
import {BaseButton} from 'react-native-gesture-handler';
import {scale, verticalScale} from 'react-native-size-matters';

export const Container = styled(BaseButton)`
  width: ${(props) =>
    props.width ? scale(parseInt(props.width)) : scale(200)}px;
  height: ${verticalScale(40)}px;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  border-radius: ${scale(4)}px;
  margin: ${scale(10)}px;
  background: #C4C4C4;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const TextStyle = styled.Text`
  color: #000;
  font-size: ${scale(16)}px;
`;
