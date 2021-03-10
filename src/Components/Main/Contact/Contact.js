import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import phoneIcon from '../../../Images/Icons/phone.png';
import mailIcon from '../../../Images/Icons/mail.png';
import messageIcon from '../../../Images/Icons/message.png';
import locationIcon from '../../../Images/Icons/location.png';

import MapView, {Marker} from 'react-native-maps';

import {useNavigation} from '@react-navigation/native';

import {YellowBox} from 'react-native';
import GetInforUser from '../../../RestAPI/User/get-infor-user';
import {connect} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {setInforUser} from '../../../Redux/ActionCreators';
const {width} = Dimensions.get('window');

const Contact = (props) => {
  const navigation = useNavigation();
  const {t, i18n} = useTranslation();
  const {
    mapContainer,
    wrapper,
    infoContainer,
    rowInfoContainer,
    textAddress,
    imageStyle,
    infoText,
    wrapperBtnlc,
    infoText2,
  } = styles;
  const [local, setlocal] = useState({});
  const [latitude, setlatitude] = useState(
    props.InforUser.X ? props.InforUser.X : 16.05458951827007,
  );
  const [longitude, setlongitude] = useState(
    props.InforUser.Y ? props.InforUser.Y : 108.20207062068158,
  );

  const handleUpdateUser = () => {
    navigation.navigate('ContactUpdate');
  };
  return (
    <View>
      <View style={styles.wrapperHeader}>
        <Text style={styles.textStyleHeader}>{t('Contact')}</Text>
      </View>
      <View style={mapContainer}>
        {props.InforUser.X ? (
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: props.InforUser.X,
              longitude: props.InforUser.Y,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            }}>
            <Marker
              coordinate={{
                latitude: props.InforUser.X,
                longitude: props.InforUser.Y,
              }}
              title={t('Address')}
              description={props.InforUser.Address}
            />
          </MapView>
        ) : (
          <Text>Vui lòng cập nhập địa chỉ</Text>
        )}
      </View>
      <View style={infoContainer}>
        <View style={rowInfoContainer}>
          <Image source={mailIcon} style={imageStyle} />
          <Text style={infoText}>
            {props.InforUser.Name ? props.InforUser.Name : ''}
          </Text>
        </View>
        <View style={rowInfoContainer}>
          <Image source={locationIcon} style={imageStyle} />
          <View style={textAddress}>
            <Text style={infoText}>
              {props.InforUser.Address ? props.InforUser.Address : ''}
            </Text>
          </View>
        </View>
        <View style={rowInfoContainer}>
          <Image source={phoneIcon} style={imageStyle} />
          <Text style={infoText}>
            {props.InforUser.Phone ? props.InforUser.Phone : ''}
          </Text>
        </View>

        {/* <View style={[rowInfoContainer, {borderBottomWidth: 0}]}>
          <Image source={messageIcon} style={imageStyle} />
          <Text style={infoText}>{props.InforUser.Address}</Text>
        </View> */}
      </View>
      <View style={{alignItems: 'center', marginTop: 10}}>
        <TouchableOpacity
          style={styles.wapperBtnUpdate}
          onPress={() => {
            handleUpdateUser();
          }}>
          <Text style={styles.wrapperTextupdate}>{t('Update')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {flex: 1, backgroundColor: '#F6F6F6'},
  wrapperMain: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  wrapperMain2: {
    height: '100%',
    width: '100%',
    backgroundColor: '#C0C0C0',
    alignItems: 'center',
  },
  wrapperHeader: {
    height: 80,
    width: '100%',
    backgroundColor: '#009966',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperBtnlc: {
    height: 28,
    width: '70%',
    backgroundColor: '#009966',
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {width: '95%', height: 285},
  mapStyle: {
    width: width - 40,
    height: 230,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 340,
    backgroundColor: '#FFFFFF',
    margin: 10,
    borderRadius: 2,
    shadowColor: '#3B5458',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
  },
  infoContainer: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF',
    margin: 10,
    marginTop: 0,
    borderRadius: 20,
    shadowColor: '#3B5458',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
  },
  rowInfoContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 6,
    borderColor: '#F6F6F6',
    width: '95%',
  },
  imageStyle: {
    width: 15,
    height: 15,
  },
  infoText: {
    fontFamily: 'Roboto',
    color: '#AE005E',
    fontWeight: '500',
    fontSize: 13,
  },
  infoText2: {
    fontFamily: 'Roboto',
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
  },
  textStyleHeader: {
    fontSize: 28,
    fontFamily: 'Roboto',
    color: 'white',
    fontWeight: 'bold',
  },
  wapperBtnUpdate: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#009966',
    borderRadius: 10,
    height: 50,
    width: '92%',
  },
  TextMain: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 20,
  },
  wrapperTextupdate: {
    fontSize: 20,
    fontFamily: 'Roboto',
    color: 'white',
    fontWeight: 'bold',
  },
  textAddress: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

function mapStateToProps(state) {
  return {
    dataLogin: state.dataLogin,
    InforUser: state.InforUser,
    dataCheckLocal: state.dataCheckLocal,
  };
}
export default connect(mapStateToProps, {setInforUser})(Contact);
