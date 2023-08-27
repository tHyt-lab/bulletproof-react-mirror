import { notificationAtom } from '@/stores/notifications';
import { useAtom } from 'jotai';
import { Notification } from './Notification';

export const Notifications = () => {
  const [notifications, setNotifications] = useAtom(notificationAtom);

  return (
    <div
      aria-label="assertive"
      className="z-50 flex flex-col fixed inset-0 space-y-4 items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
    >
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          notification={notification}
          onDismiss={(id) => {
            setNotifications((notifications) => notifications.filter((n) => n.id !== id));
          }}
        />
      ))}
    </div>
  );
};
