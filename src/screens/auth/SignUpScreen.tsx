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
import {Lock, Sms, User} from 'iconsax-react-native';
import {ContainersComponent} from '../../components';
import {fontFamilies} from '../../constans/fontFamilies';
import ButtonComponent from '../../components/ButtonComponent';
import SocialLogin from './components/SocialLogin';

type IProps = {
  navigation?: any;
};

const initValue = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpScreen: React.FC<IProps> = ({navigation}) => {
  const [values, setValues] = useState(initValue);

  const handleOnChange = (key: keyof typeof initValue, value: string) => {
    const data = {...values};
    data[key] = value;

    setValues(data);
  };

  return (
    <ContainersComponent isImageBackground isScroll isBack>
      <SectionComponent>
        <TextComponent text="Sign Up" font={fontFamilies.medium} size={24} />
        <Space height={21} />
        <InputComponent
          allowClear
          value={values.fullName}
          placeholder="Full name"
          prefix={<User size={22} color={appColors.gray} />}
          onChange={(value: string) => handleOnChange('fullName', value)}
          marginBottom={16}
        />
        <InputComponent
          allowClear
          value={values.email}
          placeholder="Email"
          prefix={<Sms size={22} color={appColors.gray} />}
          onChange={(value: string) => handleOnChange('email', value)}
          marginBottom={16}
        />

        <InputComponent
          isPassWord
          value={values.password}
          placeholder="Your password"
          prefix={<Lock size={22} color={appColors.gray} />}
          onChange={(value: string) => handleOnChange('password', value)}
          marginBottom={20}
        />
        <InputComponent
          isPassWord
          value={values.password}
          placeholder="Confirm password"
          prefix={<Lock size={22} color={appColors.gray} />}
          onChange={(value: string) => handleOnChange('password', value)}
          marginBottom={20}
        />
      </SectionComponent>

      <Space height={16} />

      <SectionComponent>
        <ButtonComponent text="SIGN UP" type="primary" fontFamily="medium" />
      </SectionComponent>
      <SocialLogin />
      <SectionComponent>
        <RowComponent justifyContent="center">
          <TextComponent text="Don’t have an account?  " />
          <ButtonComponent
            type="link"
            text="Sign-in"
            onPress={() => navigation.goBack('LoginScreen')}
          />
        </RowComponent>
      </SectionComponent>
    </ContainersComponent>
  );
};

export default SignUpScreen;
