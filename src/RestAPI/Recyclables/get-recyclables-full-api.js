const GetRecyclablesFullAPI = async (Token, status) => {
  var url = `https://ba-e-project2.herokuapp.com/GetRycyclablefull`;
  return await fetch(url).then((response) => response.json());
};

export default GetRecyclablesFullAPI;
