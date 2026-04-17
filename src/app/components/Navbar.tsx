"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-green ">
      <Link href="/" className="text-2xl font-bold text-white-600">
        Easy  Stay
      </Link>

      <div className="space-x-6">
        <Link href="/properties" className="hover:text-white-600">
          Explore
        </Link>
        <Link href="/add-property" className="hover:text-white-600">
          List Property
        </Link>
        <Link href="/dashboard" className="hover:text-white-600">
          Dashboard
        </Link>
      </div>
    </nav>
  );
}