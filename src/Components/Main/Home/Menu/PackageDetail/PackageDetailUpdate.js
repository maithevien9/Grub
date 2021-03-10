import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import imageRecy from '../../../../../Images/Icons/recycle.png';
import {Dimensions} from 'react-native';
import ChangeStatusRecyAPI from '../../../../../RestAPI/Recyclables/change-status-api';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {connect} from 'react-redux';
import CreateNotifyAPI from '../../../../../RestAPI/Notify/create-notify-api';
const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;
const PackageDetailUpdate = (props) => {
  const {t, i18n} = useTranslation();
  const route = useRoute();
  const navigation = useNavigation();

  const handleChangeStatusRecy = () => {
    ChangeStatusRecyAPI(route.params.IDRecy)
      .then((json) => {
        var data = JSON.parse(JSON.stringify(json));

        if (data.dataString === 'THANH_CONG') {
          CreateNotifyAPI(
            props.dataLogin.token,
            'Gói hàng',
            'Gói hàng đã bán thành công',
          )
            .then((json) => {})
            .catch((error) => {
              console.error(error);
            });
          Alert.alert(
            `${t('Notifi')}`,
            `${t('Success')}`,
            [{text: `${t('confirm')}`}],
            {
              cancelable: false,
            },
          );
          navigation.replace('Main');
        } else {
        }
      })
      .catch((error) => {
        console.error(error + 'fail');
      });
  };
  return (
    <View style={styles.wrapperMain}>
      <View style={styles.wrapperHeader}>
        <Text style={styles.textStyleHeader}>{t('PackageDetail')}</Text>
      </View>
      <ScrollView style={styles.wrapperContent}>
        {props.PackageDetail.map((e) => (
          <View style={styles.wrapperMainCart} key={e.NameProduct}>
            <View style={styles.wrapperinLine}>
              <Image source={imageRecy} style={styles.wrapperImage} />
              <View style={styles.wrapperText}>
                <View style={styles.wrapperinLine2}>
                  <Text style={styles.stylesText}>{e.NameProduct}</Text>
                </View>
                <Text style={styles.stylesText}>
                  {t('Amount')}: {e.amount}
                  {/* {e.Unit.slice(2, 10)} */}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.wrapperBtn}
        onPress={handleChangeStatusRecy}>
        <Text style={styles.TextSubmit}> {t('ConfirmedSold')}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  wrapperHeader: {
    height: (windowHeight * 1) / 10,
    width: '100%',
    backgroundColor: '#009966',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperContent: {
    height: (windowHeight * 7) / 10,
  },
  textStyleHeader: {
    fontSize: 30,
    fontFamily: 'Roboto',
    color: 'white',
    fontWeight: 'bold',
  },
  TextBtnX: {
    color: '#009966',
    fontSize: 13,
    fontFamily: 'Roboto',

    fontWeight: 'bold',
  },
  wrapperBtn: {
    marginTop: '10%',
    height: (windowHeight * 0.7) / 10,
    width: '90%',
    marginLeft: '5%',
    backgroundColor: '#009966',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 17,
    marginBottom: (windowHeight * 0.2) / 10,
  },
  wrapperMain: {
    width: '100%',
    height: '100%',
  },
  wrapperMainCart: {
    width: '90%',
    marginLeft: '5%',
    borderBottomWidth: 1,
    marginTop: '3%',
    paddingBottom: '4%',
  },
  wrapperImage: {
    marginTop: '5%',
    height: 35,
    width: 35,
  },
  wrapperinLine: {
    flexDirection: 'row',
    marginLeft: '2%',
    alignItems: 'center',
  },
  wrapperinLine2: {
    flexDirection: 'row',
  },
  wrapperText: {
    marginLeft: '6%',
    marginTop: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stylesText: {
    width: windowWidth / 1.4,
    fontSize: 13,
    fontFamily: 'Roboto',
  },
  TextSubmit: {
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: 'white',
  },
});

function mapStateToProps(state) {
  return {
    dataLogin: state.dataLogin,
    InforUser: state.InforUser,
    dataCheckLocal: state.dataCheckLocal,
    Cart: state.Cart,
    PackageDetail: state.PackageDetail,
  };
}
export default connect(mapStateToProps)(PackageDetailUpdate);
