import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import Icons2 from 'react-native-vector-icons/AntDesign';
const GoogleIcon = () => {
  return (
    <View
      style={{
        height: 35,
        width: 35,
        backgroundColor: '#FFF',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Icons2 name="google" size={20} />
    </View>
  );
};

export default GoogleIcon;

const styles = StyleSheet.create({});
