const GetHistoryRecyclablesAPI = async (Token, status) => {
  var url = `http://192.168.71.119:8001/GetRycyclables/${status}`;
  return await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `bearer ${Token}`,
    },
  }).then((response) => response.json());
};

export default GetHistoryRecyclablesAPI;
