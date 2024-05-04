import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/Feather';
import BigSignIn from '../Vector-Components/BigSignIn';
import GoogleIcon from '../Vector-Components/GoogleIcon';
import AppleIcon from '../Vector-Components/AppleIcon';
const SignUp = props => {
  return (
    <View style={{backgroundColor: '#F5F9FF', flex: 1}}>
      <View style={{marginHorizontal: 30, marginTop: 30}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../Images/LOGO.jpg')}
            style={{height: 170, width: 280}}
          />
        </View>
        <View style={{marginTop: 15}}>
          <Text
            style={{
              color: '#202244',
              fontSize: 30,
              fontWeight: '600',
              fontStyle: 'normal',
            }}>
            Getting Started..!
          </Text>
          <Text style={{color: '#545454', fontSize: 16}}>
            Create an Account to Continue your allCourses
          </Text>
        </View>
        <View style={{flexDirection: 'column', marginTop: 20}}>
          <View style={styles.input_box}>
            <Icon name="email" style={styles.icon_of_input} size={30} />
            <TextInput placeholder="Email" />
          </View>
          <View style={styles.input_box}>
            <Icon2 name="lock" style={styles.icon_of_input} size={28} />
            <TextInput placeholder="Password" />
          </View>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
          <Image source={require('../Images/terms_conditions.png')} />
          <Text
            style={{
              color: '#545454',
              fontSize: 13,
              fontWeight: '800',
              marginLeft: 5,
            }}>
            Agree to Terms & Conditions
          </Text>
        </View>
        <View>
          <Pressable onPress={() => props.navigation.navigate('Fill Your Profile')}>
          <BigSignIn title="Sign Up " />
          </Pressable>
        </View>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <Text>Or Continue With</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 30,
            justifyContent: 'space-between',
            marginHorizontal: 120,
          }}>
          <View>
            <GoogleIcon />
          </View>
          <View>
            <AppleIcon />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 15,
          }}>
          <Text>Already Have An Account? </Text>
          <Pressable onPress={() => props.navigation.navigate('SignIn')}>
            <Text style={{color: '#3AD3CD', textDecorationLine: 'underline'}}>
              Sign In
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  input_box: {
    backgroundColor: '#FFF',
    width: 360,
    height: 60,
    marginTop: 20,
    borderRadius: 15,
    flexDirection: 'row',
  },
  icon_of_input: {
    alignItems: 'center',
    height: 50,
    width: 40,
    marginLeft: 20,
    marginTop: 15,
  },
});
