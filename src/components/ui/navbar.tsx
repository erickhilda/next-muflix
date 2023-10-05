import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="text border-b border-white/50">
      <div className="py-3 px-10 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-white">
            <Image src="/next.svg" alt="Next.js Logo" width={64} height={24} />
          </Link>
          <Link href="/movies" className="text-white">
            Movies
          </Link>
          <Link href="/tv" className="text-white">
            my list
          </Link>
          <Link href="/contact-us" className="text-white">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
