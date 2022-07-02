const SearchRecyclablesAPI = async (keyWord) => {
  var url = `http://192.168.71.119:8001/SearchRecycalbles/${keyWord}`;
  return await fetch(url).then((response) => response.json());
};

export default SearchRecyclablesAPI;
