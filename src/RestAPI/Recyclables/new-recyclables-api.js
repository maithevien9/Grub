const NewRecyclablesAPI = async (
  Token,
  Price,
  Address,
  Phone,
  InforRecyclable,
) => {
  var url = 'https://ba-e-project2.herokuapp.com/NewRecyclables';

  return await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `bearer ${Token}`,
    },
    body: JSON.stringify({
      Price: Price,
      Address: Address,
      Phone: Phone,
      InforRecyclable: InforRecyclable,
    }),
  }).then((response) => response.json());
};

export default NewRecyclablesAPI;
