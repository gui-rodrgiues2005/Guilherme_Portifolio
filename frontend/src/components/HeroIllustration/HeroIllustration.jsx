import './HeroIllustration.scss';

const BADGES = [
  { label: 'React', variant: 'light', position: 'top-left' },
  { label: 'C#', variant: 'light', position: 'top-right' },
  { label: 'PostgreSQL', variant: 'solid', position: 'bottom-left' },
];

function HeroIllustration() {
  return (
    <div className="hero-illustration" aria-hidden="true">
      <svg
        className="hero-illustration__svg"
        viewBox="0 0 480 420"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle className="hero-illustration__glow" cx="380" cy="70" r="110" />
        <circle className="hero-illustration__glow" cx="60" cy="360" r="80" />

        <g className="hero-illustration__window" transform="rotate(-4 240 210)">
          <rect x="80" y="60" width="320" height="240" rx="16" />
          <circle className="hero-illustration__dot" cx="106" cy="84" r="4" />
          <circle className="hero-illustration__dot" cx="122" cy="84" r="4" />
          <circle className="hero-illustration__dot" cx="138" cy="84" r="4" />
          <line className="hero-illustration__rule" x1="80" y1="100" x2="400" y2="100" />

          <rect className="hero-illustration__line hero-illustration__line--accent" x="102" y="122" width="100" height="8" rx="4" />
          <rect className="hero-illustration__line" x="102" y="142" width="170" height="8" rx="4" />
          <rect className="hero-illustration__line" x="102" y="162" width="136" height="8" rx="4" />
          <rect className="hero-illustration__line hero-illustration__line--soft" x="118" y="182" width="152" height="8" rx="4" />
          <rect className="hero-illustration__line hero-illustration__line--accent-soft" x="118" y="202" width="76" height="8" rx="4" />
          <rect className="hero-illustration__line" x="102" y="222" width="118" height="8" rx="4" />
          <rect className="hero-illustration__line hero-illustration__line--soft" x="102" y="242" width="188" height="8" rx="4" />
        </g>
      </svg>

      {BADGES.map((badge) => (
        <span
          key={badge.label}
          className={`hero-illustration__badge hero-illustration__badge--${badge.variant} hero-illustration__badge--${badge.position}`}
        >
          {badge.label}
        </span>
      ))}
    </div>
  );
}

export default HeroIllustration;