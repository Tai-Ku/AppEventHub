import {View, Text, StyleProp, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../styles/globalStyles';

type IProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
};

const SectionComponent: React.FC<IProps> = ({children, style}) => {
  return <View style={[globalStyles.section, style]}>{children}</View>;
};

export default SectionComponent;
