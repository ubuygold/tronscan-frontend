import {SET_RECENT_TRANSACTIONS, SET_TOKEN_BALANCES, SET_TOTAL_TRANSACTIONS, SET_WEBSOCKET, SET_WS_DATA} from "../actions/account";
import {LOGIN} from "../actions/app";
import {find, sortBy, toUpper} from "lodash";
import _ from "lodash";

const initialState = {
  tokens: [],
  trxBalance: 0,
  totalTransactions: 0,
  recentTransactions: [],
  frozen: {
    total: 0,
    balances: [],
  },
  accountResource:{},
  wsdata: []
};

export function accountReducer(state = initialState, action) {

  switch (action.type) {

    case LOGIN: {
      return {
        ...state,
        tokens: [],
      };
    }

    case SET_TOKEN_BALANCES: {
      let {map_amount: trxBalance = 0} = find(action.tokens, tb => tb.name.toUpperCase() === "_") || {};
      let tokenList =  _(action.tokens)
          .sortBy(tb => toUpper(tb.map_token_name))
          .sortBy(tb => -tb.map_amount)
          .sortBy(tb => toUpper(tb.map_token_name) == 'TRX')
          .value()
          
      return {
        ...state,
        trxBalance,
        tokens20:action.trc20token,
        tokens: tokenList,
        frozen: {
          ...action.frozen,
        },
        accountResource:{
          ...action.accountResource,
        }
      }
    }

    case SET_TOTAL_TRANSACTIONS: {
      return {
        ...state,
        totalTransactions: action.totalTransactions,
      }
    }

    case SET_RECENT_TRANSACTIONS: {
      return {
        ...state,
        recentTransactions: action.transactions,
      }
    }

    case SET_WEBSOCKET: {
      return {
        ...state,
        websocket: action.socketData,
      }
    }

    case SET_WS_DATA: {
      return {
        ...state,
        wsdata: action.wsdata,
      }
    }

    default:
      return state;
  }
}
