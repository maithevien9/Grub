import React, { Component, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';

import icMenu from '../../../../Images/Icons/menu2.png';
import icVn from '../../../../Images/Icons/vietnam.png';
import icVn2 from '../../../../Images/Icons/vietnam2.png';
import icUSA from '../../../../Images/Icons/usa.png';
import icUSA2 from '../../../../Images/Icons/usa2.png';
import icTranslate from '../../../../Images/Icons/translate.png';
import { useTranslation } from 'react-i18next';
const { height } = Dimensions.get('window');

const Header = (props) => {
  const [valueLanguege, setValueLanguege] = useState(false);
  const { t, i18n } = useTranslation();
  const HandleChangeLanguage = () => {
    Alert.alert(
      `${t('Notifi')}`,
      `${t('SeLectLanguage')}`,
      [
        {
          text: 'English',
          onPress: () => i18n.changeLanguage('en'),
          style: 'cancel',
        },
        {
          text: 'Việt Nam',
          onPress: () => i18n.changeLanguage('vn'),
        },
      ],
      { cancelable: false },
    );
  };
  return (
    <View
      style={{
        height: 80,
        backgroundColor: '#009966',
        padding: 13,
      }}>
      <View style={styles.wrapper1}>
        <TouchableOpacity
          onPress={props.onOpen}
          style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image source={icMenu} style={styles.iconStyle}></Image>
        </TouchableOpacity>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.textStyle}>Etech Dream</Text>
        </View>
        <TouchableOpacity
          style={styles.wrapperWrong}
          onPress={HandleChangeLanguage}>
          <Image source={icTranslate} style={styles.iconLanguege} />
        </TouchableOpacity>
      </View>
      {/* <View style={styles.wrapper2}>
          <TextInput
            style={styles.textInput}
            placeholder="Search"
            onChangeText={(text) => this.setState({text})}
          />
        </View> */}
    </View>
  );
};
export default Header;
const styles = StyleSheet.create({
  text: {
    borderWidth: 1,
    paddingHorizontal: 5,
    backgroundColor: 'white',
    height: 35,
    paddingVertical: 6,
    borderColor: '#808080',
  },
  iconStyle: {
    width: 22,
    height: 22,
  },
  iconLanguege: {
    width: 30,
    height: 25,
    borderRadius: 5,
  },

  textInput: {
    marginTop: 10,
    height: 35,
    width: 370,
    backgroundColor: 'white',
    borderColor: '#808080',
    borderWidth: 1,
    paddingLeft: 20,
    fontSize: 13,
    borderRadius: 10,
  },
  wrapper1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',

    alignItems: 'center',
  },
  wrapper2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 30,
    fontFamily: 'Roboto',
    color: 'white',
    fontWeight: 'bold',
  },
  wrapperWrong: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '2%',
    width: 35,
    height: 35,
  },
  textStyleHeader: {
    fontSize: 28,
    fontFamily: 'Roboto',
    color: 'white',
  },
});
