import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import icGift from '.././../../../Images/Icons/cart.png';
import {connect} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import GetRycyclableDetail from '../../../../RestAPI/Recyclables/get-recyclable-detail-api';
import {setPackageDetail} from '../../../../Redux/ActionCreators';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const HistoryRecyclables = (props) => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const convertDate = (date) => {
    var ts = new Date(date);
    return ts.toLocaleDateString();
  };
  const convertDate2 = (date) => {
    var ts = new Date(date);
    return ts.toLocaleTimeString();
  };
  const hanldePackageDetail = (e) => {
    GetRycyclableDetail(e.ID)
      .then((json) => {
        var dataCartHistoryDetail = JSON.parse(JSON.stringify(json));

        if (dataCartHistoryDetail.dataString === 'THANH_CONG') {
          props.setPackageDetail(dataCartHistoryDetail.data);
          navigation.navigate('PackageDetail');
        } else {
        }
      })
      .catch((error) => {
        console.error(error + 'fail');
      });
  };
  return (
    <View>
      <View style={styles.wrapperHeader}>
        <Text style={styles.textStyleHeader}>{t('PackageSold')}</Text>
      </View>
      <ScrollView style={styles.wrapperMain}>
        {props.CartHistory.map((e) => (
          <View style={styles.wrapperForm} key={e.ID}>
            <Image source={icGift} style={styles.wrapperImage} />
            <View style={{marginLeft: '5%'}}>
              <View style={styles.wrapperRowFull}>
                <View style={styles.wrapperRowGift}>
                  <Text style={styles.StyleText}>{t('Status')}: </Text>
                  <View>
                    <Text style={styles.StyleText}>{t('Sold')}</Text>
                  </View>
                </View>
                <TouchableOpacity
                  style={styles.wrapperRowScore}
                  onPress={() => hanldePackageDetail(e)}>
                  <Text style={styles.StyleText2}>{t('Detail')} </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.wrapperRowScore}>
                <Text style={styles.StyleText}>{t('Price')}: </Text>
                <Text style={styles.StyleText}>{e.Price}</Text>
              </View>
              <View style={styles.wrapperRow}>
                <Text style={styles.StyleText}>{t('CreateAtTime')}: </Text>
                <Text style={styles.StyleText}>
                  {convertDate(e.CreateAtTime)} {convertDate2(e.CreateAtTime)}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapperImage: {
    height: 40,
    width: 40,
    marginRight: '3%',
  },
  wrapperRow: {
    flexDirection: 'row',
    marginTop: 5,
  },
  wrapperRowFull: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  wrapperRowGift: {
    flexDirection: 'row',
    width: '60%',
  },
  wrapperRowScore: {
    flexDirection: 'row',
    width: '35%',
  },
  StyleText: {
    fontSize: 12,
    fontFamily: 'Roboto',
    color: 'black',
  },
  wrapperHeader: {
    height: 80,
    width: '100%',
    backgroundColor: '#009966',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyleHeader: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: 'white',
  },
  wrapperMain: {
    marginLeft: '3%',
    marginTop: '3%',
  },
  wrapperForm: {
    width: '95%',
    height: windowHeight / 8,
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingLeft: '3%',
    alignItems: 'center',
    marginBottom: 10,
  },

  StyleText2: {
    fontSize: 12,
    fontFamily: 'Roboto',
    color: 'red',
    fontWeight: 'bold',
  },
});

function mapStateToProps(state) {
  return {
    dataCheckLoginSuccess: state.dataCheckLoginSuccess,
    dataLogin: state.dataLogin,
    HistoryRecyclables: state.HistoryRecyclables,
    CartHistory: state.CartHistory,
  };
}
export default connect(mapStateToProps, {setPackageDetail})(HistoryRecyclables);
