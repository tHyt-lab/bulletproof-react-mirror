import { atom } from 'jotai';

export type Notification = {
  id: string;
  title: string;
  message?: string;
  type: 'success' | 'error' | 'warning' | 'info';
};

export const notificationAtom = atom([] as Notification[]);
