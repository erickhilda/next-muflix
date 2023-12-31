"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import useDebounce from "@/hooks/useDebounce";
import * as Cookies from "@/lib/cookies";
import { Input } from "./input";

function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const handleSearch = useCallback(
    (keyword: string) => {
      const searchParams = new URLSearchParams();
      searchParams.set("search", keyword);

      if (keyword) {
        if (pathname.includes("movies")) {
          return;
        }
        router.push(`/movies?${searchParams.toString()}`);
      }

      if (!keyword && pathname === "/movies") {
        router.push(`/`);
      }
    },
    [pathname, router]
  );

  useEffect(() => {
    handleSearch(debouncedSearch);
  }, [debouncedSearch, handleSearch]);

  useEffect(() => {
    if (pathname.includes("movies")) {
      const searchParams = new URLSearchParams(location.search);
      setSearch(searchParams.get("search") || "");
    }
  }, [pathname]);

  const username = Cookies.get("user");

  if (pathname.includes("auth")) {
    return null;
  }

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

        <div className="flex items-center space-x-4">
          <Input
            className="text-black"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
          {/* <span>{username ? username : null}</span> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
