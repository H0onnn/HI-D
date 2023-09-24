import { useEffect, useRef } from 'react';
import { STATUS } from '../constants/server';

type status = keyof typeof STATUS;
type IObserverCallback = () => void;

const options = {
  root: null,
  rootMargin: '20px',
  threshold: 1,
};

export default function useObserver(callback: IObserverCallback, status?: status) {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting && status !== STATUS.LOADING) {
        callback();
      }
    }, options);

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, [callback, contentRef, status]);

  return contentRef;
}
