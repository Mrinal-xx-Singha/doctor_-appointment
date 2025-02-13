"use client";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Link from "next/link";
import moment from "moment";
import { useState } from "react";
import { AppointmentModal } from "@/components/appointment-modal";
import useAppointmentsStore from "@/lib/appointmentStore";

const localizer = momentLocalizer(moment);

export default function UserDashboard() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { appointments, removeAppointment } = useAppointmentsStore();

  const handleSelectedSlot = ({ start }) => {
    setSelectedDate(start);
    setModalIsOpen(true);
  };

  const handleSelectEvent = (event) => {
    setSelectedDate(event.start);
    setModalIsOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-gray-600 font-bold mb-6 uppercase tracking-wider px-2">
        Your Appointments
      </h1>
      <div className="h-[600px]">
        <Calendar
          localizer={localizer}
          events={appointments}
          startAccessor="start"
          endAccessor="end"
          selectable
          onSelectSlot={handleSelectedSlot}
          onSelectEvent={handleSelectEvent}
          className="bg-white rounded-lg p-4 shadow-md"
        />
      </div>
      <div className="mt-6 px-2">
        {/* Section to dispay the appointments  */}
        <h1 className="text-3xl text-gray-600 font-bold mb-6 uppercase tracking-wider px-2">
        Upcoming Appointments
      </h1>
        {appointments.length === 0 ? (
          <p>No appointments found.</p>
        ) : (
          <ul className="space-y-2">
            {appointments.map((appointment) => (
              <li
                key={appointment.id}
                className="flex justify-between items-center border p-4 rounded shadow"
              >
                <div>
                  <p className="font-semibold">{appointment.title}</p>
                  <p>
                    {moment(appointment.start).format("MMM D, YYYY h:mm A")} -{" "}
                    {moment(appointment.end).format("h:mm A")}
                  </p>
                </div>
                {/* adding the delete button */}
                <button
                  onClick={() => removeAppointment(appointment.id)}
                  className="px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <AppointmentModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        date={selectedDate}
        appointments={appointments.filter(
          (apt) =>
            selectedDate &&
            new Date(apt.start).toDateString() ===
              new Date(selectedDate).toDateString()
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
