import {
  View,
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import React, {ReactNode} from 'react';
import {TextComponent} from '.';

type IProps = {
  type?: 'primary' | 'link' | 'text';
  text: string;
  //
  color?: string;
  style?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyle?: StyleProp<TextStyle>;
  //
  prefix?: ReactNode;
  suffix?: ReactNode;
  //
  onPress?: () => void;
};
const ButtonComponent: React.FC<IProps> = ({
  type,
  text,
  //
  color,
  style,
  textColor,
  textStyle,
  //
  prefix,
  suffix,
  onPress,
}) => {
  return (
    <TouchableOpacity>
      {prefix}
      <TextComponent text={text} color={textColor} style={textStyle} />
      {suffix}
    </TouchableOpacity>
  );
};

export default ButtonComponent;
