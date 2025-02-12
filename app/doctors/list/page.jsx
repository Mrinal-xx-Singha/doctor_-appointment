import Link from "next/link";
import { DoctorCard } from "@/components/doctor-card";

// *Moc Data for doctors
const doctors = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialization: "Cardiologist 🩺",
    experience: "15 years",
    address: "123 Main St, City, Country",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    specialization: "Dermatologist 🩺",
    experience: "10 years",
    address: "456 Elm St, City, Country",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7",
  },
  {
    id: 3,
    name: "Dr. Rhayn Abner",
    specialization: "Pediatrician 🩺",
    experience: "12 years",
    address: "789 Oak St, City, Country",
    image: "https://images.unsplash.com/photo-1590611936760-eeb9bc598548",
  },
  {
    id: 4,
    name: "Dr. Sarah Williams",
    specialization: "Neurologist 🩺",
    experience: "8 years",
    address: "101 Pine St, City, Country",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d",
  },
];

export default function DoctorsList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-gray-600 font-bold mb-6 uppercase tracking-tightest">
        All Doctors
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
      <div className="mt-8">
        <Link href="/" className="text-blue-500 hover:text-blue-700">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
