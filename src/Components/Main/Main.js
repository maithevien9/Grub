import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import icNotify from '../../Images/Icons/notification.png';
import icNotify2 from '../../Images/Icons/notification2.png';
import icHome from '../../Images/Icons/home2.png';
import icHome2 from '../../Images/Icons/home.png';
import icNote from '../../Images/Icons/note.png';
import icNote2 from '../../Images/Icons/note2.png';
import QA from '../../Images/Icons/qa.png';
import QA2 from '../../Images/Icons/qa2.png';
import User from '../../Images/Icons/profile-user2.png';
import User2 from '../../Images/Icons/profile-user.png';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Notify from './Notify/NotifyView';
import Cart from './Cart/Cart';
import ContactMain from './Contact/Contact';
import GetInforUser from '../../RestAPI/User/get-infor-user';
import {connect} from 'react-redux';
import NotifyAPI from '../../RestAPI/Notify/get-notify-api';
import {useTranslation} from 'react-i18next';
import SaveDataCart from '../../AsyncStorage/SaveDataCart';
import GetNotify from '../../RestAPI/Notify/get-notify-api';
import {setdataNotify} from '../../Redux/ActionCreators';
import Geolocation from 'react-native-geolocation-service';
import {setInforUser} from '../../Redux/ActionCreators';

import {PermissionsAndroid} from 'react-native';

const Main = (props) => {
  const [selectedTab, setSelectedTab] = React.useState('home');
  const {t, i18n} = useTranslation();
  const [location, setLocation] = useState();

  useEffect(() => {
    SaveDataCart(props.Cart);
    GetNotify(props.dataLogin.token)
      .then((json) => {
        var dataNotify = JSON.parse(JSON.stringify(json));
        props.setdataNotify(dataNotify.data);
      })
      .catch((error) => {
        console.error(error + 'fail');
      });
  });

  const getLocal = async () => {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    Geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;

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

  useEffect(() => {
    async function getDataLogin() {
      GetInforUser(props.dataLogin.token)
        .then((json) => {
          var InforUser = JSON.parse(JSON.stringify(json));
          console.log({data: InforUser.data[0]});
          props.setInforUser(InforUser.data[0]);
        })
        .catch((error) => {
          console.error(error + 'fail');
        });
    }
    getLocal();
    getDataLogin();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.dataLogin.token]);

  const HandleSelectContact = () => {
    setSelectedTab('Contact');
  };

  const HandleSelectNotify = () => {
    setSelectedTab('Notify');
  };
  const HandleSelectCart = () => {
    setSelectedTab('Cart');
  };
  return (
    <TabNavigator tabBarStyle={{height: 53}}>
      <TabNavigator.Item
        selected={selectedTab === 'home'}
        title={t('Home')}
        titleStyle={styles.tabTitle}
        renderIcon={() => <Image source={icHome} style={styles.wrapperImage} />}
        renderSelectedIcon={() => (
          <Image source={icHome2} style={styles.wrapperImage} />
        )}
        onPress={() => setSelectedTab('home')}>
        <Home />
      </TabNavigator.Item>
      <TabNavigator.Item
        selected={selectedTab === 'Cart'}
        title={t('Cart')}
        titleStyle={styles.tabTitle}
        badgeText={props.Cart.length}
        renderIcon={() => (
          <Image source={icNotify} style={styles.wrapperImage} />
        )}
        renderSelectedIcon={() => (
          <Image source={icNotify2} style={styles.wrapperImage} />
        )}
        onPress={() => {
          HandleSelectCart();
        }}>
        <Cart />
      </TabNavigator.Item>
      <TabNavigator.Item
        selected={selectedTab === 'Notify'}
        title={t('Notifi')}
        titleStyle={styles.tabTitle}
        renderIcon={() => (
          <Image source={icNote2} style={styles.wrapperImage} />
        )}
        renderSelectedIcon={() => (
          <Image source={icNote} style={styles.wrapperImage} />
        )}
        onPress={() => {
          HandleSelectNotify();
        }}>
        <Notify />
      </TabNavigator.Item>
      <TabNavigator.Item
        selected={selectedTab === 'Contact'}
        title={t('Contact')}
        titleStyle={styles.tabTitle}
        renderIcon={() => <Image source={User2} style={styles.wrapperImage} />}
        renderSelectedIcon={() => (
          <Image source={User} style={styles.wrapperImage} />
        )}
        onPress={() => HandleSelectContact()}>
        <ContactMain />
      </TabNavigator.Item>
    </TabNavigator>
  );
};
const styles = StyleSheet.create({
  wrapperImage: {height: 23, width: 23},
  tabTitle: {
    fontSize: 10,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
});
function mapStateToProps(state) {
  return {
    dataLogin: state.dataLogin,
    Cart: state.Cart,
  };
}
export default connect(mapStateToProps, {setdataNotify, setInforUser})(Main);
