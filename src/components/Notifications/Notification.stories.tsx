import { Meta, StoryObj } from '@storybook/react';
import { Notification } from './Notification';

const meta = {
  title: 'Components/Notifications',
  component: Notification,
  parameters: {
    controls: { expanded: true },
  },
} satisfies Meta<typeof Notification>;

export default meta;

type Story = StoryObj<typeof Notification>;

export const Info: Story = {
  args: {
    notification: {
      id: '1',
      title: 'Info',
      message: 'This is an info message',
      type: 'info',
    },
    onDismiss: (id) => {
      window.alert(`Dismissed notification ${id}`);
    },
  },
};

export const Success: Story = {
  args: {
    notification: {
      id: '2',
      title: 'Success',
      message: 'This is a success message',
      type: 'success',
    },
    onDismiss: (id) => {
      window.alert(`Dismissed notification ${id}`);
    },
  },
};

export const Warning: Story = {
  args: {
    notification: {
      id: '3',
      title: 'Warning',
      message: 'This is a warning message',
      type: 'warning',
    },
    onDismiss: (id) => {
      window.alert(`Dismissed notification ${id}`);
    },
  },
};

export const Error: Story = {
  args: {
    notification: {
      id: '4',
      title: 'Error',
      message: 'This is an error message',
      type: 'error',
    },
    onDismiss: (id) => {
      window.alert(`Dismissed notification ${id}`);
    },
  },
};
