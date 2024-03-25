import {View, Text} from 'react-native';
import React from 'react';
import {ButtonComponent} from '../../components';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/reducers/authReducer';

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>HomeScreen</Text>
      <View>
        <ButtonComponent
          text="LogOut"
          onPress={() => dispatch(logout({}))}
          type="primary"
        />
      </View>
    </View>
  );
};

export default HomeScreen;
