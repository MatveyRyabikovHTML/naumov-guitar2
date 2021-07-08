import {extend} from '../../../utils';
import {ActionType, TypeSort, DirectionSort} from '../../../const';

const {
  CHANGE_SORT_TYPE,
  CHANGE_SORT_DIRECTION
} = ActionType;

const initialState = {
  type: null,
  direction: null
};

const sort = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SORT_TYPE:
      return extend(state, {
        type: action.payload,
        direction: state.direction === null ? DirectionSort.DEC : state.direction,
      });
    case CHANGE_SORT_DIRECTION:
      return extend(state, {
        direction: action.payload,
        type: state.type === null ? TypeSort.PRICE : state.type
      });
    default:
      return state;
  }
};

export {sort};
