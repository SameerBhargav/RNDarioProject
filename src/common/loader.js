import React from 'react';
import {Modal, ActivityIndicator, View} from 'react-native';

const Loader = ({propsSize, visible}) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      onRequestClose={() => {}}
      transparent>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.50)',
          position: 'relative',
          flex: 1,
          justifyContent: 'center',
        }}>
        <ActivityIndicator size={'large'} color={'#00ffbf'} />
      </View>
    </Modal>
  );
};

export default Loader;
