import {ReactComponent as MapIcon} from './assets/img/svg/icon-map.svg';
import {ReactComponent as SearchIcon} from './assets/img/svg/icon-search.svg';
import {ReactComponent as BasketIcon} from './assets/img/svg/icon-basket.svg';
import {ReactComponent as FacebookIcon} from './assets/img/svg/icon-facebook.svg';
import {ReactComponent as InstagramIcon} from './assets/img/svg/icon-instagram.svg';
import {ReactComponent as TwitterIcon} from './assets/img/svg/icon-twitter.svg';

export const STORE_BASKET_PREFIX = `guitar-shop-localstorage-basket`;
export const STORE_PROMO_CODE_PREFIX = `guitar-shop-localstorage-promo-code`;
export const STORE_VERSION = `v1`;
export const STORE_BASKET_NAME = `${STORE_BASKET_PREFIX}-${STORE_VERSION}`;
export const STORE_PROMO_CODE_NAME = `${STORE_PROMO_CODE_PREFIX}-${STORE_VERSION}`;

export const CARDS_PER_PAGE = 9;
export const FIRST_PAGE = 0;
export const RATING_STARS = [1, 2, 3, 4, 5];
export const MAX_GUITARS = 99;

export const CATALOG_LINKS = [`Акустические гитары`, `Классические гитары`, `Электрогитары`, `Бас-гитары`, `Акулеле`];
export const INFO_LINKS = [`Где купить?`, `Блог`, `Вопрос - ответ`, `Возврат`, `Сервис-центры`];
export const SOCIAL_LINKS = [
  {
    ariaLabel: `Facebook`,
    icon: FacebookIcon
  },
  {
    ariaLabel: `Instagram`,
    icon: InstagramIcon
  },
  {
    ariaLabel: `Twitter`,
    icon: TwitterIcon
  },
];

export const AppRoute = {
  ROOT: `/`,
  CATALOG: `/catalog`,
  BASKET: `/basket`,
};

export const ActionType = {
  ADD_DATA: `ADD_DATA`,
  CHANGE_PRODUCT_MODAL_OPEN: `CHANGE_PRODUCT_MODAL_OPEN`,
  CHANGE_PRODUCT_MODAL_CLOSE: `CHANGE_PRODUCT_MODAL_CLOSE`,
  MODAL_CONFIRMATION_OPEN: `MODAL_CONFIRMATION_OPEN`,
  MODAL_CONFIRMATION_CLOSE: `MODAL_CONFIRMATION_CLOSE`,
  CHANGE_FILTER_BY_PRICE: `CHANGE_FILTER_BY_PRICE`,
  CHANGE_OTHER_FILTERS: `CHANGE_OTHER_FILTERS`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  CHANGE_SORT_DIRECTION: `CHANGE_SORT_DIRECTION`,
  CHANGE_BASKET: `CHANGE_BASKET`,
  CHANGE_TOTAL: `CHANGE_TOTAL`,
  CHANGE_PROMO_CODE: `CHANGE_PROMO_CODE`,
};

export const Key = {
  ESCAPE: `Escape`,
  ESC: `Esc`,
};

export const PageTitle = {
  CATALOG: `Каталог`,
  BASKET: `Оформляем`,
  ERROR: `Страница не найдена`
};

export const AmountUpdateType = {
  INC: `INC`,
  DEC: `DEC`,
  ADD: `ADD`
};

export const TypeGuitar = {
  ACOUSTIC: `ACOUSTIC`,
  ELECTRIC: `ELECTRIC`,
  UKULELE: `UKULELE`,
};

export const TitleByType = {
  ACOUSTIC: `акустическая гитара`,
  ELECTRIC: `электрогитара`,
  UKULELE: `укулеле`,
};

export const TypePrice = {
  MIN: `MIN`,
  MAX: `MIN`
};

export const TypeFilterByPrice = {
  MIN: `min`,
  MAX: `max`,
};

export const TypeString = {
  FOUR: `FOUR`,
  SIX: `SIX`,
  SEVEN: `SEVEN`,
  TWELVE: `TWELVE`
};

export const TypeOtherFilter = {
  TYPE: `type`,
  STRINGS: `strings`,
};

export const TypeFilterByString = {
  FOUR: 4,
  SIX: 6,
  SEVEN: 7,
  TWELVE: 12
};

export const LabelTitle = {
  MIN: `Минимальная цена`,
  MAX: `Максимальная`,
  ACOUSTIC: `Акустические гитары`,
  ELECTRIC: `Электрогитары`,
  UKULELE: `Укулеле`,
};

export const OtherFilterName = {
  TYPE: `type`,
  STRINGS: `strings`,
};

export const TypeSort = {
  PRICE: `price`,
  COMMENTS: `comments`,
};

export const DirectionSort = {
  INC: `inc`,
  DEC: `dec`,
};

export const PromoCode = {
  GITARAHIT: `GITARAHIT`,
  SUPERGITARA: `SUPERGITARA`,
  GITARA2020: `GITARA2020`
};

export const PromoCodeValue = {
  GITARAHIT: 10,
  SUPERGITARA: 700,
  GITARA2020: {
    min: 3500,
    max: 30
  }
};

export const StringsAllowedForType = {
  [TitleByType.ACOUSTIC]: [
    TypeFilterByString.SIX,
    TypeFilterByString.SEVEN,
    TypeFilterByString.TWELVE
  ],
  [TitleByType.ELECTRIC]: [
    TypeFilterByString.FOUR,
    TypeFilterByString.SIX,
    TypeFilterByString.SEVEN
  ],
  [TitleByType.UKULELE]: [
    TypeFilterByString.FOUR
  ],
};

export const TypesAllowedForString = {
  [TypeFilterByString.FOUR]: [
    TitleByType.ELECTRIC,
    TitleByType.UKULELE
  ],
  [TypeFilterByString.SIX]: [
    TitleByType.ACOUSTIC,
    TitleByType.ELECTRIC,
  ],
  [TypeFilterByString.SEVEN]: [
    TitleByType.ACOUSTIC,
    TitleByType.ELECTRIC,
  ],
  [TypeFilterByString.TWELVE]: [
    TitleByType.ACOUSTIC,
  ],
};

export const NAVIGATION_ITEMS = [
  {
    name: `Каталог`,
    href: AppRoute.CATALOG,
    icon: null,
  },
  {
    name: `Где купить?`,
    href: AppRoute.ROOT,
    icon: null,
  },
  {
    name: `О компании`,
    href: AppRoute.ROOT,
    icon: null,
  },
  {
    name: `Сервис-центры`,
    href: AppRoute.ROOT,
    icon: null,
  },
];

export const NAVIGATION_USER_ITEMS = [
  {
    name: `Карта`,
    href: AppRoute.ROOT,
    icon: MapIcon,
  },
  {
    name: `Поиск`,
    href: AppRoute.ROOT,
    icon: SearchIcon,
  },
  {
    name: `Корзина`,
    href: AppRoute.BASKET,
    icon: BasketIcon,
  },
];
