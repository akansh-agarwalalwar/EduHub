import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icons2 from 'react-native-vector-icons/AntDesign';
const AppleIcon = () => {
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
      <Icons2 name='apple1' size={20} />
    </View>
    
  );
};

export default AppleIcon;

const styles = StyleSheet.create({});
