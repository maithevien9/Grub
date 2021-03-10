var PackageDetail = {};
const PackageDetailReducer = (state = PackageDetail, action) => {
  if (action.type === 'setPackageDetail') return action.data;
  return state;
};
export default PackageDetailReducer;
