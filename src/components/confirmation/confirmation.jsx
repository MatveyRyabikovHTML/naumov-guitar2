import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ModalWrapper from '../modal-wrapper/modal-wrapper';
import {setConfirmationModalClose} from '../../store/action';
import {AppRoute} from '../../const';

const Confirmation = ({closeModal}) => {
  return (
    <ModalWrapper block={`Confirmation`} title={`Товар успешно добавлен в корзину`} onModalClose={closeModal}>
      <div className="confirmation">
        <Link
          to={AppRoute.BASKET}
          className="confirmation__button confirmation__button--basket"
          aria-label="Перейти в корзину"
          onClick={closeModal}
        >
          Перейти в корзину
        </Link>
        <button
          className="confirmation__button confirmation__button--next"
          type="button"
          aria-label="Продолжить покупки"
          onClick={closeModal}
        >
          Продолжить покупки
        </button>
      </div>
    </ModalWrapper>
  );
};

Confirmation.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  closeModal() {
    dispatch(setConfirmationModalClose());
  },
});

export default connect(null, mapDispatchToProps)(Confirmation);
