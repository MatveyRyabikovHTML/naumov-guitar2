import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ReactComponent as StarIcon} from '../../assets/img/svg/icon-star.svg';
import {ReactComponent as ButtonIcon} from '../../assets/img/svg/icon-cart-button.svg';
import {guitarImg} from '../../prop-types/prop-types';
import {setChangeProductModalOpen} from '../../store/action';
import {splittingDigits} from '../../utils';
import {RATING_STARS} from '../../const';

const CardsItem = ({id, name, comments, price, img, openModal}) => {
  return (
    <li className="cards__item">
      <picture>
        <source
          type="image/webp"
          srcSet={`${img.webp} 1x, ${img.webpRetina} 2x`}
        />
        <img
          className="cards__img"
          src={img.big}
          srcSet={`${img.retinaBig} 2x`}
          width="68"
          height="190"
          alt={name}
        />
      </picture>
      <div className="cards__rating rating">
        <ul className="rating__list">
          {
            RATING_STARS.map((item) =>
              <li className="rating__item" key={item}>
                <StarIcon />
              </li>
            )
          }
        </ul>
        <span className="rating__counter">{comments}</span>
      </div>
      <div className="cards__details details">
        <h3 className="details__title">{name}</h3>
        <p className="details__price">{splittingDigits(price)}<span>&#8381;</span></p>
      </div>
      <ul className="cards__buttons">
        <li className="cards__buttons-item">
          {/*eslint-disable-next-line*/}
          <a className="cards__button" href="#" aria-label="Подробнее">Подробнее</a>
        </li>
        <li className="cards__buttons-item">
          <button
            className="cards__button cards__button--orange"
            type="button"
            aria-label="В корзину"
            onClick={() => openModal(id)}
          >
            <ButtonIcon />
            Купить
          </button>
        </li>
      </ul>
    </li>
  );
};

CardsItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  img: guitarImg.isRequired,
  openModal: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  openModal(id) {
    dispatch(setChangeProductModalOpen(id));
  },
});

export default connect(null, mapDispatchToProps)(CardsItem);
