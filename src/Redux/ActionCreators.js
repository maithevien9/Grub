export function addCart(ID, Name, amount, Score, Unit, Image) {
  return {
    type: 'addCart',
    ID: ID,
    Name: Name,
    amount: amount,
    Score: Score,
    Unit: Unit,
    Image: Image,
  };
}
export function deleteCart(ID) {
  return {
    type: 'deleteCart',
    ID: ID,
  };
}
export function AddCartHistory(dateTime, amount, Cart, Address, Phone) {
  return {
    type: 'AddCartHistory',
    CreateAtTime: dateTime,
    Price: amount,
    arrayCart: Cart,
    Address: Address,
    Phone: Phone,
  };
}

export function setCart(data) {
  return {
    type: 'setCart',
    data: data,
  };
}

export function setDataLogin(data) {
  return {
    type: 'setDataLogin',
    data: data,
  };
}

export function setInforUser(data) {
  return {
    type: 'setInforUser',
    data: data,
  };
}

export function setdataNotify(data) {
  return {
    type: 'setdataNotify',
    data: data,
  };
}

export function setHistoryReducer(data) {
  return {
    type: 'setCartHistory',
    data: data,
  };
}

export function setPackageDetail(data) {
  return {
    type: 'setPackageDetail',
    data: data,
  };
}

export function setProduct(data) {
  return {
    type: 'setProduct',
    data: data,
  };
}
