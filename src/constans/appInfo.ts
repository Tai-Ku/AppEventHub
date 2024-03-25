import {Dimensions} from 'react-native';

//Dimensions sẽ lấy chiều rộng và chiều cao của màn hình thiết bị,
export const appInfo = {
  sizes: {
    WIDTH: Dimensions.get('window').width,
    HEIGHT: Dimensions.get('window').height,
  },
  BASE_URL: 'http://192.168.1.78:5000/api',
};
