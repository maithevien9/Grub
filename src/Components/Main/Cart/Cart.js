import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Dimensions} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';

import {deleteCart} from '../../../Redux/ActionCreators';
import icRemove from '../../../Images/Icons/remove.png';
const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;
const About = (props) => {
  const navigation = useNavigation();
  const {t, i18n} = useTranslation();
  const HanleRecyBooking = () => {
    if (props.Cart.length == 0) {
      Alert.alert(
        `${t('Notifi')}`,
        `${t('NotifiCart')}`,
        [{text: `${t('confirm')}`}],
        {cancelable: false},
      );
    } else {
      var scoreData = 0;
      props.Cart.map((e) => {
        console.log(e.amount);
        console.log(e.Score);
        scoreData = scoreData + e.amount * e.Score;
      });
      console.log(scoreData);
      var value = `${t('RecommendedPrice')} ${scoreData} VND`;
      navigation.navigate('Sale', {value});
    }
  };
  const handleX = (ID) => {
    props.deleteCart(ID);
  };
  return (
    <View style={styles.wrapperMain}>
      <View style={styles.wrapperHeader}>
        <Text style={styles.textStyleHeader}>{t('Cart')}</Text>
      </View>
      <ScrollView style={styles.wrapperContent}>
        {props.Cart.map((e) => (
          <View style={styles.wrapperMainCart} key={e.ID}>
            <View style={styles.wrapperinLine}>
              <Image source={e.Image} style={styles.wrapperImage} />
              <View style={styles.wrapperText}>
                <TouchableOpacity
                  style={{
                    height: 15,
                    alignSelf: 'flex-end',
                    width: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingBottom: '-1%',
                  }}
                  onPress={() => {
                    handleX(e.ID);
                  }}>
                  <Image source={icRemove} style={styles.wrapperImageRemove} />
                </TouchableOpacity>
                <View style={styles.wrapperinLine2}>
                  <Text style={styles.stylesText}>{e.Name}</Text>
                </View>
                <Text style={styles.stylesText}>
                  {t('Amount')}: {e.amount}
                  {e.Unit.slice(2, 10)}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.wrapperBtn} onPress={HanleRecyBooking}>
        <Text style={styles.TextSubmit}>{t('PostForSale')}</Text>
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
  wrapperImageRemove: {
    height: 15,
    width: 15,
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
export default connect(mapStateToProps, {deleteCart})(About);
