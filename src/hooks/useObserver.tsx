import { useEffect, useRef } from 'react';
import { STATUS } from '../constants/server';

type status = keyof typeof STATUS;
type IObserverCallback = () => void;

const options = {
  root: null,
  rootMargin: '1px',
  threshold: 0.1,
};

export default function useObserver(callback: IObserverCallback, status?: status) {
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback();
      }
    }, options);

    observer.observe(contentRef.current);

    return () => {
      observer.disconnect();
    };
  }, [callback, contentRef, status]);

  return contentRef;
}
