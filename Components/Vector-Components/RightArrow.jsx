import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/FontAwesome';
import Icons2 from 'react-native-vector-icons/AntDesign';
const RightArrow = () => {
  return (
    <View style={styles.arrowIcon}>
      <Icons2 name="arrowright" size={40} color={'white'} />
    </View>
  );
};

export default RightArrow;

const styles = StyleSheet.create({
  arrowIcon: {
    backgroundColor: '#3AD3CD',
    borderRadius: 30,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
