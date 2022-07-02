const CreateNotifyAPI = async (token, Name, Detail) => {
  var url = 'http://192.168.71.119:8001/CreateNotify';

  return await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`,
    },
    body: JSON.stringify({
      Name: Name,
      Detail: Detail,
    }),
  }).then((response) => response.json());
};

export default CreateNotifyAPI;
