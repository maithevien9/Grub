const ChangInforUser = async (Token, Name, Address, Phone, X, Y) => {
  var url = 'https://ba-e-project2.herokuapp.com/ChangInfor';

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
