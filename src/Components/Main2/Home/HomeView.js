import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Header from './Header/Header';
import icBin from '../../../Images/Icons/delete.png';
import icSchedule from '../../../Images/Icons/date.png';
import icGift from '../../../Images/Icons/giftbox.png';
import icScore from '../../../Images/Icons/scoreboard.png';
import MainView from './MainView/MainView';
class HomeView extends Component {
  openMenu() {
    const {open} = this.props;
    open();
  }
  HandleCatergery = () => {};
  render() {
    return (
      <View>
        <Header onOpen={this.openMenu.bind(this)} />
        <MainView />
      </View>
    );
  }
}
const styles = StyleSheet.create({});
export default HomeView;
