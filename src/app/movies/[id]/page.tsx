import { Suspense } from "react";
import { BASE_API_URL } from "@/lib/env";
import MediaCard from "@/components/ui/media-card";

async function getMovies({ id }: { id: string }) {
  try {
    const url = `${BASE_API_URL}&i=${id}&plot=full`;
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default async function MoviesDetailsPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const data = await getMovies({ id: params.id });

  return (
    <main className="h-full w-full">
      <div className="px-10">
        <Suspense fallback={<div>Loading...</div>}>
          <pre className="text-white">{JSON.stringify(data, null, 2)}</pre>
        </Suspense>
      </div>
    </main>
  );
}
