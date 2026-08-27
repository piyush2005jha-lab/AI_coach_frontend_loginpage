import { useState } from "react";

export default function NotificationsCard() {
  const [notifications, setNotifications] =
    useState({
      mocks: true,
      performance: true,
      features: false,
    });

  const toggle = (key) => {
    setNotifications((current) => ({
      ...current,
      [key]: !current[key],
    }));
  };

  return (
    <section className="settings-card notifications-card">

      <div className="settings-card-heading">

        <div className="settings-card-icon">
          ♧
        </div>

        <div>

          <h2>
            Notifications
          </h2>

          <p>
            Manage how you receive updates.
          </p>

        </div>

      </div>


      <div className="notification-list">

        <NotificationRow
          title="Mock reminders"
          description="Get reminded about your upcoming mocks"
          enabled={notifications.mocks}
          onClick={() => toggle("mocks")}
        />

        <NotificationRow
          title="Performance updates"
          description="Receive alerts about your performance insights"
          enabled={notifications.performance}
          onClick={() => toggle("performance")}
        />

        <NotificationRow
          title="New features & tips"
          description="Updates about new features and preparation tips"
          enabled={notifications.features}
          onClick={() => toggle("features")}
        />

      </div>


      <div className="frequency-row">

        <span>
          Notification frequency
        </span>

        <button className="select-button">
          Daily
          <span>⌄</span>
        </button>

      </div>

    </section>
  );
}


function NotificationRow({
  title,
  description,
  enabled,
  onClick,
}) {
  return (
    <div className="notification-row">

      <div>

        <strong>
          {title}
        </strong>

        <p>
          {description}
        </p>

      </div>

      <button
        type="button"
        className={`toggle ${
          enabled ? "on" : ""
        }`}
        onClick={onClick}
      >

        <span />

      </button>

    </div>
  );
}