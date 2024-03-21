import {
  View,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../styles/globalStyles';
import {useNavigation} from '@react-navigation/native';
import {RowComponent, TextComponent} from '.';
import {ArrowLeft} from 'iconsax-react-native';
import {appColors} from '../constans/appColors';
import {fontFamilies} from '../constans/fontFamilies';

type IProps = {
  isImageBackground?: boolean;
  isScroll?: boolean;
  title?: string;
  children: ReactNode;
  isBack?: boolean;
};

const ContainersComponent: React.FC<IProps> = ({
  isImageBackground = false,
  isScroll = false,
  title,
  children,
  isBack,
}) => {
  const navigation: any = useNavigation();

  const returnContainer = isScroll ? (
    <ScrollView style={{flex: 1}}>{children}</ScrollView>
  ) : (
    <View style={{flex: 1}}>{children}</View>
  );

  const headerComponent = () => {
    return (
      <View style={{flex: 1, paddingTop: 30}}>
        {(title || isBack) && (
          <RowComponent
            style={{
              paddingHorizontal: 16,
              paddingVertical: 10,
              minHeight: 48,
              minWidth: 48,
            }}>
            {isBack && (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{marginRight: 12}}>
                <ArrowLeft color={appColors.text} size={24} />
              </TouchableOpacity>
            )}

            {title && <TextComponent size={16} text={title} />}
          </RowComponent>
        )}
        {returnContainer}
      </View>
    );
  };

  if (isImageBackground) {
    return (
      <ImageBackground
        source={require('../assets/images/splash-img.png')}
        style={{flex: 1}}
        imageStyle={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>{headerComponent()}</SafeAreaView>
      </ImageBackground>
    );
  }

  return (
    <SafeAreaView style={[globalStyles.container]}>
      <View>{headerComponent()}</View>
    </SafeAreaView>
  );
};

export default ContainersComponent;
