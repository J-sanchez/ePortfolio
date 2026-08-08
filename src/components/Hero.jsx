import { useState } from 'react';
import Reveal from './Reveal';

const HERO_PHOTOS = ['hero-glacier', 'hero-fjord', 'hero-dusk', 'hero-sunset'];

const Hero = () => {
  const [photo] = useState(
    () => HERO_PHOTOS[Math.floor(Math.random() * HERO_PHOTOS.length)]
  );

  return (
    <div className="relative min-h-dvh flex flex-col items-center justify-end overflow-hidden pt-40 md:pt-0">
      <picture>
        <source srcSet={`/${photo}.webp`} type="image/webp" />
        <img
          src={`/${photo}.jpg`}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>
      <div className="absolute inset-0 hero-photo-scrim" aria-hidden="true" />

      <Reveal
        as="div"
        className="relative max-w-6xl mx-auto w-full px-6 md:px-10"
      >
        <h1 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-text max-w-none">
          Hi there, I am Jonathan.
        </h1>
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-text-muted leading-relaxed">
          I run the{' '}
          <strong className="font-semibold italic text-beige">
            Environmental Protection and Compliance Software Portfolio
          </strong>{' '}
          at{' '}
          <strong className="font-semibold italic text-beige">
            The Los Alamos National Laboratory
          </strong>
          . I started in the field with paper, pen, and filing cabinets. Now I
          build and manage the software that is replacing them.
        </p>
        <p className="field-stamp mt-5 text-base md:text-lg text-accent">
          Filing cabinets are gone. Systems are live. What is next?
        </p>
      </Reveal>

      <a
        href="#about"
        aria-label="Scroll down to learn more"
        className="group relative mt-8 mb-8 md:mb-10 flex flex-col items-center gap-1 text-text-muted hover:text-accent transition-colors duration-200"
      >
        <span className="field-stamp text-[10px]">Scroll</span>
        <svg
          className="animate-scroll-cue"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </div>
  );
};

export default Hero;
