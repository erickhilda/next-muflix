import { Suspense } from "react";
import { BASE_API_URL } from "@/lib/env";
import MediaCard from "@/components/ui/media-card";

async function getMovies({
  search,
  page = 1,
}: {
  search: string;
  page: number;
}) {
  try {
    const url = `${BASE_API_URL}&s=${search}&page=${page}`;
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

export default async function MoviesPage({
  searchParams,
}: {
  searchParams: {
    search: string;
  };
}) {
  const data = await getMovies({ search: searchParams.search, page: 1 });

  return (
    <main className="h-full w-full">
      <div className="px-10" >
        <Suspense fallback={<div>Loading...</div>}>
          <h3 className="text-2xl font-bold mt-5">
            Show Result for {searchParams.search}
          </h3>
          <div className="flex flex-wrap gap-4 mt-5">
            {data?.Search?.map((item: any) => (
              <MediaCard
                key={item.imdbID}
                item={item}
              />
            ))}
          </div>
        </Suspense>
      </div>
    </main>
  );
}
