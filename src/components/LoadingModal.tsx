import {View, Text, Modal, ActivityIndicator} from 'react-native';
import React from 'react';
import {globalStyles} from '../styles/globalStyles';
import {TextComponent} from '.';
import {appColors} from '../constans/appColors';

interface Props {
  visible: boolean;
  mess?: string;
  onClose?: () => void;
}

const LoadingModal: React.FC<Props> = ({visible, onClose, mess}) => {
  return (
    <Modal
      style={[{flex: 1}]}
      transparent
      statusBarTranslucent
      visible={visible}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size={32} />
        <TextComponent text="loading ...." flex={0} color={appColors.white} />
      </View>
    </Modal>
  );
};

export default LoadingModal;
