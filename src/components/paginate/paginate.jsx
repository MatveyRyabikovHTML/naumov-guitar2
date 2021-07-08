import React from 'react';
import PropTypes from 'prop-types';

const INACTIVE_TAB_INDEX = `-1`;

const PaginateButton = {
  BACK: `back`,
  ONWARD: `onward`,
  MORE: `more`,
};

const Paginate = ({activePage, pageCount, onChangePage}) => {
  const isFirstActive = activePage === 0;
  const isLastActive = activePage + 1 === pageCount;
  const near = isFirstActive ? (activePage + 2) :
    isLastActive ? (pageCount - 1) : activePage + 1;
  const isNearActive = activePage === (near - 1);

  const handleItemClick = (evt) => {
    evt.preventDefault();

    if (evt.target.id === PaginateButton.BACK && !isFirstActive) {
      onChangePage(activePage - 1);
      return;
    }

    if (evt.target.id === PaginateButton.ONWARD && !isLastActive) {
      onChangePage(activePage + 1);
      return;
    }

    if (evt.target.id !== PaginateButton.MORE && evt.target.id !== PaginateButton.ONWARD) {
      onChangePage(+evt.target.id);
    }
  };

  const paginateItems = [
    {
      id: PaginateButton.BACK,
      key: `btnBack`,
      className: ` paginate__link--back`,
      title: `Назад`,
      isHidden: isFirstActive,
    },
    {
      id: 0,
      key: `first`,
      className: `${isFirstActive ? ` paginate__link--active` : ``}`,
      title: `1`,
      isHidden: false,
      tabIndex: isFirstActive ? INACTIVE_TAB_INDEX : ``,
    },
    {
      id: PaginateButton.MORE,
      key: `more-first`,
      className: ` paginate__link--more`,
      title: `...`,
      isHidden: !(activePage >= 3),
    },
    {
      id: activePage - 1,
      key: `left`,
      className: ``,
      title: near - 1,
      isHidden: !(activePage >= 2 && !(activePage === pageCount - 1)),
    },
    {
      id: (near - 1),
      key: `near`,
      className: `${isNearActive ? ` paginate__link--active` : ``}`,
      title: near,
      isHidden: !(pageCount > 2),
      tabIndex: isNearActive ? INACTIVE_TAB_INDEX : ``,
    },
    {
      id: activePage + 1,
      key: `right`,
      className: ``,
      title: near + 1,
      isHidden: activePage === 0 || pageCount <= 3 || (activePage >= pageCount - 2),
    },
    {
      id: PaginateButton.MORE,
      key: `more-last`,
      className: ` paginate__link--more`,
      title: `...`,
      isHidden: pageCount <= 3 || (activePage >= pageCount - 3) || (activePage === 1 && pageCount === 4),
    },
    {
      id: (pageCount - 1),
      key: `last`,
      className: `${isLastActive ? ` paginate__link--active` : ``}`,
      title: pageCount,
      isHidden: !(pageCount > 1),
      tabIndex: isLastActive ? INACTIVE_TAB_INDEX : ``,
    },
    {
      id: PaginateButton.ONWARD,
      key: `onward`,
      className: ` paginate__link--onward${isLastActive ? ` paginate__link--disabled` : ``}`,
      title: `Далее`,
      isHidden: false,
      tabIndex: isLastActive ? INACTIVE_TAB_INDEX : ``,
    },
  ];

  return (
    <ul className="paginate">
      {
        paginateItems.map(({id, key, className, title, isHidden, tabIndex}) => {
          if (isHidden) {
            return null;
          }
          return (
            !isHidden &&
            <li className="paginate__item" key={key}>
              {/*eslint-disable-next-line*/}
              <a
                className={`paginate__link${className}`}
                href="#"
                id={id}
                tabIndex={tabIndex}
                onClick={handleItemClick}
              >
                {title}
              </a>
            </li>
          );
        })
      }
    </ul>
  );
};

Paginate.propTypes = {
  activePage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
};

export default Paginate;
