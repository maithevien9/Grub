const GetRecyclablesDetailAPI = async (ID) => {
  var url = `https://ba-e-project2.herokuapp.com/GetRycyclableDetail/${ID}`;
  return await fetch(url).then((response) => response.json());
};

export default GetRecyclablesDetailAPI;
