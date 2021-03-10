import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import registerAPI from '../../RestAPI/User/register-api';
import { useTranslation } from 'react-i18next';
const FormRegister = (props) => {
  const [user, setuser] = useState('');
  const [mk, setmk] = useState('');
  const [mk2, setmk2] = useState('');
  const { t } = useTranslation();
  const HandleRegister = () => {
    if (mk === mk2 && user !== '' && mk !== '') {
      registerAPI(user, mk)
        .then((json) => {
          var Data = json;
          if (Data.dataString === 'THANH_CONG') {
            Alert.alert(
              `${t('Notifi')}`,
              `${t('Success')}`,
              [
                {
                  text: `${t('confirm')}`,
                  onPress: () => console.log('OK Pressed'),
                },
              ],
              { cancelable: false },
            );
          } else {
            Alert.alert(
              `${t('Notifi')}`,
              `${t('UnsuccessfulPleaseReEnter')}`,
              [
                {
                  text: `${t('confirm')}`,
                  onPress: () => console.log('OK Pressed'),
                },
              ],
              { cancelable: false },
            );
          }
        })
        .catch((error) => {
          console.error(error + 'fail');
        });
    } else {
      Alert.alert(
        `${t('Notifi')}`,
        `${t('PleaseEnterTheInformation')}`,
        [{ text: `${t('confirm')}`, onPress: () => console.log('OK Pressed') }],
        { cancelable: false },
      );
    }
  };
  return (
    <View style={styles.wrapperInput}>
      <TextInput
        style={styles.textInput}
        placeholder={t('UserName')}
        onChangeText={(text) => setuser(text)}
        value={user}
      />

      <TextInput
        style={styles.textInput}
        placeholder={t('PassWord')}
        onChangeText={(text) => setmk(text)}
        value={mk}
        secureTextEntry
      />
      <TextInput
        style={styles.textInput}
        placeholder={t('ReEnterPass')}
        onChangeText={(text) => setmk2(text)}
        value={mk2}
        secureTextEntry
      />
      <TouchableOpacity style={styles.Button} onPress={HandleRegister}>
        <Text style={styles.Text2}>{t('SignUp')}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default FormRegister;

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 10,
    flex: 1,
    backgroundColor: '#088A68',
  },
  wrapperInput: {
    height: 300,
    alignItems: 'center',
    paddingTop: 100,
  },

  textInput: {
    height: 55,
    width: 366,
    backgroundColor: 'white',
    borderColor: 'black',
    paddingLeft: 20,
    marginBottom: 15,
    borderRadius: 30,
  },

  Button: {
    height: 60,
    width: 366,
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    marginTop: 65,
  },
  Text: {
    color: '#BDBDBD',
  },
  Text2: {
    color: '#009966',
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
});
