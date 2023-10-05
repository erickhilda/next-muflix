import Image from "next/image";
import Link from "next/link";

function MediaCard({
  item,
}: {
  item: { imdbID: string; Title: string; Poster: string };
}) {
  return (
    <Link href={`/movies/${item.imdbID}`}>
      <div className="flex-none" key={item.imdbID}>
        <div className="relative hover:scale-105 hover:z-10 transition duration-300 hover:outline">
          {item.Poster === "N/A" ? (
            <div className="w-40 h-60 rounded-md bg-gray-300"></div>
          ) : (
            <Image
              src={item.Poster}
              alt={item.Title}
              width={160}
              height={240}
              className="w-40 h-60 rounded-md object-cover"
            />
          )}
          <div className="absolute bottom-0 left-0 p-2 text-white bg-black/80 w-full">
            {item.Title}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MediaCard;
