const LoginAPI = async (user, password) => {
  var url = 'http://192.168.71.119:8001/Login';

  return await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      User: user,
      PassWord: password,
    }),
  }).then((response) => response.json());
};

export default LoginAPI;
