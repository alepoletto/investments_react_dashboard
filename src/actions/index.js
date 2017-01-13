import axios from 'axios';


export const FETCH_STOCKS = 'FETCH_STOCKS';


export function fetchStocks(){
  const request = axios.get('http://localhost:3050/api/stocks2');
  return {
    type: FETCH_STOCKS,
    payload: request
  };
}
