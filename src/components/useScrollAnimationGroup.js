import { useEffect, useRef, useState } from 'react';

export function useScrollAnimationGroup(count) {
  const refs = Array.from({ length: count }, () => useRef(null));
  const [visible, setVisible] = useState(Array(count).fill(false));

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry, idx) => {
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const updated = [...prev];
              updated[idx] = true;
              return updated;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => observer.disconnect();
  }, []);

  return [refs, visible];
}
