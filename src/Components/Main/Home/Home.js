import React, {Component, useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Drawer from 'react-native-drawer';

import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import HomeView from './HomeView';
import SaveDataLogin from '../../../AsyncStorage/SaveDataLogin';
import {LogBox} from 'react-native';
import GetHistoryRecyclablesAPI from '../../../RestAPI/Recyclables/get-history-recyclables';
import {useTranslation} from 'react-i18next';
import {setHistoryReducer} from '../../../Redux/ActionCreators';

import Geolocation from 'react-native-geolocation-service';
import {PermissionsAndroid} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
const Home = (props) => {
  const [value, setvalue] = React.useState();
  const navigation = useNavigation();
  const [location, setLocation] = useState();
  const [checkLocal, setCheckLocal] = useState(true);
  const {dataCheckLoginSuccess} = props;
  const {t} = useTranslation();

  useEffect(() => {
    getLocal();
    // eslint-disable-next-line prettier/prettier
  }, []);

  const closeControlPanel = () => {
    value.close();
  };
  const openControlPanel = () => {
    value.open();
  };
  const [dataUser, setDataUser] = useState({});

  const HandlerLogOut = () => {
    SaveDataLogin('');
    navigation.replace('Authenication');
  };
  const handleSelectRoleMenu = () => {
    navigation.navigate('Main2', {location, checkLocal});
  };
  const HandleWaitForPackageBrowsing = () => {
    GetHistoryRecyclablesAPI(props.dataLogin.token, 1)
      .then((json) => {
        var dataCartHistory = JSON.parse(JSON.stringify(json));
        if (dataCartHistory.dataString === 'THANH_CONG') {
          props.setHistoryReducer(dataCartHistory.data);
          navigation.navigate('WaitForPackageBrowsing');
        } else {
        }
      })
      .catch((error) => {
        console.error(error + 'fail');
      });
  };
  const HandlePackageOnSale = () => {
    GetHistoryRecyclablesAPI(props.dataLogin.token, 2)
      .then((json) => {
        var dataCartHistory = JSON.parse(JSON.stringify(json));
        if (dataCartHistory.dataString === 'THANH_CONG') {
          props.setHistoryReducer(dataCartHistory.data);
          navigation.navigate('PackageOnSale');
        } else {
        }
      })
      .catch((error) => {
        console.error(error + 'fail');
      });
  };
  const HandlePackageSaled = () => {
    GetHistoryRecyclablesAPI(props.dataLogin.token, 3)
      .then((json) => {
        var dataCartHistory = JSON.parse(JSON.stringify(json));
        if (dataCartHistory.dataString === 'THANH_CONG') {
          props.setHistoryReducer(dataCartHistory.data);
          navigation.navigate('PackageSaled');
        } else {
        }
      })
      .catch((error) => {
        console.error(error + 'fail');
      });
  };

  const getLocal = async () => {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    Geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
      
        setCheckLocal(false);
        setLocation({
          latitude,
          longitude,
        });
      },
      (error) => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };
  return (
    <View style={{flex: 1}}>
      <Drawer
        type="overlay"
        tweenHandler={(ratio) => ({
          main: {opacity: (2 - ratio) / 2},
        })}
        openDrawerOffset={0.1}
        tapToClose={true}
        ref={(ref) => setvalue(ref)}
        content={
          <View style={styles.wrapper}>
            <View style={{height: 50}} />

            <TouchableOpacity
              style={styles.WrapperBtnLogOut}
              onPress={HandleWaitForPackageBrowsing}>
              <Text style={styles.StyleTextBtn}>{t('RigisterRecy')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.WrapperBtnLogOut}
              onPress={HandlePackageOnSale}>
              <Text style={styles.StyleTextBtn}>{t('packageOnSale')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.WrapperBtnLogOut}
              onPress={HandlePackageSaled}>
              <Text style={styles.StyleTextBtn}>{t('packageSaled')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.WrapperBtnLogOut}
              onPress={handleSelectRoleMenu}>
              <Text style={styles.StyleTextBtn}>{t('SelectRoleMenu2')}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.WrapperBtnLogOut2}
              onPress={HandlerLogOut}>
              <Text style={styles.StyleTextBtn}>{t('LogOut')}</Text>
            </TouchableOpacity>
          </View>
        }>
        <HomeView open={openControlPanel.bind(this)} />
      </Drawer>
    </View>
  );
};
function mapStateToProps(state) {
  return {
    dataCheckLoginSuccess: state.dataCheckLoginSuccess,
    dataLogin: state.dataLogin,
    historyGift: state.historyGift,
  };
}
export default connect(mapStateToProps, {setHistoryReducer})(Home);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#009966',
    borderRightWidth: 4,
    borderColor: 'white',
    alignItems: 'center',
    paddingTop: 30,
  },
  ImageStyle: {
    height: 150,
    width: 150,
    borderRadius: 50,
  },
  Button: {
    height: 50,
    width: 250,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    marginBottom: 20,
  },
  Text: {
    fontSize: 18,
    fontFamily: 'Roboto',
    color: '#088A68',
  },
  textUSer: {
    marginTop: 20,
    fontSize: 15,
    fontFamily: 'Roboto',
    color: 'black',
    paddingTop: 15,
    paddingBottom: 100,
  },
  WrapperBtnLogOut: {
    height: 60,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: 15,
  },
  WrapperBtnLogOut2: {
    height: 60,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    marginTop: '50%',
  },
  StyleTextBtn: {
    fontSize: 16,
    fontFamily: 'Roboto',
    color: 'black',

    fontWeight: 'bold',
  },
});
