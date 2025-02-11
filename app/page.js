import { SearchBar } from "@/components/search-bar";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* Navbar cum logo */}
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="fixed uppercase left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Doctor Appointment System
        </h1>
      </div>
      {/* SearchBar Container */}
      <div className="mt-32 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8 uppercase sm:text-wrap">
          Find Your Doctor
        </h1>
        <SearchBar />
        <Link
          className="mt-6 text-blue-500 hover:text-blue-700"
          href="/doctors/list"
        >
          View All Doctors
        </Link>
      </div>
    </main>
  );
}
