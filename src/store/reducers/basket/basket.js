import {extend} from '../../../utils';
import {ActionType, STORE_BASKET_NAME, STORE_PROMO_CODE_NAME} from '../../../const';

const {
  CHANGE_BASKET,
  CHANGE_TOTAL,
  CHANGE_PROMO_CODE
} = ActionType;

const initialState = {
  basket: localStorage[STORE_BASKET_NAME] ?
    JSON.parse(localStorage[STORE_BASKET_NAME]) : [],
  totalCost: 0,
  promoCode: localStorage[STORE_PROMO_CODE_NAME] ?
    JSON.parse(localStorage[STORE_PROMO_CODE_NAME]) : ``,
};

const basket = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BASKET:
      localStorage[STORE_BASKET_NAME] = JSON.stringify(action.payload);
      return extend(state, {
        basket: action.payload,
      });
    case CHANGE_TOTAL:
      return extend(state, {
        totalCost: action.payload,
      });
    case CHANGE_PROMO_CODE:
      localStorage[STORE_PROMO_CODE_NAME] = JSON.stringify(action.payload);
      return extend(state, {
        promoCode: action.payload,
      });
    default:
      return state;
  }
};

export {basket};
