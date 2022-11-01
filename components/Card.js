import Image from "next/image";
import Link from "next/link";

export default function Card({ show }) {
  const aDate = new Date(show.airdate).toLocaleDateString("en-GB");
  let image;
  let hasImage = false;
  // handle empty images
  if (show.show.image !== null) {
    hasImage = true;
    image = show.show.image.medium;
  }
  const showLink = "/episode/" + show.show.id;

  // handle no network
  let network;
  if (show.show.network !== null) {
    network = show.show.network.name;
  }

  return (
    <>
      <Link href={showLink}>
        <div className="bg-gray-50 shadow-lg p-4 rounded-xl flex cursor-pointer">
          <div className="h-42 w-32 bg-slate-500 mr-5 rounded-lg shadow-lg">
            {hasImage ? (
              <>
                <Image
                  src={image}
                  width={128}
                  height={180}
                  layout="fixed"
                  loading="lazy"
                  alt="show image"
                  className="rounded-lg"
                />
              </>
            ) : (
              <>
                <div className="items-center text-white h-40 p-4">
                  We don&apos;t have an image yet.
                </div>
              </>
            )}
          </div>
          <div className="">
            <h2 className="text-xl">{show.show.name}</h2>
            <p className="mt-2">Series {show.season}</p>
            <p>{aDate}</p>
            <p className="mt-4">
              {show.airtime} on {network}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
