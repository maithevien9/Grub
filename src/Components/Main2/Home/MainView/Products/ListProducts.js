import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  ScrollView,
  Picker,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {useTranslation} from 'react-i18next';
import IcSearch from '../../../../../Images/Icons/Search.png';
import Swiper from 'react-native-swiper';
import icBox from '../../../../../Images/Icons/paper1.png';
import SearchRecyclablesAPI from '../../../../../RestAPI/Recyclables/search-recyclable-api';
import {setProduct} from '../../../../../Redux/ActionCreators';
import GetRecyclablesDetailAPI from '../../../../../RestAPI/Recyclables/get-recyclable-detail-api';
import {useRoute} from '@react-navigation/native';
import {getDistance, getPreciseDistance} from 'geolib';
import GetRecyclablesFullAPI from '../../../../../RestAPI/Recyclables/get-recyclables-full-api';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const widthImageICSearch = (windowHeight * 0.5) / 10;
const ListProducts = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [dataCheckProduct, setDataCheckProduct] = useState(false);
  const [selectedValue1, setSelectedValue1] = useState('Đà Nẵng');
  const [selectedValue2, setSelectedValue2] = useState('Đà Nẵng');
  const [selectedValue3, setSelectedValue3] = useState('Nhựa');
  const [selectedValue4, setSelectedValue4] = useState(',');
  const [arrDataProduct, setArrDataProduct] = useState({
    ' ': '',
    HDPE: 'HDPE',
    PET: 'PET',
    PE: 'PE',
  });

  const [dataCheck, setDataCheck] = useState(false);
  const [textSearch, setTextSearch] = useState('');
  const {t, i18n} = useTranslation();
  const HandleSearch = (keyWord) => {
    if (keyWord !== '') {
      SearchRecyclablesAPI(keyWord)
        .then((json) => {
          var data = JSON.parse(JSON.stringify(json));
          props.setProduct(data.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  const HandleProductDetail = (e) => {
    GetRecyclablesDetailAPI(e.ID)
      .then((json) => {
        var data = json.data;
        navigation.navigate('ProductDetail', {e, data});
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleSortPrice = () => {
    var arr = props.Products.sort(function (a, b) {
      return a.Price - b.Price;
    });

    props.setProduct(JSON.parse(JSON.stringify(arr)));
  };
  const handleSortTime = () => {
    GetRecyclablesFull();
  };
  const GetRecyclablesFull = () => {
    GetRecyclablesFullAPI()
      .then((json) => {
        var data = JSON.parse(JSON.stringify(json));
        props.setProduct(data.data);
      })
      .catch((error) => {
        console.error(error + 'fail');
      });
  };
  const HanldeAdress = () => {
    setDataCheckProduct(false);
    setDataCheck(!dataCheck);
  };
  const HandleChangArrayProduct = (value) => {
    if (value === 0) {
      setArrDataProduct({
        ' ': '',
        HDPE: 'HDPE',
        PET: 'PET',
        PE: 'PE',
      });
    }
    if (value === 1) {
      setArrDataProduct({
        ' ': '',
        Giấy: 'Giấy',
        Thùng: 'Thùng',
      });
    }
    if (value === 2) {
      setArrDataProduct({
        ' ': '',
        Sắt: 'Sắt',
        Nhôm: 'Nhôm',
      });
    }
  };
  const HandleProduct = () => {
    setDataCheck(false);
    setDataCheckProduct(!dataCheckProduct);
  };
  const main = dataCheck ? (
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <Picker
        selectedValue={selectedValue1}
        style={{
          height: (windowHeight * 0.5) / 10,
          width: (windowWidth * 10) / 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        itemStyle={{
          backgroundColor: 'grey',
          color: 'blue',
          fontFamily: 'Ebrima',
          fontSize: 17,
        }}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue1(itemValue);
        }}>
        <Picker.Item label="Đà Nẵng" value="Đà Nẵng" />
      </Picker>
      <Picker
        selectedValue={selectedValue2}
        style={{
          height: (windowHeight * 0.5) / 10,
          width: (windowWidth * 10) / 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        itemStyle={{
          backgroundColor: 'grey',
          color: 'blue',
          fontFamily: 'Ebrima',
          fontSize: 17,
        }}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue2(itemValue);
        }}>
        <Picker.Item label="" value="Đà Nẵng" />
        <Picker.Item label="Hải Châu" value="Hải Châu" />
        <Picker.Item label="Liên Chiểu" value="Liên Chiểu" />
        <Picker.Item label="Cẩm Lệ" value="Cẩm Lệ" />
        <Picker.Item label="Thanh Khê" value="Thanh Khê" />
        <Picker.Item label="Ngũ Hành Sơn" value="Ngũ Hành Sơn" />
        <Picker.Item label="Sơn Trà" value="Sơn Trà" />
      </Picker>
      <TouchableOpacity
        style={styles.wrapperBtnAddress}
        onPress={() => HandleSearch(selectedValue2)}>
        <Text style={styles.StyleTextBtn}> {t('Search')}</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View />
  );
  const main2 = dataCheckProduct ? (
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <Picker
        selectedValue={selectedValue3}
        style={{
          height: (windowHeight * 0.5) / 10,
          width: (windowWidth * 10) / 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        itemStyle={{
          backgroundColor: 'grey',
          color: 'blue',
          fontFamily: 'Ebrima',
          fontSize: 17,
        }}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue3(itemValue);

          HandleChangArrayProduct(itemIndex);
        }}>
        <Picker.Item label="Nhựa" value="Nhựa" />
        <Picker.Item label="Giấy" value="Giấy" />
        <Picker.Item label="Kim Loại" value="Kim Loại" />
      </Picker>
      <Picker
        selectedValue={selectedValue4}
        style={{
          height: (windowHeight * 0.5) / 10,
          width: (windowWidth * 10) / 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        itemStyle={{
          backgroundColor: 'grey',
          color: 'blue',
          fontFamily: 'Ebrima',
          fontSize: 17,
        }}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedValue4(itemValue);
        }}>
        {Object.keys(arrDataProduct).map((key) => {
          return <Picker.Item label={key} value={key} key={key} />; //if you have a bunch of keys value pair
        })}
      </Picker>
      <TouchableOpacity
        style={styles.wrapperBtnAddress}
        onPress={() => HandleSearch(selectedValue4)}>
        <Text style={styles.StyleTextBtn}>{t('Search')}</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View />
  );
  const convertDate = (date) => {
    var ts = new Date(date);
    return ts.toLocaleDateString();
  };
  const convertDate2 = (date) => {
    var ts = new Date(date);
    return ts.toLocaleTimeString();
  };

  const handleGetDistance = (X, Y) => {
    if (route.params.checkLocal === true) {
      return 0;
    } else {
      var pdis = getPreciseDistance(
        {
          latitude: route.params.latitude,
          longitude: route.params.longitude,
        },
        {latitude: X, longitude: Y},
      );
      return pdis / 1000;
    }
  };
  return (
    <View style={styles.wrapperMain}>
      <View style={styles.WrapperSearch}>
        <TouchableOpacity
          style={styles.wrapperImageSearch}
          onPress={() => HandleSearch(textSearch)}>
          <Image source={IcSearch} style={styles.iconStyle} />
        </TouchableOpacity>
        <TextInput
          style={styles.WrapperTextSearch}
          onChangeText={(text) => setTextSearch(text)}
          value={textSearch}
        />
      </View>

      <View style={styles.wrapperMainCatogory}>
        <View style={styles.WrapperCatogory}>
          <TouchableOpacity
            style={styles.wrapperCatogoryHeader2}
            onPress={HanldeAdress}>
            <Text style={styles.TextCatogory}>{t('Address')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.wrapperCatogoryHeader}
            onPress={handleSortTime}>
            <Text style={styles.TextCatogory}>{t('Time')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.wrapperCatogoryHeader}
            onPress={handleSortPrice}>
            <Text style={styles.TextCatogory}>{t('Price')}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.wrapperCatogoryHeader3}
            onPress={HandleProduct}>
            <Text style={styles.TextCatogory}>{t('Product')}</Text>
          </TouchableOpacity>
        </View>
        {main}
        {main2}
        <ScrollView>
          {props.Products.map((e) => (
            <TouchableOpacity
              style={styles.wrapperProduct}
              onPress={() => {
                HandleProductDetail(e);
              }}
              key={e.ID}>
              <Image source={icBox} style={styles.wrapperImage} />
              <View style={styles.wrapperTextInlineProduct}>
                <View style={styles.wrapperRowScore}>
                  <Text style={styles.StyleText}>{t('Package')}: </Text>
                  <View style={styles.wrapperTextAddress}>
                    <Text style={styles.StyleText}>
                      <Text style={styles.StyleText}>{e.NameProduct}</Text>
                    </Text>
                  </View>
                </View>
                <View style={styles.wrapperRowScore}>
                  <Text style={styles.StyleText}>{t('Price')}: </Text>
                  <Text style={styles.StyleText}>{e.Price} VND</Text>
                </View>
                <View style={styles.wrapperRowScore}>
                  <Text style={styles.StyleText}>{t('Time')}: </Text>
                  <View style={styles.wrapperTextAddress}>
                    <Text style={styles.StyleText}>
                      {convertDate(e.CreateAtTime)}{' '}
                      {convertDate2(e.CreateAtTime)}
                    </Text>
                  </View>
                </View>

                <View style={styles.wrapperRowScore}>
                  <Text style={styles.StyleText}>{t('Address')}: </Text>
                  <View style={styles.wrapperTextAddress}>
                    <Text style={styles.StyleText}>{e.Address}</Text>
                  </View>
                </View>
                <View style={styles.wrapperRowScore}>
                  <Text style={styles.StyleText}>{t('Distance')}: </Text>
                  <View style={styles.wrapperTextAddress}>
                    <Text style={styles.StyleText}>
                      {handleGetDistance(e.X, e.Y) + ' KM'}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapperMain: {
    marginTop: '3%',
    alignItems: 'center',
  },
  StyleTextBtn: {
    fontSize: 10,
    fontFamily: 'Roboto',
    color: 'white',
    fontWeight: 'bold',
  },
  wrapperMainCatogory: {
    marginTop: '2%',
    height: (windowHeight * 7.5) / 10,
    width: (windowWidth * 9.7) / 10,
  },
  WrapperSearch: {
    height: (windowHeight * 0.5) / 10 + 2,
    width: (windowWidth * 9.7) / 10,
    borderRadius: 10,
    borderWidth: 1.2,
    borderColor: '#009966',
    flexDirection: 'row',
  },
  iconStyle: {
    height: 18,
    width: 18,
  },
  wrapperImageSearch: {
    backgroundColor: '#009966',
    width: widthImageICSearch,
    height: (windowHeight * 0.5) / 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  WrapperTextSearch: {
    height: (windowHeight * 0.5) / 10,
    width: '87%',
  },
  wrapperSwiper: {
    marginTop: '2%',
    height: (windowHeight * 2) / 10,
    width: (windowWidth * 9.7) / 10,
  },
  slide1: {
    height: (windowHeight * 2) / 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#009966',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide2: {
    height: (windowHeight * 2) / 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#009966',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  slide3: {
    height: (windowHeight * 2) / 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#009966',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  text: {
    fontSize: 20,
    fontFamily: 'Roboto',
    color: 'white',
    fontWeight: 'bold',
  },
  WrapperCatogory: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: (windowHeight * 0.6) / 10,
    width: (windowWidth * 9.7) / 10,
  },
  wrapperCatogoryHeader: {
    height: (windowHeight * 0.5) / 10,
    width: (windowWidth * 9.7) / 40,
    alignItems: 'center',
    justifyContent: 'center',

    borderBottomWidth: 0.5,
  },
  wrapperCatogoryHeader2: {
    height: (windowHeight * 0.5) / 10,
    width: (windowWidth * 9.7) / 40,
    alignItems: 'center',
    justifyContent: 'center',

    borderBottomWidth: 0.5,
  },
  wrapperCatogoryHeader3: {
    height: (windowHeight * 0.5) / 10,
    width: (windowWidth * 9.7) / 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
  },
  TextCatogory: {
    fontSize: 12,
    fontFamily: 'Roboto',
    color: 'black',
    fontWeight: 'bold',
  },
  wrapperProduct: {
    marginLeft: (windowWidth * 0.2) / 10,
    width: (windowWidth * 9.3) / 10,
    borderWidth: 0.5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '3%',
    paddingBottom: '3%',
    marginBottom: '1.5%',
  },
  wrapperImage: {
    marginLeft: (windowWidth * 0.5) / 10,
    height: 50,
    width: 50,
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
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: 'white',
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

  wrapperRow: {
    height: windowHeight / 38,
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
    flexDirection: 'row',
    width: '35%',
  },
  StyleText: {
    fontSize: 10,
    fontFamily: 'Roboto',
    color: 'black',
  },
  StyleText2: {
    fontSize: 12,
    fontFamily: 'Roboto',
    color: 'red',
    fontWeight: 'bold',
  },
  wrapperTextInlineProduct: {
    marginLeft: '5%',
  },
  wrapperTextAddress: {
    width: (windowWidth * 5) / 10,
  },
  wrapperBtnAddress: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#009966',
    borderRadius: 10,
    width: (windowWidth * 8) / 30,
    height: (windowHeight * 1.2) / 30,
  },
});

function mapStateToProps(state) {
  return {
    dataLogin: state.dataLogin,
    Scores: state.Scores,
    Products: state.Products,
  };
}
export default connect(mapStateToProps, {setProduct})(ListProducts);
