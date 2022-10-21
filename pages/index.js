import Head from 'next/head'
import Card from '../components/Card'

export default function Home({tvTodayShows}) {
  return (
    <>
      <Head>
        <title>Schedule | JJ TV</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='text-4xl mb-4'>Today</h1>
      <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-5'>
        {tvTodayShows.map(show => (
          <Card key={show.id} show={show} />
        ))}
      </div> 
    </>
  )
}

export async function getServerSideProps() {

const tvToday = await fetch(`https://api.tvmaze.com/schedule?country=GB`)
const tvTodayShows = await tvToday.json()

// get the next 6 days
// const today = new Date();
// const day = today.getDate()
// const month = today.getMonth() + 1
// const year = today.getFullYear()
// const date = day + "-" + month + "-" + year
// console.log(date)

Date.prototype.addDays = function(days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  date.toLocaleDateString()
  return date;
}

var date = new Date()

console.log(date);


const week = {
  today: date,
  day1: date.addDays(1),
  day2: date.addDays(2),
  day3: date.addDays(3),
  day4: date.addDays(4),
  day5: date.addDays(5),
  day6: date.addDays(6)
}
console.log(week)

  return {
    props: {
      tvTodayShows
    }
  }
}
