import Image from "next/image";
export default function episodeCard({episode}) {

    let image;
    let hasImage = false

    if(episode.image !== null) {
        hasImage = true
        image = episode.image.medium
    }

    return (
        <>
            <div className="bg-gray-50 mb-5 py-4 px-4 rounded-xl shadow-md">
        <div className="w-full mb-2">
             Series {episode.season} - Episode {episode.number}
        </div>
       
        <div className="flex gap-4">
            <div className="flex-none w-1/3">
                {hasImage ? (<>
                    <Image 
            src={image}
            width={300}
            height={180}
            className="rounded-xl"
            loading="lazy"
            />
                </>) : (
                    <>
                    <div className="flex w-300 h-40 bg-indigo-800 text-white items-center justify-center rounded-xl">
                        <p>We don't have an image yet.</p></div>
                </>
                )}
            </div>
            <div className="flex-none w-2/3 p-2">
                <div dangerouslySetInnerHTML={{ __html: episode.summary}}></div>
            </div>
        </div>
        </div>
        </>
    )
}