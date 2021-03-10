var InforUser = {};
const InforUserReducer = (state = InforUser, action) => {
  if (action.type === 'setInforUser') return action.data;
  return state;
};
export default InforUserReducer;
