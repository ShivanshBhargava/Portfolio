import * as React from 'react';
import { useScroll, animated } from '@react-spring/web';
import './ScrollBars.css';

const X_LINES = 40;
const INITIAL_WIDTH = 40;

export default function ScrollBars({ containerRef }) {
  const { scrollYProgress } = useScroll({
    container: containerRef,
    default: {
      immediate: true,
    },
  });

  return (
    <div className="scroll-bars-container">
      <animated.div className="bar-container">
        {Array.from({ length: X_LINES }).map((_, i) => (
          <animated.div
            key={i}
            className="bar"
            style={{
              width: scrollYProgress.to(scrollP => {
                const percentilePosition = (i + 1) / X_LINES;
                return INITIAL_WIDTH / 4 + 80 * Math.cos(((percentilePosition - scrollP) * Math.PI) / 1.5) ** 32;
              }),
            }}
          />
        ))}
      </animated.div>
      <animated.div className="bar-container inverted">
        {Array.from({ length: X_LINES }).map((_, i) => (
          <animated.div
            key={i}
            className="bar"
            style={{
              width: scrollYProgress.to(scrollP => {
                const percentilePosition = (i + 1) / X_LINES;
                return INITIAL_WIDTH / 4 + 80 * Math.cos(((percentilePosition - (scrollP)) * Math.PI) / 1.5) ** 32;
              }),
            }}
          />
        ))}
      </animated.div>
    </div>
  );
} 