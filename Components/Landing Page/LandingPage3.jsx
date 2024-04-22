import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GetStartedArrow from '../Vector-Components/GetStartedArrow';
const LandingPage3 = props => {
  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 30,
        justifyContent: 'space-between',
        marginVertical: 30,
      }}>
      <View
        style={{
          justifyContent: 'flex-end',
        }}>
        <Pressable onPress={() => props.navigation.navigate('Let U In')}>
          <Text style={styles.skip_text}>Skip</Text>
        </Pressable>
      </View>
      <View>
        <View style={{marginBottom: 150}}>
          <View style={{alignItems: 'center'}}>
            <Text style={{color: '#202244', fontWeight: '700', fontSize: 24}}>
              Get Online Certificate
            </Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.online_training}>
              Analyse your scores and Track your results
            </Text>
            <Text style={([styles.online_training], {textAlign: 'center'})}>
              {/* Leactures.! */}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Image source={require('../Images/Slider3.png')} />
          </View>
          <View>
            <Pressable onPress={() => props.navigation.navigate('Let U In')}>
              <GetStartedArrow title="Get Started"/>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LandingPage3;

const styles = StyleSheet.create({
  skip_text: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    position: 'absolute',
    top: 20,
    right: 0,
    textDecorationLine: 'underline',
  },
  online_training: {
    color: '#545454',
    fontSize: 14,
  },
  arrowIcon: {
    backgroundColor: '#3AD3CD',
    borderRadius: 30,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
