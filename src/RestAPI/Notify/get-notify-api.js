const GetNotify = async (Token) => {
  var url = `https://ba-e-project2.herokuapp.com/GetNotify`;

  return await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `bearer ${Token}`,
    },
  }).then((response) => response.json());
};

export default GetNotify;
