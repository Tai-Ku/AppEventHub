import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import ButtonComponent from '../../components/ButtonComponent';
import {appColors} from '../../constans/appColors';
import {globalStyles} from '../../styles/globalStyles';

const LoginScreen = () => {
  return (
    <SafeAreaView style={[globalStyles.container]}>
      <ButtonComponent
        type="primary"
        text="Login"
        onPress={() => console.log('Login')}
        color={appColors.primary}
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
