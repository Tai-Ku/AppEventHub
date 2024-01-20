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
import {globalStyles} from '../styles/globalStyles';
import {appColors} from '../constans/appColors';

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
  return type === 'primary' ? (
    <TouchableOpacity
      style={[
        globalStyles.button,
        {
          backgroundColor: color ?? appColors.primary,
        },
        style,
      ]}
      onPress={onPress}>
      {prefix}
      <TextComponent
        text={text}
        color={textColor}
        style={[
          textStyle,
          {
            marginLeft: prefix ? 12 : 0,
          },
        ]}
        flex={suffix ? 1 : 0}
      />
      {suffix}
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <TextComponent
        text={text}
        color={type === 'link' ? appColors.link : appColors.text}
      />
    </TouchableOpacity>
  );
};

export default ButtonComponent;
