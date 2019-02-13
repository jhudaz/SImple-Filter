function getInitialState() {
  return {
    allCoins: [],
    coin: {}
  }
}

export default function (state = getInitialState(), action) {
  switch (action.type) {
    case "GET_COINS":
      return {
        ...state,
        allCoins: action.payload.data
      };
    case "GET_ONE_COIN":
      return {
        ...state,
        coin: action.payload
      }
    default:
      return getInitialState();
  }
}