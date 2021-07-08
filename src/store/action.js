import {ActionType} from '../const';

const {
  CHANGE_PRODUCT_MODAL_OPEN,
  CHANGE_PRODUCT_MODAL_CLOSE,
  MODAL_CONFIRMATION_OPEN,
  MODAL_CONFIRMATION_CLOSE,
  CHANGE_FILTER_BY_PRICE,
  CHANGE_OTHER_FILTERS,
  CHANGE_SORT_TYPE,
  CHANGE_SORT_DIRECTION,
  CHANGE_BASKET,
  CHANGE_TOTAL,
  CHANGE_PROMO_CODE
} = ActionType;

export const setChangeProductModalOpen = (id) => ({
  type: CHANGE_PRODUCT_MODAL_OPEN,
  payload: id,
});

export const setChangeProductModalClose = () => ({
  type: CHANGE_PRODUCT_MODAL_CLOSE,
});

export const setConfirmationModalOpen = () => ({
  type: MODAL_CONFIRMATION_OPEN,
});

export const setConfirmationModalClose = () => ({
  type: MODAL_CONFIRMATION_CLOSE,
});

export const setFilterByPrice = (data) => ({
  type: CHANGE_FILTER_BY_PRICE,
  payload: data,
});

export const setOtherFilters = (data) => ({
  type: CHANGE_OTHER_FILTERS,
  payload: data,
});

export const setSortType = (type) => ({
  type: CHANGE_SORT_TYPE,
  payload: type,
});

export const setSortDirection = (direction) => ({
  type: CHANGE_SORT_DIRECTION,
  payload: direction,
});

export const setBasket = (data) => ({
  type: CHANGE_BASKET,
  payload: data,
});

export const setTotalCost = (totalCost) => ({
  type: CHANGE_TOTAL,
  payload: totalCost,
});

export const setPromoCode = (promoCode) => ({
  type: CHANGE_PROMO_CODE,
  payload: promoCode,
});
