const CreateNotifyAPI = async (token, Name, Detail) => {
  var url = 'https://ba-e-project2.herokuapp.com/CreateNotify';

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
