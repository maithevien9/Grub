const ChangInforUser = async (Token, Name, Address, Phone, X, Y) => {
  var url = 'http://192.168.71.119:8001/ChangInfor';

  return await fetch(url, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `bearer ${Token}`,
    },
    body: JSON.stringify({
      Name: Name,
      Address: Address,
      Phone: Phone,
      X: X,
      Y: Y,
    }),
  }).then((response) => response.json());
};

export default ChangInforUser;
