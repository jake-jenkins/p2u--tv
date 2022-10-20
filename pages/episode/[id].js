import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const Episode = ({episode}) => {

  const router = useRouter()
  const { id } = router.query

  let image;
  if (episode.image !== null) {
      image = episode.image.medium
  }

  console.log(episode)

  const pageTitle = episode.name + " on " + episode.network.name + " | P2U"

  return (
    <>
    <Head>
      <title>{pageTitle}</title>
      </Head>
      <Image 
      src={image}
      height={400}
      width={300}
      layout="fixed"
      />
  <h1 className='text-3xl'>{episode.name}</h1>
  <div dangerouslySetInnerHTML={{ __html: episode.summary}}></div>

  <div className='mt-6'>
  <Link href="../">&lt;  Back</Link>
  </div>
  </>
  )
}

export async function getServerSideProps(context) {

const id = context.query.id
const showLink = `https://api.tvmaze.com/shows/${id}`

const episodeData = await fetch(showLink)
const episode = await episodeData.json()

   return {
     props: {
       episode
     }
   }
}

export default Episode