import React from 'react';
import {
  ButtonComponent,
  SectionComponent,
  Space,
  TextComponent,
} from '../../../components';
import {appColors} from '../../../constans/appColors';
import {fontFamilies} from '../../../constans/fontFamilies';
import {Facebook, Google} from '../../../assets/svgs';

const SocialLogin = () => {
  return (
    <SectionComponent>
      <TextComponent
        text="OR"
        color={appColors.gray4}
        size={16}
        font={fontFamilies.medium}
        style={{
          textAlign: 'center',
        }}
      />
      <Space height={16} />
      <ButtonComponent
        type="primary"
        text="Login with Google"
        color={appColors.white}
        textColor={appColors.text}
        prefix={<Google />}
        textFont={fontFamilies.regular}
        textStyle={{color: appColors.gray}}
      />
      <ButtonComponent
        type="primary"
        text="Login with Google"
        color={appColors.white}
        textColor={appColors.text}
        prefix={<Facebook />}
        textFont={fontFamilies.regular}
        textStyle={{color: appColors.gray}}
      />
    </SectionComponent>
  );
};

export default SocialLogin;
