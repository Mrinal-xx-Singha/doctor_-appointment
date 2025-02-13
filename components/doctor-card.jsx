"use client";

import Image from "next/image";
import { useState } from "react";
import { AppointmentModal } from "./appointment-modal";
export function DoctorCard({ doctor }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="border border-gray-400 shadow-md">
      <Image
        src={doctor?.image}
        alt={doctor?.name}
        width={300}
        height={200}
        className="h-45 w-full object-cover"
      />
      <div className="p-4">
      <hr className="border-t border-gray-400 py-4" />
        <h2 className="text-3xl font-semibold mb-2 ">{doctor.name}</h2>
        <p className="text-gray-800 font-bold mb-2">{doctor.specialization}</p>
        <p className="text-gray-600 mb-2">
          <b className="text-gray-800">Experience</b> : {doctor.experience}
        </p>
        <p className="text-gray-600 mb-2">{doctor.address}</p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Book Appointment
        </button>
      </div>
      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        doctorName={doctor.name}
      />
    </div>
  );
}
