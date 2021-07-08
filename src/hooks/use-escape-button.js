import {useEffect, useCallback} from 'react';
import {Key} from '../const';

export const useEscapeButton = (callback) => {
  const handleEscapeDown = useCallback((evt) => {
    if (evt.key === Key.ESCAPE || evt.key === Key.ESC) {
      callback();
    }
  }, [callback]);

  useEffect(() => {
    document.addEventListener(`keydown`, handleEscapeDown);

    return () => document.removeEventListener(`keydown`, handleEscapeDown);
  }, [handleEscapeDown]);
};
