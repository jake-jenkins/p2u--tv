import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import EpisodeCard from '../../components/EpisodeCard'

const Episode = ({show, episodes}) => {

  const router = useRouter()
  const { id } = router.query

  let image;
  if (show.image !== null) {
      image = show.image.medium
  }

  const pageTitle = show.name + " on " + show.network.name + " | JJ TV"

  return (
    <>
    <Head>
      <title>{pageTitle}</title>
      </Head>

    <div className="flex gap-5">
      <div className='flex-initial lg:w-2/3'>
        {episodes.map(episode => (
          <EpisodeCard episode={episode} />
        ))}
        </div>
  <div className='flex-1 w-1/3 hidden lg:block'>
  <h1 className='text-xl'>About the series</h1>
  <Image 
      src={image}
      height={450}
      width={320}
      layout="fixed"
      className='rounded-3xl'
      />
  <div className="mt-4" dangerouslySetInnerHTML={{ __html: show.summary}}></div>
  </div>
</div>
  </>
  )
}

export async function getServerSideProps(context) {

const id = context.query.id

// get the basic show data
const showData = await fetch(`https://api.tvmaze.com/shows/${id}`)
const show = await showData.json()

// Displaying episodes through the Maze
// get the season data
const seasonData = await fetch(`https://api.tvmaze.com/shows/${id}/seasons`)
const seasons = await seasonData.json()

// the last season object in the array is the latest season
const currentSeries = seasons[seasons.length - 1]
const currentSeriesId = currentSeries.id

// Get all episodes for the current series
const episodeData = await fetch(`https://api.tvmaze.com/seasons/${currentSeriesId}/episodes`)
let episodes = await episodeData.json()

// handle series with no episodes
if(episodes.length < 1) {
  const previousSeries = seasons[seasons.length - 2]
  const previousSeriesId = previousSeries.id
  const episodesData2 = await fetch(`https://api.tvmaze.com/seasons/${previousSeriesId}/episodes`)
  episodes = await episodesData2.json()
}

   return {
     props: {
       show,
       episodes
     }
   }
}

export default Episode