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
  type?: 'linear' | 'radial';
  from?: string;
  to?: string;
  degree?: number;
};

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  gradient: Gradient;
  animate?: boolean;
  animateTo?: Gradient;
  animateDuration?: number;
}

function gradientGenerator(g: Gradient): string {
  if (g.type == 'radial') {
    return `radial-gradient(farthest-corner at top, ${g.from}, ${g.to})`;
  }

  return `linear-gradient(${g.degree}deg, ${g.from}, ${g.to})`;
}

export default function Text({
  gradient,
  animate,
  animateTo,
  animateDuration,
  ...props
}: Props) {
  if (gradient.degree == undefined) {
    gradient.degree = 90;
  }
  if (gradient.type == undefined) {
    gradient.type = 'radial';
  }

  if (animate && animateTo == undefined) {
    animateTo = {
      type: gradient.type,
      to: gradient.from,
      from: gradient.to,
    };
  }

  if (animateTo) {
    if (animateTo.type == undefined) {
      animateTo.type = gradient.type;
    }
    if (gradient.type !== animateTo.type) {
      throw new Error(
        '@carefully-coded/react-text-gradient: cannot animate between linear and radial gradients'
      );
    }
  }
  const startGrad = gradientGenerator(gradient);

  const springConfig = {
    loop: { reverse: true },
    from: {
      backgroundPosition: gradient.type == 'radial' ? '0% 75%' : 'auto',
      backgroundImage: startGrad,
      backgroundSize: gradient.type == 'radial' ? '150% 150%' : 'auto',
    },
    to: {
      backgroundPosition: gradient.type == 'radial' ? '0% 75%' : 'auto',
      backgroundImage: startGrad,
      backgroundSize: gradient.type == 'radial' ? '150% 150%' : 'auto',
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
        type: animateTo.type ?? gradient.type,
      }),
      backgroundPosition: gradient.type == 'radial' ? '100% 25%' : 'auto',
      backgroundSize: gradient.type == 'radial' ? '150% 150%' : 'auto',
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
