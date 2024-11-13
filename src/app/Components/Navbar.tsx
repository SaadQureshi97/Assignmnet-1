import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-5 px-10 bg-gray-800 text-white rounded-b-lg">
      {/* Company Logo and Name */}
      {/* Navigation Links */}
      <div className="space-x-6">
        <Link href="/" className="hover:text-gray-400">Home</Link>
        <Link href="/about" className="hover:text-gray-400">About</Link>
        <Link href="/career-options" className="hover:text-gray-400">Career Option</Link>
        <Link href="/News" className="hover:text-gray-400">News</Link>
        <Link href="/Contact" className="hover:text-gray-400">Contact Us</Link>
      </div>
    </nav>
  );
}