import axios from "axios";

//action to get all the coins
export function getCoins() {
  return dispatch => {
    return axios
      .get(`https://api.coinlore.com/api/tickers/?start=100&limit=100`)
      .then(res => {
        dispatch({
          type: "GET_COINS",
          payload: res.data
        })
      })
      .catch(err => {
        throw err
      })
  }
}

export function getOneCoin(id) {
  return dispatch => {
    return axios
      .get(`https://api.coinlore.com/api/ticker/?id=${id}`)
      .then(res => {
        dispatch({
          type: "GET_ONE_COIN",
          payload: res.data
        })
      })
  }
}