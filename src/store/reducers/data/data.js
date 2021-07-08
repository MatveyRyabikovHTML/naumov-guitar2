import {ActionType} from '../../../const';
import {dataMocks} from '../../../mocks';
import {getMinMaxPrice} from '../../../utils';

const {ADD_DATA} = ActionType;

const initialState = {
  data: dataMocks,
  price: getMinMaxPrice(dataMocks)
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export {data};
