import AsyncStorage from '@react-native-community/async-storage';

const SaveDataLogin = async (data) => {
  await AsyncStorage.setItem('@save', JSON.stringify(data));
};

export default SaveDataLogin;
