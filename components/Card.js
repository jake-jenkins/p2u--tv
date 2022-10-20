import Image from 'next/image'
import Link from 'next/link'

export default function Card({show}) {
    const aDate = new Date(show.airdate).toLocaleDateString('en-GB')
    let image;
    if (show.show.image !== null) {
        image = show.show.image.medium
    }
    const showLink = '/episode/' + show.show.id

    return (
        <>
        <Link href={showLink}>
        <div className="bg-gray-50 shadow-lg p-4 rounded-xl flex cursor-pointer">
            <div className="h-40 bg-slate-500 mr-5 rounded-lg shadow-lg">
                <Image 
                src={image}
                width={130}
                height={160}
                layout="fixed"
                />
            </div>
            <div className="">
                <h2 className="text-xl">{show.show.name}</h2>
                <p className="mt-2">Series {show.season}</p>
                <p>{aDate}</p>
                <p className="mt-4">{show.airtime} on {show.show.network.name}</p>
            </div>
        </div>
        </Link>
        </>
    )
}