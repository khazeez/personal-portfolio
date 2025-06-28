// components/MouseGlow.tsx
'use client';
import { useEffect } from 'react';


export default function MouseGlow() {
  useEffect(() => {
    const glow = document.createElement('div');
    glow.id = 'mouse-glow';
    document.body.appendChild(glow);

    const move = (e: MouseEvent) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };
    window.addEventListener('mousemove', move);

    return () => {
      window.removeEventListener('mousemove', move);
      glow.remove();
    };
  }, []);

  return null; // hanya side‑effect, tak merender apa‑apa
}
