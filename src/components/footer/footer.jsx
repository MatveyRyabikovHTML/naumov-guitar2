import React from 'react';
import Logo from '../logo/logo';
import Wrapper from '../wrapper/wrapper';
import {ReactComponent as PhoneIcon} from '../../assets/img/svg/icon-phone.svg';
import {ReactComponent as ClockIcon} from '../../assets/img/svg/icon-clock.svg';
import {CATALOG_LINKS, INFO_LINKS, SOCIAL_LINKS} from '../../const';

const FooterItem = ({ariaLabel, children}) => {
  return (
    <li className="footer__item">
      {/*eslint-disable-next-line*/}
      <a href="#" className="footer__link" aria-label={`На страницу ${ariaLabel}`}>{children}</a>
    </li>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <Wrapper name={`footer`}>
        <div className="footer__content-wrapper footer__content-wrapper--left">
          <Logo block={`footer`} />
          <ul className="footer__list footer__list--social">
            {
              SOCIAL_LINKS.map((item) => {
                const {ariaLabel, icon: Icon} = item;

                return (
                  <FooterItem key={ariaLabel} ariaLabel={ariaLabel}>
                    <Icon />
                  </FooterItem>
                );
              })
            }
          </ul>
        </div>
        <div className="footer__content-wrapper footer__content-wrapper--about">
          <h3 className="footer__title">О нас</h3>
          <p className="footer__description">Магазин гитар, музыкальных инструментов и гитарная мастерская в Санкт-Петербурге.</p>
          <p className="footer__description">Все инструменты проверены, отстроены и доведены до идеала!</p>
        </div>
        <div className="footer__content-wrapper footer__content-wrapper--catalog">
          <h3 className="footer__title">Каталог</h3>
          <ul className="footer__list">
            {
              CATALOG_LINKS.map((title) =>
                <FooterItem key={title} ariaLabel={title}>
                  {title}
                </FooterItem>
              )
            }
          </ul>
        </div>
        <div className="footer__content-wrapper footer__content-wrapper--info">
          <h3 className="footer__title">Информация</h3>
          <ul className="footer__list">
            {
              INFO_LINKS.map((title) =>
                <FooterItem key={title} ariaLabel={title}>
                  {title}
                </FooterItem>
              )
            }
          </ul>
        </div>
        <div className="footer__content-wrapper footer__content-wrapper--contacts">
          <h3 className="footer__title">Контакты</h3>
          <p className="footer__description">
            г. Санкт-Петербург, м. Невский проспект, ул. Казанская 6.
            <a href="tel:88125005050" className="footer__link footer__link--phone" aria-label="Номер телефона">
              <PhoneIcon className="footer__contacts-icon" />
              8-812-500-50-50
            </a>
          </p>
          <p className="footer__description">
            Режим работы:
            <br />
            <span className="footer__span">
              <ClockIcon className="footer__contacts-icon" />
              с 11:00 до 20:00,
            </span>
            <br />
            без выходных.</p>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
