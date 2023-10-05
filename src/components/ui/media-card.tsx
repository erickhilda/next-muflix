import Image from "next/image";
import Link from "next/link";

function MediaCard({
  id,
  title,
  img,
}: {
  id: string;
  title: string;
  img: string;
}) {
  return (
    <Link href={`/movies/${id}`}>
      <div className="flex-none" key={id}>
        <div className="relative hover:scale-105 hover:z-10 transition duration-300 hover:outline">
          {img === "N/A" ? (
            <div className="w-40 h-60 rounded-md bg-gray-300"></div>
          ) : (
            <Image
              src={img}
              alt={title}
              width={160}
              height={240}
              className="w-40 h-60 rounded-md object-cover"
            />
          )}
          <div className="absolute bottom-0 left-0 p-2 text-white bg-black/80">
            {title}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MediaCard;
