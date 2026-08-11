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
    // html has scroll-behavior: smooth globally (for the Hero's #about anchor
    // link), which also hijacks this reset and animates it. If the previous
    // page was scrolled far down, that animation can get interrupted by the
    // new page's content mounting, leaving the scroll stuck mid-page instead
    // of at the top. Force an instant jump here, then restore smooth scroll.
    const html = document.documentElement;
    const previousBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    html.style.scrollBehavior = previousBehavior;
  }, [pathname]);

  return null;
};

export default ScrollToTop;
