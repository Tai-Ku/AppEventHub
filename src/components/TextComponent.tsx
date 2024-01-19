import {StyleProp, Text, TextStyle} from 'react-native';
import React from 'react';
import {appColors} from '../constans/appColors';
import {fontFamilies} from '../constans/fontFamilies';
import {globalStyles} from '../styles/globalStyles';

type IProps = {
  text: string;
  color?: string;
  size?: number;
  flex?: number;
  font?: string;
  style?: StyleProp<TextStyle>;
  isTitle?: boolean;
};

const TextComponent: React.FC<IProps> = ({
  isTitle,
  text,
  color,
  size,
  flex,
  font,
  style,
}) => {
  return (
    <Text
      style={[
        globalStyles.text,
        {
          color: color ?? appColors.text,
          flex: flex ?? 0,
          fontSize: size ?? isTitle ? 24 : 14,
          fontFamily:
            font ?? isTitle ? fontFamilies.bold : fontFamilies.regular,
        },
        style,
      ]}>
      {text}
    </Text>
  );
};

export default TextComponent;
