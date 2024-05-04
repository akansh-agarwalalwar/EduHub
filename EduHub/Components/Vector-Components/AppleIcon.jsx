import {StyleSheet, Text, View,Image} from 'react-native';
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
        <Image source={require('../Images/appleicon.png')} />
    </View>
    
  );
};

export default AppleIcon;

const styles = StyleSheet.create({});
