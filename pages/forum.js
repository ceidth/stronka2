import Head from 'next/head'
import Link from 'next/link'
import { getForumTopics } from '../services'
import { NewTopicForm, ForumTopicCard } from '../components'

const forum = ({topics}) => {
  return (
    <div className='container mx-auto px-10 mb-8'>
        <Head>
            <title>Forum</title>
        </Head>
        <div className='lg:col-span-8 cols-span-1'>
          {topics.map((topic) => (
            <ForumTopicCard topic={topic}/>
          ))}
          <NewTopicForm />
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