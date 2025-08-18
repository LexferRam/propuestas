
import { RefObject, useState, useEffect } from 'react';

const useIntersectionObserver = (
    elementRef,
    { threshold = 0.1, root = null, rootMargin = '0%' }
) => {
    const [entry, setEntry] = useState();

    const updateEntry = ([entry]) => {
        setEntry(entry);
    };

    useEffect(() => {
        const node = elementRef?.current;
        const hasIOSupport = !!window.IntersectionObserver;

        if (!hasIOSupport || !node) {
            return;
        }

        const observer = new IntersectionObserver(updateEntry, {
            threshold,
            root,
            rootMargin,
        });

        observer.observe(node);

        return () => observer.disconnect();
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [elementRef?.current, JSON.stringify(threshold), root, rootMargin]);

    return entry;
};

export default useIntersectionObserver;
