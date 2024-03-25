import {View, Text} from 'react-native';
import React from 'react';
import {SectionComponent, TextComponent} from '.';
import {appColors} from '../constans/appColors';

type IProps = {
  children: JSX.Element;
  error?: string;
  isNoSpace?: boolean;
};

const FormItem: React.FC<IProps> = ({children, error, isNoSpace = true}) => {
  return (
    <View style={[, {marginBottom: isNoSpace ? 16 : 0}]}>
      {children}
      {error && (
        <TextComponent
          text={error}
          color={appColors.danger}
          style={{marginTop: 8}}
        />
      )}
    </View>
  );
};

export default FormItem;
