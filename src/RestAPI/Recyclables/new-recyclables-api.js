const NewRecyclablesAPI = async (
  Token,
  Price,
  Address,
  Phone,
  InforRecyclable,
) => {
  var url = 'http://192.168.71.119:8001/NewRecyclables';

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
