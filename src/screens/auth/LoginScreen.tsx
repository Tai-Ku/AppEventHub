import React, {useState} from 'react';
import {appColors} from '../../constans/appColors';
import {globalStyles} from '../../styles/globalStyles';
import {Image, Switch, View} from 'react-native';
import {
  InputComponent,
  RowComponent,
  SectionComponent,
  Space,
  TextComponent,
} from '../../components';
import {Lock, Sms} from 'iconsax-react-native';
import {ContainersComponent} from '../../components';
import {fontFamilies} from '../../constans/fontFamilies';
import ButtonComponent from '../../components/ButtonComponent';
import SocialLogin from './components/SocialLogin';
import authenticationApi from '../../apis/authApi';

type IProps = {
  navigation?: any;
};

const LoginScreen: React.FC<IProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [passWord, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(true);

  const handleLogin = async () => {
    try {
      const res = await authenticationApi.HandleAuthentication('/login');

      console.log(JSON.stringify(res));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContainersComponent isImageBackground isScroll>
      <SectionComponent
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 75,
        }}>
        <Image
          source={require('../../assets/images/text-logo.png')}
          style={{
            width: 162,
            height: 114,
            marginBottom: 30,
          }}
        />
      </SectionComponent>
      <SectionComponent>
        <TextComponent text="Sign in" font={fontFamilies.medium} size={24} />
        <Space height={21} />
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
          marginBottom={20}
        />

        <RowComponent justifyContent="space-between">
          <RowComponent onPress={() => setIsRemember(prev => !prev)}>
            <Switch
              trackColor={{true: appColors.primary}}
              thumbColor={appColors.white}
              value={isRemember}
              onChange={() => setIsRemember(prev => !prev)}
            />
            <TextComponent text="Remember me" style={{marginLeft: 8}} />
          </RowComponent>
          <ButtonComponent
            text="Forgot Password?"
            type="text"
            onPress={() => navigation.navigate('ForgotPass')}
          />
        </RowComponent>
      </SectionComponent>

      <Space height={16} />

      <SectionComponent>
        <ButtonComponent
          onPress={handleLogin}
          text="SIGN IN"
          type="primary"
          fontFamily="medium"
        />
      </SectionComponent>
      <SocialLogin />
      <SectionComponent>
        <RowComponent justifyContent="center">
          <TextComponent text="Don’t have an account?  " />
          <ButtonComponent
            type="link"
            text="Sign-up"
            onPress={() => navigation.navigate('SignUpScreen')}
          />
        </RowComponent>
      </SectionComponent>
    </ContainersComponent>
  );
};

export default LoginScreen;
