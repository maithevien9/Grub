const SearchRecyclablesAPI = async (keyWord) => {
  var url = `https://ba-e-project2.herokuapp.com/SearchRecycalbles/${keyWord}`;
  return await fetch(url).then((response) => response.json());
};

export default SearchRecyclablesAPI;
