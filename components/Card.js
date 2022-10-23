import Image from 'next/image'
import Link from 'next/link'

export default function Card({show}) {
    const aDate = new Date(show.airdate).toLocaleDateString('en-GB')
    let image;
    let hasImage = false;
    // handle empty images
    if (show.show.image !== null) {
        hasImage = true
        image = show.show.image.medium
    }
    const showLink = '/episode/' + show.show.id

    // handle no network
    let network
    if (show.show.network !== null) {
        network = show.show.network.name;
    }

    return (
        <>
        <Link href={showLink}>
        <div className="bg-gray-50 shadow-lg p-4 rounded-xl flex cursor-pointer">
            <div className="h-40 w-32 bg-slate-500 mr-5 rounded-lg shadow-lg">

                {hasImage ? (
                    <>
                <Image 
                src={image}
                width={130}
                height={160}
                layout="fixed"
                loading='lazy'
                alt="show image"
                />
                    </>
                ) : (
                <>
                    We don't have an image yet.
                </>)}
                
            </div>
            <div className="">
                <h2 className="text-xl">{show.show.name}</h2>
                <p className="mt-2">Series {show.season}</p>
                <p>{aDate}</p>
                <p className="mt-4">{show.airtime} on {network}</p>
            </div>
        </div>
        </Link>
        </>
    )
}