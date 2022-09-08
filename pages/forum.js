import Head from 'next/head'
import ForumTopicCard from '../components/ForumTopicCard'
import Link from 'next/link'
import { getForumTopics } from '../services'

const forum = ({topics}) => {
  return (
    <div className='container mx-auto px-10 mb-8'>
        <Head>
            <title>About</title>
        </Head>
        <div className='lg:col-span-8 cols-span-1'>
          {topics.map((topic) => (
            <ForumTopicCard topic={topic}/>
          ))}
        </div>
    </div>
  )
}

export default forum

export async function getStaticProps() {
  const topics = (await getForumTopics()) || []

  return {
    props: { topics }
  }
}