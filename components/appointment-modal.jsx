"use client";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { format } from "date-fns";

export function AppointmentModal({
  isOpen,
  onClose,
  doctorName,
  date,
  appointments = [],
}) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment booked:", {
      doctorName,
      date: selectedDate,
      time: selectedTime,
    });
    alert("Appointment booked successfully!");
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Modal Content */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-sm rounded bg-white p-6  shadow-lg">
          <DialogTitle className="text-lg font-medium mb-4">
            {date
              ? `Appointments for ${format(date, "MMMM d, yyyy")}`
              : `Book Appointment with ${doctorName}`}
          </DialogTitle>

          {/* If appointments exist for a date */}
          {date && appointments.length > 0 ? (
            <ul className="space-y-2">
              {appointments.map((appointment) => (
                <li key={appointment.id} className="border-b pb-2">
                  <p className="font-semibold">{appointment.title}</p>
                  <p>
                    {format(appointment.start, "h:mm a")} -{" "}
                    {format(appointment.end, "h:mm a")}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <form onSubmit={handleSubmit} className="mt-4">
              <div className="mb-4">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700 "
                >
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm "
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-gray-700"
                >
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                  required
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 "
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md "
                >
                  Book Appointment
                </button>
              </div>
            </form>
          )}

          {/* Close button */}
          {date && (
            <div className="mt-4 flex justify-end">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              >
                Close
              </button>
            </div>
          )}
        </DialogPanel>
      </div>
    </Dialog>
  );
}
