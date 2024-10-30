// components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-300 p-4 rounded-3xl mx-10 my-5 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-lg font-bold text-[#252B61]">Medcare</h1>
        <input
          type="text"
          placeholder="Search"
          className="ml-4 p-2 border rounded-2xl "
        />
      </div>
      <nav className="flex items-center gap-10 text-lg">
        <Link href="#">Healthcare </Link>
        <Link href="#"> Services</Link>
        <Link href="#">Offers</Link>
        <Link href="#">Cart</Link>
      </nav>
    </header>
  );
}
