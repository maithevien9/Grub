var dataNotify = [];

const dataNotifyReducer = (state = dataNotify, action) => {
  if (action.type === 'setdataNotify') return action.data;
  if (action.type === 'addNotify') {
    let ts = Date.now();

    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();

    var hour = date_ob.getHours();
    var min = date_ob.getMinutes();
    var sec = date_ob.getSeconds();

    var dateTime =
      year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + sec;

    return [
      {
        ID: Math.random().toString(36).substr(2, 9),
        Name: action.Name,
        Detail: '',
        IDUser: action.IDUser,
        CreateAtTime: dateTime,
      },
    ].concat(state);
  }
  return state;
};
export default dataNotifyReducer;
