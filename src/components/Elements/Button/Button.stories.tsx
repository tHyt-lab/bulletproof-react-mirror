import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta = {
  title: 'Components/Elements/Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Inverse: Story = {
  args: {
    variant: 'inverse',
    children: 'Inverse Button',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Danger Button',
  },
};

export const Loading: Story = {
  args: {
    children: 'Loading Button',
    isLoading: true,
  },
};

export const SmSize: Story = {
  args: {
    size: 'sm',
    children: 'sm size',
  },
};

export const MdSize: Story = {
  args: {
    size: 'md',
    children: 'md size',
  },
};

export const LgSize: Story = {
  args: {
    size: 'lg',
    children: 'lg size',
  },
};
