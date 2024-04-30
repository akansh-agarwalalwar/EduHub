import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Icons from 'react-native-vector-icons/AntDesign';
import Icons2 from 'react-native-vector-icons/FontAwesome5';
import {InputFieldStyle} from '../Vector-Components/InputField';
import BigSignIn from '../Vector-Components/BigSignIn';
import {Dropdown} from 'react-native-element-dropdown';

const data = [
  {label: 'Male', value: '1'},
  {label: 'Female', value: '2'},
  {label: 'Prefer Not To Say', value: '3'},
];

const FillYourProfile = props => {
  const [value, setValue] = useState(null);

  return (
    <View style={{backgroundColor: '#F5F9FF'}}>
      <View style={{marginHorizontal: 30, marginTop: 30}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Pressable onPress={() => props.navigation.goBack()}>
            <Icons
              name="arrowleft"
              style={{height: 30, width: 25, alignItems: 'center'}}
              size={28}
            />
          </Pressable>
          <Text
            style={{
              color: '#202244',
              fontSize: 21,
              fontWeight: '700',
              fontFamily: 'Jost',
              marginHorizontal: 15,
            }}>
            Fill Your Profile
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Icons2
            name="user-circle"
            size={100}
            style={{height: 100, width: 100}}
          />
        </View>
        <View>
          <View style={styles.input_box}>
            <TextInput
              placeholder="Name"
              style={InputFieldStyle.input_field_text}
            />
          </View>
          <View style={styles.input_box}>
            <TextInput
              placeholder="Nick Name"
              style={InputFieldStyle.input_field_text}
            />
          </View>
          <View style={styles.input_box}>
            <TextInput
              placeholder="Date-Of-Birth"
              style={InputFieldStyle.input_field_text}
            />
          </View>
          <View style={styles.input_box}>
            <TextInput
              placeholder="Email"
              style={InputFieldStyle.input_field_text}
            />
          </View>
          <View style={styles.input_box}>
            <TextInput
              placeholder="Name"
              style={InputFieldStyle.input_field_text}
            />
          </View>
          <View style={styles.input_box}>
            <Dropdown
              style={styles.dropdown}
              data={data}
              labelField="label"
              valueField="value"
              placeholder="Gender"
              value={value}
              onChange={item => {
                setValue(item.value);
              }}
            />
          </View>
        </View>
        <View>
          <Pressable>
            <BigSignIn title="Continue" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default FillYourProfile;

const styles = StyleSheet.create({
  input_box: {
    backgroundColor: '#FFF',
    width: 360,
    height: 60,
    marginTop: 20,
    borderRadius: 15,
    flexDirection: 'row',
  },
  dropdown: {
    margin: 16,
    width: 330,
    marginLeft: 20,
    fontSize: 14,
    color: '#505050',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
