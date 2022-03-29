import React from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";

const HomeScheduler = () => {
  const events = [{ title: "today's event", date: new Date() }];
  return (
    <FullCalendar
      plugins={[timeGridPlugin]}
      initialView="timeGridWeek"
      allDaySlot={false}
      dayHeaders={false}
      customButtons={false}
      selectable={"true"}
      editable={true}
      selectAllow={true}
      titleFormat={""}
      slotLabelFormat={{ hour: "numeric", minute: "2-digit" }}
    />
  );
};

export default HomeScheduler;
