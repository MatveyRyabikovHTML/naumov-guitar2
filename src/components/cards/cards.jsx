import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import CardsItem from '../cards-item/cards-item';
import Paginate from '../paginate/paginate';
import Sort from '../sort/sort';
import {CARDS_PER_PAGE, FIRST_PAGE} from '../../const';
import {getFilteredByPrice} from '../../store/selectors';
import {guitarsData} from '../../prop-types/prop-types';

const Cards = ({getData}) => {
  const [pageNumber, setPageNumber] = useState(FIRST_PAGE);

  const pagesVisited = pageNumber * CARDS_PER_PAGE;
  const pageCount = Math.ceil(getData.length / CARDS_PER_PAGE);

  useEffect(() => {
    if ((pageNumber + 1) > pageCount) {
      setPageNumber(FIRST_PAGE);
    }
  }, [pageNumber, pageCount]);

  return (
    <section className="cards">
      <Sort/>
      {
        !getData.length ? <p style={{margin: `auto`}}>Товара нет в наличии</p> :
          <>
            <ul className="cards__list">
              {
                getData
                  .slice(pagesVisited, pagesVisited + CARDS_PER_PAGE)
                  .map(({id, name, comments, price, img}, index) =>
                    <CardsItem
                      key={name + index}
                      id={id}
                      name={name}
                      comments={comments}
                      price={price}
                      img={img}
                    />
                  )
              }
            </ul>
            <Paginate activePage={pageNumber} pageCount={pageCount} onChangePage={setPageNumber}/>
          </>
      }
    </section>
  );
};

Cards.propTypes = {
  getData: guitarsData.isRequired,
};

const mapStateToProps = (store) => ({
  getData: getFilteredByPrice(store),
});

export default connect(mapStateToProps)(Cards);
