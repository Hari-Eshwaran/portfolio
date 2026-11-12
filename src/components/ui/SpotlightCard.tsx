import type { HTMLAttributes, MouseEvent } from 'react';

/** A card with a soft accent glow that follows the cursor. */
const SpotlightCard = ({
  className = '',
  children,
  onMouseMove,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => {
  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    el.style.setProperty('--my', `${event.clientY - rect.top}px`);
    onMouseMove?.(event);
  };

  return (
    <div {...rest} onMouseMove={handleMouseMove} className={`card spotlight ${className}`}>
      {children}
    </div>
  );
};

export default SpotlightCard;
