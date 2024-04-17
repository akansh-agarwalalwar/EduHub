import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icons2 from 'react-native-vector-icons/AntDesign';
const GetStartedArrow = ({title, onPress, style}) => {
  return (
    // <View
    //   style={{
    //     backgroundColor: '#3AD3CD',
    //     width: 240,
    //     height: 60,
    //     alignItems: 'flex-end',
    //     borderRadius: 50,
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //   }}>
    //   <Text
    //     style={{
    //       fontFamily: 'Jost',
    //       fontSize: 28,
    //       color: '#FFF',
    //       fontWeight: '700',
    //       left: 15,
    //       bottom: 10,
    //     }}>
    //     Get Started
    //   </Text>
    //   <View style={styles.arrowIcon}>
    //     <Icons2 name="arrowright" size={40} color={'#3AD3CD'} />
    //   </View>
    // </View>
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
      <View
        style={{
          backgroundColor: '#FFF',
          alignItems: 'center',
          borderRadius: 30,
          marginRight: 10,
          height: 40,
          width: 50,
          justifyContent: 'center',
        }}>
        <Icons2
          name="arrowright"
          size={40}
          color={'#3AD3CD'}
          style={{alignItems: 'center', justifyContent: 'center'}}
        />
      </View>
    </TouchableOpacity>
  );
};

export default GetStartedArrow;

const styles = StyleSheet.create({
  arrowIcon: {
    backgroundColor: '#FFF',
    borderRadius: 30,
    height: 50,
    width: 50,

    justifyContent: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#3AD3CD',
    width: 240,
    height: 60,
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  buttonText: {
    fontFamily: 'Jost',
    fontSize: 28,
    color: '#FFF',
    fontWeight: '700',
    alignItems: 'center',
    left: 15,
    justifyContent: 'center',
  },
});
