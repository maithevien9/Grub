import {Alert} from 'react-native';

var Cart = [];
const CartReducer = (state = Cart, action) => {
  if (action.type === 'setCart') return action.data;
  if (action.type === 'addCart') {
    var ID = action.ID;
    var temp = 0;
    state.filter((e) => {
      if (ID === e.ID) {
        temp = temp + 1;
      }
    });
    if (temp == 0) {
      Alert.alert(
        'Thành công / Success',
        ' ',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
      return [
        {
          ID: action.ID,
          Name: action.Name,
          amount: action.amount,
          Score: action.Score,
          Unit: action.Unit,
          Image: action.Image,
        },
      ].concat(state);
    } else {
      Alert.alert(
        ' ',
        'Bạn đã thêm rồi, vui lòng kiểm tra lại / You have already added it, please check back ',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    }
  }
  if (action.type === 'deleteCart') {
    return state.filter((e) => {
      if (e.ID !== action.ID) {
        return e;
      }
    });
  }
  return state;
};
export default CartReducer;
