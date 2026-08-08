import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * React Router doesn't reset scroll position on navigation -- without this,
 * clicking into a sub-page keeps whatever scroll position the previous page
 * was at. Mounted once inside the Router; resets to top on every route change.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
