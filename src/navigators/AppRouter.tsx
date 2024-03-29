import React, {useEffect} from 'react';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {addAuth, authSelector} from '../redux/reducers/authReducer';

const AppRouter = () => {
  const {getItem} = useAsyncStorage('auth');

  const auth = useSelector(authSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const dataUserStorage = await getItem();
    dataUserStorage && dispatch(addAuth(JSON.parse(dataUserStorage)));
  };

  return <>{auth.accessToken ? <MainNavigator /> : <AuthNavigator />}</>;
};

export default AppRouter;
