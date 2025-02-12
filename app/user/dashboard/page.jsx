"use client";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Link from "next/link";
import moment from "moment";
import { useState } from "react";
import { addDays } from "date-fns";
import { AppointmentModal } from "@/components/appointment-modal";

const localizer = momentLocalizer(moment);

const userAppointments = [
  {
    id: 1,
    title: "Dr. John Doe",
    start: addDays(new Date(), 2),
    end: addDays(new Date(), 2, 1),
  },
  {
    id: 2,
    title: "Dr. Jane Smith",
    start: addDays(new Date(), 5),
    end: addDays(new Date(), 5, 1),
  },
  {
    id: 3,
    title: "Dr. Rhayn Abner",
    start: addDays(new Date(), 6),
    end: addDays(new Date(), 6, 1),
  },
];

export default function UserDashboard() {
  // TODO: Find a way to transfer the saved data after booking the appointment in this component

  const [selectedDate, setSelectedDate] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSelectedSlot = ({ start }) => {
    selectedDate(start);
    setModalIsOpen(true);
  };

  const handleSelectEvent = (event) => {
    setSelectedDate(event.start);
    setModalIsOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-gray-600 font-bold mb-6 uppercase tracking-wider ">
        Your Appointments
      </h1>
      <div className="h-[600px]">
        <Calendar
          localizer={localizer}
          events={userAppointments}
          startAccessor="start"
          onSelectSlot={handleSelectedSlot}
          onSelectEvent={handleSelectEvent}
          endAccessor="end"
          className="bg-white rounded-lg p-4 shadow-md"
        />
      </div>
      <AppointmentModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        date={selectedDate}
        appointments={userAppointments.filter(
          (apt) => apt.start.toDateString() === selectedDate?.toDateString()
        )}
      />
      <div className="mt-8 ">
        <Link href="/" className="text-blue-500  hover:text-blue-700">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
