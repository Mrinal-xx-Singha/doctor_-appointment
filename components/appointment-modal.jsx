"use client";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { format, addHours, parseISO } from "date-fns";
import useAppointmentsStore from "@/lib/appointmentStore";
import { useRouter } from "next/navigation";

export function AppointmentModal({
  isOpen,
  onClose,
  doctorName,
  date,
  appointments,
}) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const { addAppointment } = useAppointmentsStore();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const startDateTime = parseISO(`${selectedDate}T${selectedTime}`);
    const endDateTime = addHours(startDateTime, 1); //? Assuming 1- hour appointments

    const newAppointment = {
      id: Date.now(),
      title: `Appointment with ${doctorName}`,
      start: startDateTime,
      end: endDateTime,
    };
    addAppointment(newAppointment);
    onClose();
    alert("Appointment booked successfully!");
    router.push("/user/dashboard");
  };
  if (date && appointments) {
    return (
      <Dialog open={isOpen} onClose={onClose} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-label="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-sm rounded bg-white p-6">
            <DialogTitle className="text-lg font-medium mb-4">
              Appointments for {format(date, "MMMM d, yyyy")}
            </DialogTitle>
            {appointments.length === 0 ? (
              <p>No appointments for this date.</p>
            ) : (
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
            )}
            <div className="mt-4">
              <button
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-sm rounded bg-white p-6">
          <DialogTitle className="text-lg font-medium mb-4">
            Book Appointment with {doctorName}
          </DialogTitle>
          <form onSubmit={handleSubmit}>
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
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700 "
              >
                Time
              </label>
              <input
                type="time"
                id="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm "
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
