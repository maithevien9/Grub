import {createStore, combineReducers} from 'redux';
import CartHistoryReducer from './Reducer/CartHistoryReducer';
import CartReducer from './Reducer/CartReducer';
import ProductsReducer from './Reducer/ProductReducer';
import dataLoginReducer from './Reducer/dataLoginReducer';
import dataNotifyReducer from './Reducer/NotifyReducer';
import InforUserReducer from './Reducer/InforUserReducer';
import PackageDetailReducer from './Reducer/PackageDetailReducer';

const reducer = combineReducers({
  dataLogin: dataLoginReducer,
  dataNotify: dataNotifyReducer,
  InforUser: InforUserReducer,
  Cart: CartReducer,
  CartHistory: CartHistoryReducer,
  Products: ProductsReducer,
  PackageDetail: PackageDetailReducer,
});
const store = createStore(reducer);

export default store;
