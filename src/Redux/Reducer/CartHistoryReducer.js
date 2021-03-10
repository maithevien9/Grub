var dataCartHistory = {};
const CartHistoryReducer = (state = dataCartHistory, action) => {
  if (action.type === 'setCartHistory') return action.data;
  return state;
};
export default CartHistoryReducer;
