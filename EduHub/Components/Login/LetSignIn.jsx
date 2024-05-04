import {Image, StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/Feather';
import {useState} from 'react';
import BigSignIn from '../Vector-Components/BigSignIn';
import GoogleIcon from '../Vector-Components/GoogleIcon';
import AppleIcon from '../Vector-Components/AppleIcon';
const LetSignIn = (props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={{backgroundColor: '#F5F9FF', flex: 1}}>
      <View style={{marginHorizontal: 30, marginTop: 30}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../Images/LOGO.jpg')}
            style={{height: 170, width: 280}}
          />
        </View>
        <View style={{marginTop:15}}>
          <Text
            style={{
              color: '#202244',
              fontSize: 30,
              fontWeight: '600',
              fontStyle: 'normal',
            }}>
            Let's Sign In.!
          </Text>
          <Text style={{color: '#545454', fontSize: 16}}>
            Login to Your Account to Continue your Courses
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
          <View>
            <CheckBox
              disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
          </View>
          <View>
            <Text style={styles.checkbox_align_text}>Remember Me</Text>
          </View>
          <View style={{right: 0, position: 'absolute'}}>
            <Text style={styles.checkbox_align_text}>Forgot Password?</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={()=> props.navigation.navigate('Home Page')}>
          <BigSignIn title='Sign In '/>
          </TouchableOpacity>
        </View>
        <View style={{alignItems:'center', marginTop:30}}>
          <Text>Or Continue With</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center', marginTop:30, justifyContent:'space-between', marginHorizontal:120}}>
          <View>
            <GoogleIcon/>
          </View>
          <View>
            <AppleIcon/>
          </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center', marginTop:15}}>
          <Text>Don't Have An Account? </Text>
          <Pressable onPress={() => props.navigation.navigate('SignUp')}>
  
          <Text style={{color: '#3AD3CD', textDecorationLine: 'underline'}}>
                SIGN UP
              </Text>
              </Pressable>
        </View>
      </View>
    </View>
  );
};

export default LetSignIn;

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
  checkbox_align_text: {
    fontSize: 15,
    color: '#545454',
    fontWeight: '700',
  },
});
