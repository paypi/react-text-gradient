import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Text from '../components/Text';
import styled from 'styled-components';

const Inner = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, Roboto, Segoe UI, Noto Sans,
    Ubuntu, Cantarell, Helvetica Neue, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, Segoe UI Symbol, Noto Color emoji;
  font-weight: 800;
`;

export default {
  title: 'Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

export const Primary: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>
    <Inner>{args.children}</Inner>
  </Text>
);

Primary.args = {
  children: 'CHANGE THE WORLD, ONE GRADIENT TEXT COMPONENT AT A TIME',
  gradient: {
    from: '#818CF8',
    to: '#5B21B6',
  },
  animate: true,
};

export const Radial: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>
    <Inner>{args.children}</Inner>
  </Text>
);

Radial.args = {
  children: 'CHANGE THE WORLD, ONE LINE AT A TIME',
  gradient: {
    from: '#818CF8',
    to: '#5B21B6',
  },
  animate: true,
  animateDuration: 800,
};

export const Teal: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>
    <Inner>{args.children}</Inner>
  </Text>
);

Teal.args = {
  children: 'CHANGE THE WORLD, ONE LINE AT A TIME',
  gradient: {
    from: 'rgb(59 238 221)',
    to: 'rgb(33 148 182)',
  },
};

export const MultipleChildren: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>
    <Inner>{args.children}</Inner>
    <Inner>{args.children}</Inner>
  </Text>
);

MultipleChildren.args = {
  children: 'CHANGE THE WORLD, ONE LINE AT A TIME',
  gradient: {
    from: 'rgb(59 238 221)',
    to: 'rgb(33 148 182)',
  },
};
