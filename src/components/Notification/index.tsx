import React from 'react';
import clsx from 'clsx';
import styles from './Notification.module.css';

type NotificationProps = {
  show: boolean;
  message: string;
};

const Notification = ({ show, message }: NotificationProps) => {
  return (
    <div className={clsx(styles.notification, { [styles.show]: show })}>
      {message}
    </div>
  );
};

export default Notification;
