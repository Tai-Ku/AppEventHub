import {View, Text, StyleProp, ViewStyle, TouchableOpacity} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../styles/globalStyles';

type IJustify =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type IProps = {
  activeOpacity?: number;
  children: ReactNode;
  justifyContent?: IJustify;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const RowComponent: React.FC<IProps> = ({
  children,
  activeOpacity = 0.8,
  style,
  justifyContent,
  onPress,
}) => {
  const localStyles = [
    globalStyles.row,
    {
      justifyContent,
    },
    style,
  ];

  if (onPress) {
    return (
      <TouchableOpacity
        activeOpacity={activeOpacity}
        onPress={onPress}
        style={localStyles}>
        {children}
      </TouchableOpacity>
    );
  }

  return <View style={localStyles}>{children}</View>;
};

export default RowComponent;
