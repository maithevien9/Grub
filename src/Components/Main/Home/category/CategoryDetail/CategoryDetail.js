import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import icText from '../../../../../Images/Icons/recycle.png';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { addCart } from '../../../../../Redux/ActionCreators';
import { useTranslation } from 'react-i18next';
import SaveDataCart from '../../.././../../AsyncStorage/SaveDataCart';

const CategoryDetail = (props) => {
  const [amount, setAmount] = React.useState(0);
  const { t } = useTranslation();
  const route = useRoute();
  const navigation = useNavigation();
  var ID = route.params.ID;
  var Name = route.params.Name;
  var Score = route.params.Score;
  const ViewProduct = route.params.ListProduct ? (
    route.params.ListProduct.map((e) => (
      <View style={styles.WrapperListDetail} key={e.ID}>
        <Image source={e.Image} style={styles.wrapperImage} />
        <Text style={styles.texList}>{e.Name}</Text>
      </View>
    ))
  ) : (
      <View></View>
    );
  const HandleCart = () => {
    if (amount != 0) {
      props.addCart(
        ID,
        Name,
        amount,
        route.params.Score,
        route.params.Unit,
        route.params.Image,
      );

      navigation.navigate('Main');
    } else {
      Alert.alert(
        `${t('Notifi')}`,
        `${t('PleaseEnterTheNumberOf')}`,
        [{ text: `${t('confirm')}`, onPress: () => console.log('OK Pressed') }],
        { cancelable: false },
      );
    }
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <View style={styles.wrapperHeader}>
        <Text style={styles.Textheader}>{t('DetailedGarbageRecycling')}</Text>
      </View>
      <View style={styles.wrapperMain}>
        <Text style={styles.textMain}>{t('Amount')}</Text>
        <TextInput
          onChangeText={(text) => setAmount(text)}
          value={amount}
          keyboardType="numeric"
          style={styles.textInput}
          placeholder={route.params.Unit}
        />
      </View>
      <View style={styles.wrapperScore}>
        <Text style={styles.textMain}>{t('RedemptionPoint')}:</Text>
        <Text style={styles.textMain}>{amount * Score} VND</Text>
      </View>

      <View style={styles.wrapperTextView}>
        <Text style={styles.TextStyleView}>
          {t('SomePicturesOfTheProduct')}
        </Text>
      </View>
      <ScrollView style={styles.wrapperList}>
        <View style={styles.wrapperListView}>{ViewProduct}</View>
      </ScrollView>
      <TouchableOpacity style={styles.wrapperBtn} onPress={HandleCart}>
        <Text style={styles.TextSubmit}>{t('AddToCart')}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapperHeader: {
    marginTop: '5%',
    marginBottom: '20%',

    alignItems: 'center',
  },
  wrapperBtn: {
    marginTop: '5%',
    height: '7%',
    width: '90%',
    backgroundColor: '#009966',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 17,
  },
  Textheader: {
    fontSize: 25,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  TextSubmit: {
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: 'white',
  },
  textInput: {
    height: 35,
    width: 366,
    borderColor: 'black',
    borderBottomWidth: 1,
    paddingLeft: 20,
    marginBottom: 15,
    fontSize: 14,
  },
  textMain: {
    fontSize: 15,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginHorizontal: '1%',
  },
  wrapperMain: {
    marginHorizontal: '5%',
  },
  wrapperScore: {
    flexDirection: 'row',
  },
  wrapperList: {
    height: '55%',
    width: '92%',
    marginTop: '2%',
  },
  WrapperListDetail: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    width: '49%',
    paddingBottom: '0%',
    borderBottomWidth: 1,
    marginTop: '5%',
  },
  wrapperImage: {
    height: 40,
    width: 40,
    borderRadius: 15,
  },
  wrapperListView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginHorizontal: '4%',
  },
  texList: {
    marginLeft: '5%',
    fontSize: 11,
    fontFamily: 'Roboto',
    width: '70%',
  },
  wrapperTextView: {
    marginTop: '5%',
    height: '2%',
  },
  TextStyleView: {
    fontSize: 15,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
});

function mapStateToProps(state) {
  return {
    dataLogin: state.dataLogin,
    Scores: state.Scores,
    Cart: state.Cart,
  };
}
export default connect(mapStateToProps, { addCart })(CategoryDetail);
