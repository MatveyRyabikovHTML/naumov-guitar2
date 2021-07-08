import {combineReducers} from 'redux';
import {data} from './data/data';
import {modal} from './modal/modal';
import {filter} from './filter/filter';
import {sort} from './sort/sort';
import {basket} from './basket/basket';


export const NameSpace = {
  DATA: `DATA`,
  MODAL: `MODAL`,
  FILTER: `FILTER`,
  SORT: `SORT`,
  BASKET: `BASKET`,
};

const {DATA, MODAL, FILTER, SORT, BASKET} = NameSpace;

export default combineReducers({
  [DATA]: data,
  [MODAL]: modal,
  [FILTER]: filter,
  [SORT]: sort,
  [BASKET]: basket,
});
