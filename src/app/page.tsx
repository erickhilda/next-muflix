import { Suspense } from "react";
import Carousel from "@/components/ui/carousel";
import Navbar from "@/components/ui/navbar";

async function getData() {
  const res = await fetch("http://localhost:8080/muflix/listmovie");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data.slice(0, 15);
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="h-full w-full">
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Carousel items={data} title="Popular TV show" />
      </Suspense>
    </main>
  );
}
