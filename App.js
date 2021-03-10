import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import store from './src/Redux/Redux';
import {Provider} from 'react-redux';
import Main from './src/Components/Main/Main';
import Loading from './src/Components/Loading/Loading';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Authenication from './src/Components/Authenication/Authenication';
import WaitForPackageBrowsing from './src/Components/Main/Home/Menu/WaitForPackageBrowsing';
import PackageOnSale from './src/Components/Main/Home/Menu/PackageOnSale';
import PackageSaled from './src/Components/Main/Home/Menu/PackageSaled';
import ContactUpdate from './src/Components/Main/Contact/ContactUpdate';
import CategoryDetail from './src/Components/Main/Home/category/CategoryDetail/CategoryDetail';
import SelectRole from './src/Components/SelectRole/SelectRole';
import Sale from './src/Components/Main/Cart/Sale/Sale';
import PackageDetail from './src/Components/Main/Home/Menu/PackageDetail/PackageDetail';
import PackageDetailUpdate from './src/Components/Main/Home/Menu/PackageDetail/PackageDetailUpdate';
import Main2 from './src/Components/Main2/Main';
import ProductDetail from './src/Components/Main2/Home/MainView/Products/ProductDetail';
import ListProducts from './src/Components/Main2/Home/MainView/Products/ListProducts';
import './src/I18n';

const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Main2" component={Main2} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
          <Stack.Screen name="ListProducts" component={ListProducts} />
          <Stack.Screen name="PackageDetail" component={PackageDetail} />
          <Stack.Screen name="SelectRole" component={SelectRole} />
          <Stack.Screen name="Authenication" component={Authenication} />
          <Stack.Screen
            name="WaitForPackageBrowsing"
            component={WaitForPackageBrowsing}
          />
          <Stack.Screen name="PackageOnSale" component={PackageOnSale} />
          <Stack.Screen name="ContactUpdate" component={ContactUpdate} />
          <Stack.Screen name="CategoryDetail" component={CategoryDetail} />
          <Stack.Screen name="Sale" component={Sale} />
          <Stack.Screen
            name="PackageDetailUpdate"
            component={PackageDetailUpdate}
          />
          <Stack.Screen name="PackageSaled" component={PackageSaled} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
