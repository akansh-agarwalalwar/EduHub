import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icons from 'react-native-vector-icons/AntDesign';
import Icons2 from 'react-native-vector-icons/FontAwesome5';
import {InputFieldStyle} from '../Vector-Components/InputField';
import BigSignIn from '../Vector-Components/BigSignIn';
// import {DatePickerAndroid} from '@react-native-community/datetimepicker';
import {Dropdown} from 'react-native-element-dropdown';
import DateIcon from 'react-native-vector-icons/Fontisto';
import EmailIcon from 'react-native-vector-icons/Fontisto';
// import { openDataBase } from 'react-native-sqlite-storage';
// // SQLite.enablePromise(true);

//  let db = openDataBase('EDUHUB.db');
const data = [
  {label: 'Male', value: '1'},
  {label: 'Female', value: '2'},
  {label: 'Prefer Not To Say', value: '3'},
];

const numbers_data = [
  {label: '(+1) US', value: 1},
  {label: '(+91) IND', value: 2},
];

const FillYourProfile = (props,{}) => {
  const [value, setValue] = useState(null);
  const [countryCode, setCountryCode] = useState('IND');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [date, setDate] = useState(null);

  // const openDatePicker = async () => {
  //   try {
  //     const {action, year, month, day} = await DatePickerAndroid.open({
  //       date: new Date(),
  //       mode: 'spinner', // you can also use 'calendar' or 'default'
  //     });
  //     if (action !== DatePickerAndroid.dismissedAction) {
  //       // Selected year, month (0-11), day
  //       const selectedDate = new Date(year, month, day);
  //       setDate(selectedDate);
  //     }
  //   } catch ({code, message}) {
  //     console.warn('Cannot open date picker', message);
  //   }
  // };

  // useEffect(() => {
  //   userTable();
  // }, [])
  

  // const userTable = ()=> {
  //   db.transaction(txn => {
  //     txn.executeSql(
  //       'CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY AUTOINCREAMENT, name VARCHAR(20)) ',
  //       [],
  //       (sqlTxn,res)=>{
  //         console.log("table created succesfully")
  //       },
  //       error => {
  //         console.log("error on creating database"+ error.message)
  //       }
  //     )
  //   })
  // }
  
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
            <TextInput placeholder="Name" style={styles.input_field_text} />
          </View>
          <View style={styles.input_box}>
            <TextInput
              placeholder="Nick Name"
              style={styles.input_field_text}
            />
          </View>
          <View style={styles.input_box}>
            {/* <Button title="Select Date" onPress={openDatePicker} />
            {date && (
              <Text style={styles.dateText}>
                Selected Date: {date.toLocaleDateString()}
              </Text>
            )} */}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 20,
              }}>
              <DateIcon name="date" size={25} />
              <Text style={{marginLeft: 5, fontSize: 15, color: '#505050'}}>
                Date-Of-Birth
              </Text>
            </View>
          </View>
          <View style={styles.input_box}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 20,
              }}>
              <EmailIcon name="email" size={25} />
              <TextInput
                placeholder="Email"
                keyboardType="email-address"
                style={{
                  marginLeft: 5,
                  fontSize: 15,
                  color: '#505050',
                  fontWeight: '700',
                }}
              />
            </View>
          </View>
          <View style={styles.input_box}>
            <Dropdown
              countryCode={countryCode}
              style={styles.dropdown_numbers}
              data={numbers_data}
              labelField="label"
              valueField="value"
              placeholder="(+91) IND"
              value={value}
              onChange={item => {
                setValue(item.value);
              }}
            />
            <TextInput
              phoneNumber={phoneNumber}
              placeholder="XXX-XXX-XXXX"
              keyboardType="phone-pad"
              style={styles.input_field_text_phone}
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
  dropdown_numbers: {
    margin: 16,
    width: 110,
    marginLeft: 20,
    fontSize: 14,
    color: '#505050',
  },
  input_field_text_phone: {
    fontSize: 15,
    color: '#505050',
    fontWeight: '700',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    marginTop: 20,
    fontSize: 18,
  },
  input_field_text: {
    marginLeft: 20,
    fontSize: 15,
    color: '#505050',
    fontWeight: '700',
    width: 120,
  },
});
