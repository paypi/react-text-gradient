import React from 'react';
import { useSpring, animated } from 'react-spring';

const containerStyle = {
  WebkitBackgroundClip: 'text',
  MozBackgroundClip: 'text',
  MozTextFillColor: 'transparent',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block',
  backgroundPositionX: 'right',
  backgroundPositionY: 'top',
};

export type Gradient = {
  radial?: boolean;
  from?: string;
  to?: string;
  degree?: number;
};

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  gradient: Gradient;
  animateTo?: Gradient;
  animateDuration?: number;
}

function gradientGenerator(g: Gradient): string {
  if (g.radial) {
    return `radial-gradient(farthest-corner at top, ${g.from}, ${g.to})`;
  }

  return `linear-gradient(${g.degree}deg, ${g.from}, ${g.to})`;
}

export default function Text({
  gradient,
  animateTo,
  animateDuration,
  ...props
}: Props) {
  if (!gradient.degree) {
    gradient.degree = 90;
  }
  if (gradient.radial == undefined) {
    gradient.radial = true;
  }

  const startGrad = gradientGenerator(gradient);

  const springConfig = {
    loop: { reverse: true },
    from: {
      backgroundPosition: gradient.radial ? '0% 75%' : 'auto',
      backgroundImage: startGrad,
      backgroundSize: gradient.radial ? '150% 150%' : 'auto',
    },
    to: {
      backgroundPosition: gradient.radial ? '0% 75%' : 'auto',
      backgroundImage: startGrad,
      backgroundSize: gradient.radial ? '150% 150%' : 'auto',
    },
    config: {
      duration: animateDuration ?? 4000,
    },
  };

  if (animateTo) {
    springConfig.to = {
      backgroundImage: gradientGenerator({
        degree: animateTo.degree ?? gradient.degree,
        from: animateTo.from ?? gradient.from,
        to: animateTo.to ?? gradient.to,
        radial: animateTo.radial ?? gradient.radial,
      }),
      backgroundPosition: gradient.radial ? '100% 25%' : 'auto',
      backgroundSize: gradient.radial ? '150% 150%' : 'auto',
    };
  }

  const styles = useSpring(springConfig);
  return (
    <animated.div
      {...props}
      style={{ ...containerStyle, ...styles, ...props.style }}
    />
  );
}
