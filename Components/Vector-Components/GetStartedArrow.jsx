import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/FontAwesome';
import Icons2 from 'react-native-vector-icons/AntDesign';
const GetStartedArrow = () => {
  return (
    <View
      style={{
        backgroundColor: '#3AD3CD',
        width: 240,
        height: 60,
        alignItems: 'flex-end',
        borderRadius:50, 
        flexDirection:'row',
        justifyContent:'space-between',
        
      }}>
        <Text>Get Started</Text>
      <View style={styles.arrowIcon}>
        <Icons2 name="arrowright" size={40} color={'#3AD3CD'} />
      </View>
    </View>
  );
};

export default GetStartedArrow;

const styles = StyleSheet.create({
  arrowIcon: {
    backgroundColor: '#FFF',
    borderRadius: 30,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:5
  },
});
