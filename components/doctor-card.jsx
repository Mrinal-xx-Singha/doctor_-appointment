import Image from "next/image";

export function DoctorCard({ doctor }) {
  return (
    <div>
      <Image
        src={doctor?.image}
        alt={doctor?.name}
        width={300}
        height={200}
        className="w-fulll h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-3xl font-semibold mb-2 ">{doctor.name}</h2>
        <p className="text-gray-600 mb-2">{doctor.specialization}</p>
        <p className="text-gray-600 mb-2">
          <b>Experience</b> : {doctor.experience}
        </p>
        <p className="text-gray-600 mb-2">{doctor.addres}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          Book Appointment
        </button>
      </div>
    </div>
  );
}
