import React, { useState } from "react";
import { Bell, X } from "lucide-react";

export default function NotificationCard() {
  const [visible, setVisible] = useState(true);

  // Notification properties
  const notification = {
    title: "New Message",
    message: "You have a new message from John Doe.",
    time: "2 mins ago",
    type: "info", // success, error, warning
  };

  const typeStyles = {
    success: "bg-green-100 text-green-800 border-green-300",
    error: "bg-red-100 text-red-800 border-red-300",
    info: "bg-blue-100 text-blue-800 border-blue-300",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
  };

  if (!visible) return null;

  return (
    <div
      className={`flex items-start p-4 border rounded-2xl shadow-lg ${
        typeStyles[notification.type] || typeStyles.info
      }`}
    >
      {/* Icon */}
      <div className="mr-4">
        <Bell
          className={`w-6 h-6 ${typeStyles[notification.type]?.split(" ")[1]}`}
        />
      </div>

      {/* Content */}
      <div className="flex-grow">
        <h4 className="font-semibold text-lg">{notification.title}</h4>
        <p className="text-sm">{notification.message}</p>
        <span className="text-xs text-gray-500">{notification.time}</span>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setVisible(false)}
        className="ml-4 text-gray-500 hover:text-gray-700"
        aria-label="Close Notification"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}
