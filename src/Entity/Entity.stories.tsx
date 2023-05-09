// Generated with util/create-component.js
import { ComponentStory } from '@storybook/react';
import React from 'react';
import { Entity } from './Entity';

export default {
  title: 'Entity'
};

const Template: ComponentStory<typeof Entity> = (args) => <Entity {...args} />;

export const EntityCard = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
const data = {
  id: 1,
  image: '/assets/logo.svg',
  title: 'Ullrich Weigel',
  registrationNo: 1,
  products: 25,
  applications: 25
};

EntityCard.args = {
  entityData: data
};
