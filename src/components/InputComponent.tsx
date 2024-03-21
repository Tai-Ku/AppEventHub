import {View, TouchableOpacity, TextInput, StyleSheet} from 'react-native';
import React, {ReactNode, useState} from 'react';
import {Eye, EyeSlash} from 'iconsax-react-native';
import {appColors} from '../constans/appColors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {globalStyles} from '../styles/globalStyles';
import {KeyboardTypeOptions} from 'react-native';

type IProps = {
  isPassWord?: boolean;
  allowClear?: boolean;
  //
  value: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  marginBottom?: number;
  //
  prefix?: ReactNode;
  suffix?: ReactNode;
  //
  onChange: (value: string) => void;
};

const InputComponent: React.FC<IProps> = ({
  isPassWord,
  allowClear,
  //
  value,
  placeholder = '',
  keyboardType = 'default',
  marginBottom,
  //
  prefix,
  suffix,
  //
  onChange,
}) => {
  const [isShowPassWord, setIsShowPassWord] = useState(isPassWord ?? false);

  return (
    <View style={[styles.inputContainer, {marginBottom}]}>
      {prefix}
      <TextInput
        placeholder={placeholder}
        value={value}
        secureTextEntry={isShowPassWord}
        keyboardType={keyboardType}
        onChangeText={value => onChange(value)}
        //
        style={[styles.input, globalStyles.text]}
        placeholderTextColor="#747688"
      />
      {suffix}
      <TouchableOpacity
        onPress={
          isPassWord
            ? () => setIsShowPassWord(prev => !prev)
            : () => onChange('')
        }>
        {isPassWord ? (
          isShowPassWord ? (
            <EyeSlash size={22} color={appColors.gray} />
          ) : (
            <Eye size={22} color={appColors.gray} />
          )
        ) : (
          value.length > 0 &&
          allowClear && (
            <AntDesign name="close" size={22} color={appColors.text} />
          )
        )}
      </TouchableOpacity>
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    //
    width: '100%',
    minHeight: 56,
    paddingHorizontal: 15,
    //
    backgroundColor: appColors.white,
    borderColor: appColors.gray3,
    borderRadius: 12,
    borderWidth: 1,
  },
  input: {
    flex: 1,
    margin: 0,
    padding: 0,
    paddingHorizontal: 14,
    //
    color: appColors.text,
  },
});
