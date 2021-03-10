const registerAPI = async (User, PassWord) => {
  var url = 'https://ba-e-project2.herokuapp.com/Register';
  return await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      User: User,
      PassWord: PassWord,
    }),
  }).then((response) => response.json());
};

export default registerAPI;
