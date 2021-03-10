import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import {useNavigation} from '@react-navigation/native';
import CheckToken from '../../RestAPI/User/check-token';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';
import {setDataLogin, setCart} from '../../Redux/ActionCreators';
const Loading = (props) => {
  const [selectedTab, setSelectedTab] = React.useState('Home');
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      async function getDataLogin() {
        var valueCart = await AsyncStorage.getItem('@saveCart');
        valueCart = JSON.parse(valueCart);
        if (valueCart) {
          props.setCart(valueCart);
        } else {
          props.setCart([]);
        }

        var value = await AsyncStorage.getItem('@save');
        value = JSON.parse(value);
        if (value) {
          props.setDataLogin(value);

          if (value.token !== '') {
            CheckToken(value.token)
              .then((json) => {
                var data = JSON.parse(JSON.stringify(json));
                if (data.dataString === 'THANH_CONG') {
                  navigation.replace('SelectRole');
                } else {
                  navigation.replace('Authenication');
                }
              })
              .catch((error) => {
                console.error(error + 'fail');
              });
          } else {
            navigation.replace('Authenication');
          }
        } else {
          navigation.replace('Authenication');
        }
      }
      getDataLogin();
    }, 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.StyleText}>ETECH DREAM TEAM</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#009966',
    alignItems: 'center',
    justifyContent: 'center',
  },
  StyleText: {
    color: 'white',
    fontSize: 29,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
});

function mapStateToProps(state) {
  return {
    dataLogin: state.dataLogin,
  };
}
export default connect(mapStateToProps, {setDataLogin, setCart})(Loading);
