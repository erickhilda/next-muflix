import { Suspense } from "react";
import Carousel from "@/components/ui/carousel";
import { MOCK_API_URL } from "@/lib/env";

async function getData() {
  const res = await fetch(`${MOCK_API_URL}/muflix/listmovie`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const series = data.filter((item: any) => item.Type === "series");
  const movies = data.filter((item: any) => item.Type === "movie");
  return { series, movies };
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="h-full w-full">
      <Suspense fallback={<div>Loading...</div>}>
        <Carousel items={data.movies} title="Popular Movies" />
        <Carousel items={data.series} title="Popular Series" />
      </Suspense>
    </main>
  );
}
