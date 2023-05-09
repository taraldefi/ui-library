import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { DeleteModal } from './Modals';

export default {
  title: 'Modals',
  component: DeleteModal,
  argTypes: {
    title: 'string',
    isOpen: { control: 'boolean' },
    onClose: { action: 'onClose' }
  }
};

const Template = (args) => <DeleteModal {...args}></DeleteModal>;

export const deleteModal = Template.bind({});
deleteModal.args = {
  title: 'delete entity name',
  isOpen: true,
  onClose: action('onClose')
};
