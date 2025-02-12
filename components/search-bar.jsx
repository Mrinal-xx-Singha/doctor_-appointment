"use client";
import { useState } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Search } from "lucide-react";
export function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const searchparams = useSearchParams();

  const handleSearch = (e) => {
    e.preventDefault();

    const params = new URLSearchParams(searchparams.toString());
    if (query.trim()) {
      params.set("search", query);
    } else {
      params.delete("search");
    }

    router.push(`${pathname}doctors?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-md">
      <div className=" relative">
        <input
          className="w-full p-4 pr-12 text-sm border border-gray-200 rounded-lg shadow-sm"
          placeholder="Search by doctor name or specialization"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="absolute top-1/2 right-3 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700">
          <span className="sr-only">Search</span>
          <Search className="size-5" aria-hidden={true} />
        </button>
      </div>
    </form>
  );
}
