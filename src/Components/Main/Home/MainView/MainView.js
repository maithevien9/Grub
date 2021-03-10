import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import icBin from '../../../../Images/Icons/delete.png';
import icSchedule from '../../../../Images/Icons/date.png';
import icGift from '../../../../Images/Icons/giftbox.png';
import icScore from '../../../../Images/Icons/scoreboard.png';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import View1 from './Category/View1';
import View2 from './Category/View2';
import View3 from './Category/View3';
import {useTranslation} from 'react-i18next';
import ScrollableTabView from 'react-native-scrollable-tab-view';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const MainView = (props) => {
  const navigation = useNavigation();
  const [scores, SetScores] = useState(0);

  const {t, i18n} = useTranslation();

  const handleCatergery = () => {
    navigation.navigate('Category');
  };
  const handleCollect = () => {
    navigation.navigate('Collect');
  };
  const handleGift = () => {
    navigation.navigate('Gift');
  };
  const handlePoints = () => {
    navigation.navigate('Points');
  };
  return (
    <View>
      <View style={styles.wrapper}>
        <ScrollableTabView
          tabBarUnderlineStyle={styles.tabBarUnderline}
          tabBarActiveTextColor={'#009966'}
          tabBarUnderlineColor={'#009966'}
          tabBarTextStyle={{
            fontFamily: 'Roboto',
            fontSize: 15,
            fontWeight: 'bold',
          }}>
          <View1 tabLabel={t('Plastic')} />
          <View2 tabLabel={t('Paper')} />
          <View3 tabLabel={t('Metal')} />
        </ScrollableTabView>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    height: (windowHeight * 4) / 4,
    backgroundColor: 'white',
  },
  tabBarUnderline: {
    backgroundColor: '#009966',
  },
  textAdd: {
    color: '#009966',
    fontSize: 49,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  wrapperBtnCartAdd: {
    height: '25%',
    width: '16%',
    backgroundColor: 'white',
    marginLeft: (windowWidth * 2.3) / 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 45,
  },
  wrapperAdd: {
    height: (windowHeight * 1.2) / 4,
    backgroundColor: 'white',
  },
  wrapperScore: {
    height: 60,
    width: '85%',
    backgroundColor: 'white',
    elevation: 15,
    marginBottom: '20%',
    borderWidth: 1,
    borderRadius: 20,
    marginLeft: '8%',
    marginTop: '8%',
    paddingLeft: '5%',
    justifyContent: 'center',
  },
  styleText: {
    fontSize: 15,
    fontFamily: 'Roboto',
  },
  wrapperCategory: {
    height: 150,
    width: 160,
    backgroundColor: 'white',
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '2%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#009966',
  },
  wrapperCategory2: {
    height: 150,
    width: 160,
    backgroundColor: 'white',
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '4%',
    borderRadius: 10,
    borderWidth: 1,

    borderColor: '#8A4B08',
  },
  wrapperCategory3: {
    height: 150,
    width: 160,
    backgroundColor: 'white',
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '4%',
    borderRadius: 10,
    borderWidth: 1,

    borderColor: '#086A87',
  },
  wrapperCategory4: {
    height: 150,
    width: 160,
    backgroundColor: 'white',
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '4%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#610B5E',
  },
  wrapperRowCater: {
    marginTop: '10%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: '5%',
    flexWrap: 'wrap',
  },
  styleTextInMain: {
    fontWeight: 'bold',
    fontSize: 13,
    fontFamily: 'Roboto',
    marginTop: '10%',

    color: '#009966',
  },
  styleTextInMain2: {
    fontWeight: 'bold',
    fontSize: 13,
    fontFamily: 'Roboto',
    marginTop: '10%',

    color: '#8A4B08',
  },
  styleTextInMain3: {
    fontWeight: 'bold',
    fontSize: 13,
    fontFamily: 'Roboto',
    marginTop: '10%',

    color: '#086A87',
  },
  styleTextInMain4: {
    fontWeight: 'bold',
    fontSize: 13,
    fontFamily: 'Roboto',
    marginTop: '10%',

    color: '#610B5E',
  },
  wrapperImage: {height: 50, width: 50},
  wrapperTest: {
    height: 60,
    width: '85%',
    backgroundColor: 'white',
    elevation: 20,
    marginBottom: '20%',
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: '8%',
    marginTop: '8%',
    paddingLeft: '5%',
    justifyContent: 'center',
  },
});

function mapStateToProps(state) {
  return {
    dataLogin: state.dataLogin,
    Scores: state.Scores,
  };
}
export default connect(mapStateToProps)(MainView);
