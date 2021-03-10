import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import icEmail from '../../../Images/Icons/notification2.png';
import Notify from '../../../RestAPI/Notify/get-notify-api';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import GetHistoryRecyclablesAPI from '../../../RestAPI/Recyclables/get-history-recyclables';
import {setHistoryReducer} from '../../../Redux/ActionCreators';
const NotifyView = (props) => {
  const {t, i18n} = useTranslation();
  const navigation = useNavigation();
  const convertDate = (date) => {
    var ts = new Date(date);
    return ts.toLocaleDateString();
  };
  const convertDate2 = (date) => {
    var ts = new Date(date);
    return ts.toLocaleTimeString();
  };
  const HandleClickNotify = (text) => {
    if (text === 'Gói hàng đã bán thành công') {
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
      //   navigation.navigate('PackageSaled');
    } else {
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
      //   navigation.navigate('WaitForPackageBrowsing');
    }
    //   navigation.navigate('')
  };
  return (
    <ScrollView>
      <View style={styles.wrapperHeader}>
        <Text style={styles.textStyleHeader}>{t('Notifi')}</Text>
      </View>
      {/* <View style={styles.wrapperMain2}> */}
      {/* <View style={{height: 4, backgroundColor: '#FFFFFF'}}></View> */}

      <View style={styles.wrapperMain}>
        {props.dataNotify.map((e) => (
          <TouchableOpacity
            style={styles.wrapperNotify}
            key={e.ID}
            onPress={() => {
              HandleClickNotify(e.Detail);
            }}>
            <View style={styles.wrapperInNotyfi}>
              <View style={styles.wrapperImageInNotify}>
                <Image source={icEmail} style={styles.wrapperImage} />
              </View>
              <View style={{width: 350, marginLeft: 20}}>
                <View style={{width: '85%'}}>
                  <Text style={styles.wrapperTextInNotify}>{t('Package')}</Text>
                </View>
                <View style={{width: '85%'}}>
                  <Text style={styles.wrapperTextInNotify2}>{e.Detail}</Text>
                </View>
                <Text style={styles.StyleTextTime}>
                  {convertDate(e.CreateAtTime)} {convertDate2(e.CreateAtTime)}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

function mapStateToProps(state) {
  return {
    dataLogin: state.dataLogin,
    Scores: state.Scores,
    dataNotify: state.dataNotify,
  };
}
export default connect(mapStateToProps, {setHistoryReducer})(NotifyView);

const styles = StyleSheet.create({
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

  textStyleHeader: {
    fontSize: 28,
    fontFamily: 'Roboto',
    color: 'white',
    fontWeight: 'bold',
  },
  wrapperNotify: {
    height: 80,
    width: '95%',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginTop: 12,
  },
  wrapperImage: {
    height: 30,
    width: 30,
  },
  wrapperInNotyfi: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperTextInNotify: {
    fontSize: 18,
    fontFamily: 'Roboto',
    color: 'black',
  },
  wrapperTextInNotify2: {
    fontSize: 14,
    marginBottom: 3,
    fontFamily: 'Roboto',
    color: 'black',
  },
  wrapperImageInNotify: {
    marginLeft: 20,
  },
  StyleTextTime: {
    fontSize: 11,
    fontFamily: 'Roboto',
    color: 'black',
  },
});
