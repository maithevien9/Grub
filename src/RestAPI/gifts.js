export const GetGifts = async () => {
  var url = 'http://192.168.71.119:8001/gifts';

  return await fetch(url, {
    method: 'GET',
  }).then((response) => response.json());
};

export const GetHistoryGifts = async (userId) => {
  var url = `http://192.168.71.119:8001/giftExchanges/${userId}`;

  return await fetch(url, {
    method: 'GET',
  }).then((response) => response.json());
};

export const CreateRequestGift = async (body) => {
  var url = 'http://192.168.71.119:8001/giftExchanges';
  console.log(JSON.stringify(body));
  return await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((response) => response.json());
};
