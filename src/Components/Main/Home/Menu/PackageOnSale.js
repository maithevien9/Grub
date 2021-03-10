import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import icGift from '.././../../../Images/Icons/cart.png';
import {connect} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {setPackageDetail} from '../../../../Redux/ActionCreators';
import GetRycyclableDetail from '../../../../RestAPI/Recyclables/get-recyclable-detail-api';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const PackageOnSale = (props) => {
  const route = useRoute();
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
        var IDRecy = e.ID;
        var dataCartHistoryDetail = JSON.parse(JSON.stringify(json));
        if (dataCartHistoryDetail.dataString === 'THANH_CONG') {
          props.setPackageDetail(dataCartHistoryDetail.data);
          navigation.navigate('PackageDetailUpdate', {
            IDRecy,
          });
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
        <Text style={styles.textStyleHeader}>{t('PackageOnSale')}</Text>
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
                    <Text style={styles.StyleText}>{t('OnSale')}</Text>
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
  wrapperImage: {
    height: 40,
    width: 40,
    marginRight: '3%',
  },
  wrapperRow: {
    flexDirection: 'row',
  },
  wrapperRowFull: {
    flexDirection: 'row',
  },
  wrapperRowGift: {
    flexDirection: 'row',
    width: '60%',
  },
  wrapperRowScore: {
    height: windowHeight / 38,
    flexDirection: 'row',
    width: '35%',
  },
  StyleText: {
    fontSize: 12,
    fontFamily: 'Roboto',
    color: 'black',
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
    CartHistory: state.CartHistory,
    dataLogin: state.dataLogin,
    historyGift: state.historyGift,
  };
}
export default connect(mapStateToProps, {setPackageDetail})(PackageOnSale);
