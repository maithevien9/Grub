import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import icGift from '.././../Images/Icons/cart.png';

const windowHeight = Dimensions.get('window').height;
const Points = (props) => {
  const searchPlaces = async (
    text,
    countryComponentCode = 'us',
    latitude,
    longitude,
  ) => {
    try {
      let url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${text}&types=geocode&key=${GOOGLE_API_KEY}`;

      if (Array.isArray(countryComponentCode) && countryComponentCode.length) {
        let strCountries = countryComponentCode.map((_code) => {
          return `country:${_code}`;
        });
        url += `&components=${strCountries.join('|')}`;
      }
      if (latitude && longitude) {
        url += `&origin=${latitude},${longitude}`;
      }

      const fetchResult = await fetch(url);
      const response = await fetchResult.json();
      return !text ? [] : response?.predictions;
    } catch (err) {
      throw err;
    }
  };

  return (
    <View>
      <View style={styles.wrapperHeader}>
        <Text style={styles.textStyleHeader}>Đổi Điểm</Text>
      </View>
      {/* <ScrollView style={styles.wrapperMain}>
        {props.CartHistory.map((e) => (
          <View style={styles.wrapperForm} key={e.ID}>
            <Image source={icGift} style={styles.wrapperImage} />
            <View style={{marginLeft: '5%'}}>
              <View style={styles.wrapperRowFull}>
                <View style={styles.wrapperRowGift}>
                  <Text style={styles.StyleText}>Status: </Text>
                  <View>
                    <Text style={styles.StyleText}>OnSale</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.wrapperRowScore}>
                  <Text style={styles.StyleText2}>Detail</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.wrapperRowScore}>
                <Text style={styles.StyleText}>Price </Text>
                <Text style={styles.StyleText}>{e.Price}</Text>
              </View>
              <View style={styles.wrapperRow}>
                <Text style={styles.StyleText}>CreateAtTime</Text>
                <Text style={styles.StyleText}>
                  {convertDate(e.CreateAtTime)} {convertDate2(e.CreateAtTime)}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView> */}
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

export default Points;
