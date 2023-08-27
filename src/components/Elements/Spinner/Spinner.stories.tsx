import { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';

const meta = {
  title: 'Components/Elements/Spinner',
  component: Spinner,
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};

export const SmSize: Story = {
  args: {
    size: 'sm',
  },
};

export const MdSize: Story = {
  args: {
    size: 'md',
  },
};

export const LgSize: Story = {
  args: {
    size: 'lg',
  },
};

export const XlSize: Story = {
  args: {
    size: 'xl',
  },
};

export const LightVariant: Story = {
  args: {
    variant: 'light',
  },
};

export const PrimaryVariant: Story = {
  args: {
    variant: 'primary',
  },
};
