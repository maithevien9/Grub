var Products = [];
const ProductsReducer = (state = Products, action) => {
  if (action.type === 'setProduct') return action.data;
  return state;
};
export default ProductsReducer;
