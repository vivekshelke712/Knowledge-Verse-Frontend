import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { addDays } from "date-fns";
import enUS from "date-fns/locale/en-US";
const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const CalendarPage = () => {
  const [events, setEvents] = useState([
    {
      title: "Team Meeting",
      start: new Date(),
      end: addDays(new Date(), 1),
    },
    {
      title: "Certification Exam",
      start: new Date(),
      end: new Date(),
    },
  ]);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt("Enter your event title:");
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">
        📅 Your Personal Knowledge Calendar
      </h1>
      <p className="text-gray-600 mb-4">
        Track your certifications, learning goals, hackathons, mentorship calls
        and more — all in one place. Click and drag on the calendar to add
        events.
      </p>
      <div className="h-[600px] border border-gray-200 rounded-lg shadow-lg p-4 bg-gray-50">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectSlot={handleSelect}
          style={{ height: "100%" }}
          className="rounded-lg"
        />
      </div>
    </div>
  );
};

export default CalendarPage;
