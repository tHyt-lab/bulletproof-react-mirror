import { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';

const meta = {
  title: 'Components/Elements/Link',
  component: Link,
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: 'Default Link',
  },
};
