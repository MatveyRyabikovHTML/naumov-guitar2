import PropTypes from "prop-types";

const {arrayOf, shape, number, string} = PropTypes;

export const guitarImg = shape({
  big: string.isRequired,
  small: string.isRequired,
  retinaBig: string.isRequired,
  retinaSmall: string.isRequired,
  webp: string.isRequired,
  webpRetina: string.isRequired,
  webpSmall: string.isRequired,
  webpRetinaSmall: string.isRequired,
});

export const guitar = shape({
  id: number.isRequired,
  vendorCode: string.isRequired,
  name: string.isRequired,
  type: string.isRequired,
  comments: number.isRequired,
  strings: number.isRequired,
  price: number.isRequired,
  img: guitarImg.isRequired,
});

export const guitarsData = arrayOf(guitar);

export const basketData = arrayOf(shape({
  id: number.isRequired,
  vendorCode: string.isRequired,
  amount: number.isRequired,
}));

export const filters = shape({
  type: arrayOf(string).isRequired,
  strings: arrayOf(number).isRequired,
});

export const priceFilter = shape({
  min: number.isRequired,
  max: number.isRequired,
});
