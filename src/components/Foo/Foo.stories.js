import React from 'react';
import Foo from './Foo';
//import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Custom/Foo',
  //decorators: [withKnobs],
  component: Foo,
  argTypes: {
    size: {
      description: 'overwritten description',
      table: {
        type: {
          summary: 'something short',
          detail: 'something really really long',
        },
      },
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    onClick: {
      control: {
        disable: true,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'some component _markdown_',
      },
    },
  },
};

const Template = (args) => <Foo {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'message',
};
