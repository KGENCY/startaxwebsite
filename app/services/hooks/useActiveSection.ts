'use client';

import { useEffect, useState } from 'react';

interface Section {
  id: string;
  label: string;
}

export function useActiveSection(sections: Section[], defaultSection = '') {
  const [activeSection, setActiveSection] = useState(defaultSection);

  useEffect(() => {
    const handleScroll = () => {
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= 160) {
          setActiveSection(section.id);
          return;
        }
      }
      setActiveSection(defaultSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, defaultSection]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 140;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return { activeSection, scrollTo };
}
