import Reveal from './Reveal';

/**
 * One consistent treatment for Jonathan's own photography, reused across
 * About, Resume, Education, and the case study pages: rounded corners,
 * a thin border matching the card system, webp with a jpg fallback.
 * `aspect` controls the crop per placement (a wide header banner needs a
 * different ratio than a compact accent next to prose).
 */
const PhotoAccent = ({ name, alt, aspect = 'aspect-[16/9]', delay = 0, className = '' }) => (
  <Reveal delay={delay} className={className}>
    <picture>
      <source srcSet={`/photos/${name}.webp`} type="image/webp" />
      <img
        src={`/photos/${name}.jpg`}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`w-full ${aspect} object-cover rounded-xl border border-border`}
      />
    </picture>
  </Reveal>
);

export default PhotoAccent;
