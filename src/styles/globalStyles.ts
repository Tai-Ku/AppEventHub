import {StyleSheet} from 'react-native';
import {appColors} from '../constans/appColors';
import {fontFamilies} from '../constans/fontFamilies';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  text: {
    fontFamily: fontFamilies.regular,
    fontSize: 14,
    color: appColors.text,
  },
});
