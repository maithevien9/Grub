import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import icGift from '.././../Images/Icons/cart.png';
import {GetGifts, CreateRequestGift} from '../.././RestAPI/gifts';
import Toast from 'react-native-toast-message';
import {connect} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {setInforUser} from '../../Redux/ActionCreators';

const windowHeight = Dimensions.get('window').height;
const Points = (props) => {
  const {t} = useTranslation();
  const [gifts, setGifts] = useState([]);

  useEffect(() => {
    GetGifts()
      .then((json) => {
        var dataNotify = JSON.parse(JSON.stringify(json));
        setGifts(dataNotify.data);
      })
      .catch((error) => {
        console.error(error + 'fail');
      });
  }, []);

  const handleRequestGift = (giftId, point) => {
    Alert.alert(`${t('Notifi')}`, 'Bạn xác nhận đổi quà trên ?', [
      {text: 'Huỷ', onPress: () => console.log('OK Pressed')},
      {
        text: `${t('confirm')}`,
        onPress: () => {
          CreateRequestGift({
            giftId: giftId,
            status: '1',
            userId: props.InforUser.ID?.toString(),
          }).then(() => {
            Toast.show({
              type: 'success',
              text1: `Thông báo`,
              text2: `Gửi yêu cầu đổi quà thành công`,
            });

            props.setInforUser({
              ...props.InforUser,
              points: props.InforUser.points - point,
            });
          });
        },
      },
    ]);
  };

  return (
    <View>
      <View style={styles.wrapperHeader}>
        <Text style={styles.textStyleHeader}>Đổi Điểm</Text>
      </View>

      <View style={{marginTop: 20, marginLeft: 20, flexDirection: 'row'}}>
        <Text style={{fontWeight: 'bold'}}>Tích điểm: </Text>
        <Text>{props.InforUser.points || 0}</Text>
      </View>
      <ScrollView style={styles.wrapperMain}>
        {gifts.map((e) => (
          <View style={styles.wrapperForm}>
            <Image source={{uri: e.image}} style={styles.wrapperImage} />
            <View style={{marginLeft: '10%'}}>
              <View style={styles.wrapperRowFull}>
                <View style={styles.wrapperRowGift}>
                  <Text style={styles.StyleText}>Tên quà: </Text>
                  <View>
                    <Text style={styles.StyleTextDetail}>{e.name}</Text>
                  </View>
                </View>

                <TouchableOpacity
                  style={styles.wrapperRowScore}
                  onPress={() => handleRequestGift(e.id, e.price)}>
                  <Text style={styles.StyleText2}>Đổi quà</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.wrapperRowScore}>
                <Text style={styles.StyleText}>Price </Text>
                <Text style={styles.StyleTextDetail}>{e.price}</Text>
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
    fontSize: 28,
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
    height: 60,
    width: 60,
    marginRight: '3%',
    borderRadius: 10,
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
    // paddingTop:
  },
  StyleText: {
    fontSize: 12,
    fontFamily: 'Roboto',
    color: 'black',
    fontWeight: 'bold',
  },
  StyleTextDetail: {
    fontSize: 12,
    fontFamily: 'Roboto',
    color: 'black',
    marginLeft: 6,
  },
  StyleText2: {
    fontSize: 12,
    fontFamily: 'Roboto',
    color: 'red',
    fontWeight: 'bold',
    marginTop: 3,
  },
});

function mapStateToProps(state) {
  return {
    InforUser: state.InforUser,
  };
}
export default connect(mapStateToProps, {setInforUser})(Points);
