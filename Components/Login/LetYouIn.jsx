import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icons2 from 'react-native-vector-icons/AntDesign';
import GoogleIcon from '../Vector-Components/GoogleIcon';
import AppleIcon from '../Vector-Components/AppleIcon';
import GetStartedArrow from '../Vector-Components/GetStartedArrow';

const LetYouIn = (props) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#F5F9FF',
        gap: 20,
      }}>
      <View style={{flex: 0.1}}>
        <Text
          style={{
            color: '#202244',
            fontFamily: 'Jost',
            fontSize: 24,
            fontWeight: 'bold',
          }}>
          Let's You In
        </Text>
        <View style={{flexDirection: 'column'}}>
          <View style={[styles.icons_design]}>
            <GoogleIcon />
            <Text style={styles.icons_text}>Continue With Google</Text>
          </View>
          <View style={[styles.icons_design]}>
            <AppleIcon />

            <Text style={styles.icons_text}>Continue With Apple</Text>
          </View>
        </View>
        <View style={{top: 90}}>
          <Text
            style={{
              color: '#545454',
              fontSize: 15,
              fontWeight: '800',
              textAlign: 'center',
            }}>
            ( Or )
          </Text>
          <View style={{top: 20}}>
            <GetStartedArrow title="Sign In" />
          </View>
          <View
            style={{
              top: 40,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.sign_up}>Don't Have An Account? </Text>
            <Pressable
              onPress={() => props.navigation.navigate('Getting Started')}>
              <Text style={{color: '#3AD3CD', textDecorationLine: 'underline'}}>
                SIGN UP
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LetYouIn;

const styles = StyleSheet.create({
  icons_design: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    gap: 10,
  },
  icons_text: {
    color: '#545454',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.2,
  },
  sign_up: {
    color: '#545454',
    textAlign: 'center',
  },
});
