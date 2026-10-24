import React from 'react';
import Image from 'next/image';
import styles from './CharacterRoster.module.css';

interface FrameProps {
  image: string;
  name: string;
  objectPosition?: string;
}

// 1. Top-Left: Green Rounded Rectangular Frame with White Inner Border
export const GreenRectFrame: React.FC<FrameProps> = ({ image, name, objectPosition }) => {
  return (
    <div className={styles.greenFrameContainer}>
      <div className={styles.greenOuterBorder}>
        <div className={styles.whiteInnerMat}>
          <div className={styles.imageClip}>
            <Image
              src={image}
              alt={name}
              fill
              className={styles.frameImg}
              style={{ objectPosition: objectPosition || 'center' }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. Top-Middle: Cyan Scalloped Postage Stamp Frame (Square)
export const CyanStampFrame: React.FC<FrameProps> = ({ image, name, objectPosition }) => {
  // SVG Scalloped Postage Stamp Path
  const stampPath = `
    M 24 24
    Q 38 10 52 24 Q 66 10 80 24 Q 94 10 108 24 Q 122 10 136 24 Q 150 10 164 24 Q 178 10 192 24 Q 206 10 220 24 Q 234 10 248 24 Q 262 10 276 24 Q 290 10 304 24
    Q 318 38 304 52 Q 318 66 304 80 Q 318 94 304 108 Q 318 122 304 136 Q 318 150 304 164 Q 318 178 304 192 Q 318 206 304 220 Q 318 234 304 248 Q 318 262 304 276 Q 318 290 304 304
    Q 290 318 276 304 Q 262 318 248 304 Q 234 318 220 304 Q 206 318 192 304 Q 178 318 164 304 Q 150 318 136 304 Q 122 318 108 304 Q 94 318 80 304 Q 66 318 52 304 Q 38 318 24 304
    Q 10 290 24 276 Q 10 262 24 248 Q 10 234 24 220 Q 10 206 24 192 Q 10 178 24 164 Q 10 150 24 136 Q 10 122 24 108 Q 10 94 24 80 Q 10 66 24 52 Q 10 38 24 24
    Z
  `;

  return (
    <div className={styles.stampFrameContainer}>
      <svg
        viewBox="0 0 328 328"
        className={styles.stampSvgBg}
        preserveAspectRatio="none"
      >
        <filter id="cyanStampShadow" x="-10%" y="-10%" width="125%" height="125%">
          <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#00A3D7" floodOpacity="0.32" />
        </filter>
        <path d={stampPath} fill="#00A3D7" filter="url(#cyanStampShadow)" />
      </svg>

      <div className={styles.stampContentWrapper}>
        <div className={styles.imageClip}>
          <Image
            src={image}
            alt={name}
            fill
            className={styles.frameImg}
            style={{ objectPosition: objectPosition || 'center' }}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
};

// 3. Top-Right: Hot Pink Smooth Oval Frame
export const PinkOvalFrame: React.FC<FrameProps> = ({ image, name, objectPosition }) => {
  return (
    <div className={styles.pinkOvalContainer}>
      <div className={styles.pinkOvalBorder}>
        <div className={styles.ovalImageClip}>
          <Image
            src={image}
            alt={name}
            fill
            className={styles.frameImg}
            style={{ objectPosition: objectPosition || 'center' }}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
};

// 4. Bottom-Left: Blue Wide-Mat Gallery Frame
export const BlueMatFrame: React.FC<FrameProps> = ({ image, name, objectPosition }) => {
  return (
    <div className={styles.blueMatContainer}>
      <div className={styles.blueOuterBorder}>
        <div className={styles.blueWideMat}>
          <div className={styles.imageClip}>
            <Image
              src={image}
              alt={name}
              fill
              className={styles.frameImg}
              style={{ objectPosition: objectPosition || 'center' }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// 5. Bottom-Middle: Sunny Golden-Orange Rectangular Frame
export const OrangeRectFrame: React.FC<FrameProps> = ({ image, name, objectPosition }) => {
  return (
    <div className={styles.orangeFrameContainer}>
      <div className={styles.orangeOuterBorder}>
        <div className={styles.orangeInnerBorder}>
          <div className={styles.imageClip}>
            <Image
              src={image}
              alt={name}
              fill
              className={styles.frameImg}
              style={{ objectPosition: objectPosition || 'center' }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// 6. Bottom-Right: Purple Scalloped Petal Oval Frame with Dotted Mat
export const PurplePetalOvalFrame: React.FC<FrameProps> = ({ image, name, objectPosition }) => {
  // Generate smooth 26-petal scalloped ellipse path
  const petals = 24;
  const cx = 175;
  const cy = 135;
  const rx = 152;
  const ry = 112;
  const amp = 7;
  const points: { x: number; y: number }[] = [];
  const steps = petals * 4;

  for (let i = 0; i <= steps; i++) {
    const theta = (i / steps) * 2 * Math.PI;
    const rOffset = amp * Math.cos(petals * theta);
    const x = cx + (rx + rOffset) * Math.cos(theta);
    const y = cy + (ry + rOffset) * Math.sin(theta);
    points.push({ x, y });
  }

  let petalPath = `M ${points[0].x.toFixed(2)} ${points[0].y.toFixed(2)}`;
  for (let i = 1; i < points.length; i++) {
    petalPath += ` L ${points[i].x.toFixed(2)} ${points[i].y.toFixed(2)}`;
  }
  petalPath += ' Z';

  return (
    <div className={styles.purplePetalContainer}>
      <svg
        viewBox="0 0 350 270"
        className={styles.petalSvgBg}
        preserveAspectRatio="none"
      >
        <filter id="purplePetalShadow" x="-10%" y="-10%" width="125%" height="125%">
          <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#9C60CD" floodOpacity="0.3" />
        </filter>
        <path d={petalPath} fill="#A574CE" filter="url(#purplePetalShadow)" />
        {/* White Inner Matting Ring */}
        <ellipse cx="175" cy="135" rx="128" ry="90" fill="#FFFFFF" />
        {/* Delicate Purple Dotted Accent Ring */}
        <ellipse
          cx="175"
          cy="135"
          rx="124"
          ry="86"
          fill="none"
          stroke="#A574CE"
          strokeWidth="2.5"
          strokeDasharray="4 4"
        />
      </svg>

      <div className={styles.petalContentWrapper}>
        <div className={styles.petalOvalImageClip}>
          <Image
            src={image}
            alt={name}
            fill
            className={styles.frameImg}
            style={{ objectPosition: objectPosition || 'center' }}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      </div>
    </div>
  );
};
