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
import {
  ArrowCircleRight,
  ArrowRight,
  Lock,
  Sms,
  User,
} from 'iconsax-react-native';
import {ContainersComponent} from '../../components';
import {fontFamilies} from '../../constans/fontFamilies';
import ButtonComponent from '../../components/ButtonComponent';
import SocialLogin from './components/SocialLogin';

type IProps = {
  navigation?: any;
};

const ForgotPass: React.FC<IProps> = ({navigation}) => {
  const [email, setEmail] = useState('');

  return (
    <ContainersComponent isImageBackground isScroll isBack>
      <SectionComponent>
        <TextComponent
          text="Reset Password"
          font={fontFamilies.medium}
          size={24}
        />
        <TextComponent
          text="Please enter your email address to request a password reset"
          size={18}
        />
        <Space height={21} />

        <InputComponent
          allowClear
          value={email}
          placeholder="Email"
          prefix={<Sms size={22} color={appColors.gray} />}
          onChange={(value: string) => setEmail(value)}
          marginBottom={34}
        />

        <View style={{alignItems: 'center'}}>
          <ButtonComponent
            text="Send"
            type="primary"
            suffix={<ArrowRight size={24} color={appColors.white} />}
          />
        </View>
      </SectionComponent>
    </ContainersComponent>
  );
};

export default ForgotPass;
