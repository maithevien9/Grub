import AsyncStorage from '@react-native-community/async-storage';

const SaveDataCart = async (data) => {
  await AsyncStorage.setItem('@saveCart', JSON.stringify(data));
};

export default SaveDataCart;
