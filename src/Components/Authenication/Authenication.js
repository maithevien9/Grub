import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FormLogin from './FormLogin';
import FormRegister from './FormRegister';
import {useTranslation} from 'react-i18next';
const {height} = Dimensions.get('window');
const Authentication = (props) => {
  const navigation = useNavigation();

  const [dataCheckLoginRe, setdataCheckLoginRe] = useState(true);
  const {t} = useTranslation();
  const main = dataCheckLoginRe ? <FormLogin /> : <FormRegister />;

  const handleSignUp = () => {
    setdataCheckLoginRe(false);
  };

  const handleSignIn = () => {
    setdataCheckLoginRe(true);
  };
  return (
    <View style={styles.wrapper}>
      <View
        style={{
          height: height / 8,
          backgroundColor: '#009966',
          padding: 13,
          marginTop: 10,
        }}>
        <View style={styles.wrapper1}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}></TouchableOpacity>
          <Text style={styles.textStyle}>ETECH DREAM</Text>
          <View style={styles.iconStyle}></View>
        </View>
        <View style={styles.wrapper2}></View>
      </View>
      {main}
      <View style={styles.wrapperSectionButton}>
        <TouchableOpacity style={styles.SectionButton} onPress={handleSignIn}>
          <Text style={dataCheckLoginRe ? styles.Text2 : styles.Text}>
            {t('SignIn')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SectionButton2} onPress={handleSignUp}>
          <Text style={!dataCheckLoginRe ? styles.Text2 : styles.Text}>
            {t('SignUp')}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Authentication;

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: '#009966',
    alignItems: 'center',
  },
  wrapperInput: {
    height: 300,
    alignItems: 'center',
    paddingTop: 100,
  },
  iconStyle: {
    width: 25,
    height: 25,
  },
  textInput: {
    height: 50,
    width: 366,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    paddingLeft: 20,
    marginBottom: 15,
    fontSize: 13,
    borderRadius: 25,
  },

  wrapper1: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  wrapper2: {
    flex: 1,
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 33,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: 'white',
  },
  Button: {
    height: 50,
    width: 366,
    backgroundColor: 'white',
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: '#BDBDBD',
    fontSize: 15,

    fontFamily: 'Roboto',
  },
  Text2: {
    color: '#009966',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  wrapperSectionButton: {
    paddingTop: 268,
    paddingLeft: 20,
    paddingRight: 20,

    flexDirection: 'row',
  },
  SectionButton: {
    height: 50,
    width: 180,
    backgroundColor: 'white',
    borderColor: '#808080',
    borderWidth: 1,
    borderTopLeftRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SectionButton2: {
    height: 50,
    width: 180,
    backgroundColor: 'white',
    borderColor: '#808080',
    borderWidth: 1,
    borderTopEndRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
