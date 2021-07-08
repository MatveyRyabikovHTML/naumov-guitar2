import React from 'react';
import PropTypes from 'prop-types';
import {useOverflowHidden} from '../../hooks/use-owerflow-hidden';
import {useEscapeButton} from '../../hooks/use-escape-button';
import {ReactComponent as CloseIcon} from '../../assets/img/svg/icon-close.svg';

const ModalWrapper = ({children, title, onModalClose}) => {
  const handleBlockClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      onModalClose();
    }
  };

  useOverflowHidden();
  useEscapeButton(onModalClose);

  return (
    <div className="modal" onClick={handleBlockClick}>
      <div className="modal__content">
        <div className="modal__wrapper">
          <h2 className="modal__title">{title}</h2>
          <button
            className="modal__button-close"
            type="button"
            aria-label="Закрыть окно"
            onClick={onModalClose}
          >
            <CloseIcon
              className="modal__button-icon"
              alt="Иконка крестик"
            />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

ModalWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired
};

export default ModalWrapper;
