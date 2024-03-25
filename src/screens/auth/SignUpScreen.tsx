import React, {useState} from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import {appColors} from '../../constans/appColors';
import {globalStyles} from '../../styles/globalStyles';
import * as yup from 'yup';

import {
  FormItem,
  InputComponent,
  LoadingModal,
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
import authenticationApi from '../../apis/authApi';
import {Controller, useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {addAuth} from '../../redux/reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

type IProps = {
  navigation?: any;
};

type IFormSignUp = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const schema = yup.object().shape({
  fullName: yup.string().required('Full Name is required').label('Full Name'),
  email: yup.string().email().required('Email is required').label('Email'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      'Password must have at least 8 characters, one uppercase, one number',
    )
    .label('Password'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required')
    .label('Confirm Password'),
});

const SignUpScreen: React.FC<IProps> = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    setValue,
    formState: {errors},
    handleSubmit,
  } = useForm<IFormSignUp>({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const handleRegister = async (values: IFormSignUp) => {
    try {
      setIsLoading(true);
      const res = await authenticationApi.HandleAuthentication(
        '/register',
        values,
        'post',
      );
      dispatch(addAuth(res.data));
      await AsyncStorage.setItem('auth', JSON.stringify(res.data));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ContainersComponent isImageBackground isScroll isBack>
        <SectionComponent>
          <TextComponent text="Sign Up" font={fontFamilies.medium} size={24} />
          <Space height={21} />
          <FormItem error={errors?.fullName?.message}>
            <Controller
              control={control}
              name="fullName"
              defaultValue=""
              render={({field: {value}}) => (
                <InputComponent
                  allowClear
                  value={value}
                  placeholder="Full name"
                  prefix={<User size={22} color={appColors.gray} />}
                  onChange={value => setValue('fullName', value)}
                />
              )}
            />
          </FormItem>
          <FormItem error={errors?.email?.message}>
            <Controller
              control={control}
              name="email"
              defaultValue=""
              render={({field: {value}}) => (
                <InputComponent
                  allowClear
                  value={value}
                  placeholder="Email"
                  prefix={<Sms size={22} color={appColors.gray} />}
                  onChange={value =>
                    setValue('email', value, {shouldValidate: true})
                  }
                />
              )}
            />
          </FormItem>

          <FormItem error={errors?.password?.message}>
            <Controller
              control={control}
              name="password"
              defaultValue=""
              render={({field: {value}}) => (
                <InputComponent
                  isPassWord
                  value={value}
                  placeholder="Your password"
                  prefix={<Lock size={22} color={appColors.gray} />}
                  onChange={value =>
                    setValue('password', value, {shouldValidate: true})
                  }
                />
              )}
            />
          </FormItem>

          <FormItem error={errors?.confirmPassword?.message}>
            <Controller
              control={control}
              name="confirmPassword"
              defaultValue=""
              render={({field: {value}}) => (
                <InputComponent
                  isPassWord
                  value={value}
                  placeholder="Confirm password"
                  prefix={<Lock size={22} color={appColors.gray} />}
                  onChange={value =>
                    setValue('confirmPassword', value, {shouldValidate: true})
                  }
                />
              )}
            />
          </FormItem>
        </SectionComponent>

        <Space height={16} />

        <SectionComponent>
          <ButtonComponent
            onPress={handleSubmit(handleRegister)}
            text="SIGN UP"
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
              text="Sign-in"
              onPress={() => navigation.goBack('LoginScreen')}
            />
          </RowComponent>
        </SectionComponent>
      </ContainersComponent>
      <LoadingModal visible={isLoading} />
    </>
  );
};

export default SignUpScreen;
