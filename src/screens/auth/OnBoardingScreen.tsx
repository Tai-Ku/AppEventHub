import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../../styles/globalStyles';
import Swiper from 'react-native-swiper';
import {appInfo} from '../../constans/appInfo';
import {appColors} from '../../constans/appColors';

type IProps = {
  navigation?: any;
};

const OnBoardingScreen: React.FC<IProps> = ({navigation}) => {
  const [index, setIndex] = useState(0);

  return (
    <View style={[globalStyles.container]}>
      <Swiper
        index={index}
        loop={false}
        onIndexChanged={setIndex}
        activeDotColor={appColors.white}>
        <Image
          source={require('../../assets/images/onboarding-1.png')}
          style={{
            flex: 1,
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
            resizeMode: 'contain',
          }}
        />
        <Image
          source={require('../../assets/images/onboarding-2.png')}
          style={{
            flex: 1,
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
            resizeMode: 'contain',
          }}
        />
        <Image
          source={require('../../assets/images/onboarding-3.png')}
          style={{
            flex: 1,
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
            resizeMode: 'contain',
          }}
        />
      </Swiper>
      <View
        style={{
          paddingHorizontal: appInfo.sizes.WIDTH * 0.1,
          paddingVertical: appInfo.sizes.HEIGHT * 0.03,
          bottom: 0,
          right: 0,
          left: 0,
          position: 'absolute',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={[styles.text, {color: appColors.gray2}]}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            index < 2
              ? setIndex(prev => ++prev)
              : navigation.navigate('LoginScreen')
          }>
          <Text style={[styles.text]}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  text: {
    color: appColors.white,
    fontSize: 20,
    fontWeight: '500',
  },
});
