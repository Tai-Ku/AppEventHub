import {View, Text} from 'react-native';
import React from 'react';

type IProps = {
  width?: number;
  height?: number;
};
const Space: React.FC<IProps> = ({width, height}) => {
  return (
    <View
      style={{
        height,
        width,
      }}
    />
  );
};

export default Space;
