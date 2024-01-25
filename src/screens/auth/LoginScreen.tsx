import React, {ReactElement, ReactNode, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ButtonComponent from '../../components/ButtonComponent';
import {appColors} from '../../constans/appColors';
import {globalStyles} from '../../styles/globalStyles';
import {View} from 'react-native';
import {InputComponent} from '../../components';
import {Lock, Sms} from 'iconsax-react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [passWord, setPassword] = useState('');

  return (
    <View
      style={[
        globalStyles.container,
        {
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          minHeight: 56,
        },
      ]}>
      <InputComponent
        allowClear
        value={email}
        placeholder="Email"
        prefix={<Sms size={22} color={appColors.gray} />}
        onChange={(value: string) => setEmail(value)}
        marginBottom={16}
      />

      <InputComponent
        isPassWord
        value={passWord}
        placeholder="Your Pass"
        prefix={<Lock size={22} color={appColors.gray} />}
        onChange={(value: string) => setPassword(value)}
      />
    </View>
  );
};

export default LoginScreen;
