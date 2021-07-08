import {useEffect} from 'react';

export const useOverflowHidden = (flag = true) => {
  useEffect(() => {
    if (flag) {
      document.body.style.overflow = `hidden`;

      return () => {
        document.body.style.overflow = `auto`;
      };
    }
  }, [flag]);
};
