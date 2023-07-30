import { useState, useEffect } from 'react';

/** ******************************************************************
Custom React hook to track the current scroll position of the page.
@returns {number} The current scroll position in pixels.
******************************************************************** */

export const useCurrentScroll = (): number => {
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setCurrentPosition(window.scrollY);

    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return currentPosition;
};
