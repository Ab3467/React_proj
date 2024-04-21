// Alert.js
import React from 'react';

export default function Alert(props) {
  const { alert } = props;

  // Check if props.alert is not null or undefined before rendering the alert
  if (!alert) {
    return null;
  }

  // Determine the background color and text color based on the alert type and mode
  const backgroundColor = alert.type === 'Success' ? '#d4edda' : '#f8d7da';
  const textColor = alert.type === 'Success' ? '#155724' : '#721c24';

  return (
    <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert" style={{ backgroundColor, color: textColor }}>
      <strong>{alert.type}</strong>: {alert.msg}
    </div>
  );
}
