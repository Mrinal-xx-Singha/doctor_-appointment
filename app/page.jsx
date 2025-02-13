import { SearchBar } from "@/components/search-bar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* Navbar cum logo */}
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="fixed tracking-widest uppercase left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl ">
          Doctor Appointment System
        </h1>
      </div>
      {/* SearchBar Container */}
      <div className="mt-32 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8 uppercase sm:text-wrap">
          Find Your Doctor
        </h1>
        <SearchBar />

        <div className="mt-8 flex justify-center flex-col items-center gap-2 md:text-sm lg:text-lg">
          <Link
            className="mt-6 text-blue-500 hover:text-blue-700"
            href="/doctors/list"
          >
            View All Doctors
          </Link>
          {/*  //?Added a link to view the list of appointments of the user in a calender view */}

          <Link
            className="mt-6 text-blue-500 hover:text-blue-700"
            href="/user/dashboard"
          >
            Appointments
          </Link>
        </div>
      </div>
    </main>
  );
}
