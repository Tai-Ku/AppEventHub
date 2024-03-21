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
import {fontFamilies} from '../constans/fontFamilies';

type IProps = {
  type?: 'primary' | 'link' | 'text';
  text: string;
  //
  color?: string;
  textFont?: string;
  style?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyle?: StyleProp<TextStyle>;
  fontFamily?: keyof typeof fontFamilies;
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
  textFont,
  style,
  textColor,
  textStyle,
  fontFamily = 'medium',
  //
  prefix,
  suffix,
  onPress,
}) => {
  return type === 'primary' ? (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity
        style={[
          globalStyles.button,
          globalStyles.shadow,
          {
            backgroundColor: color ?? appColors.primary,
            marginBottom: 17,
            width: '80%',
          },
          style,
        ]}
        onPress={onPress}>
        {prefix}
        <TextComponent
          text={text}
          color={textColor ?? appColors.white}
          style={[
            textStyle,
            {
              marginLeft: prefix ? 12 : 0,
              fontFamily: fontFamilies[fontFamily],
              fontSize: 16,
              textAlign: 'center',
            },
          ]}
          flex={suffix ? 1 : 0}
          font={textFont ?? fontFamilies.regular}
        />
        {suffix}
      </TouchableOpacity>
    </View>
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
