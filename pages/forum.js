import Head from 'next/head'
import ForumTopicCard from '../components/ForumTopicCard'

// placeHolder Posts
const forumTopics = [
  {
    title: "How to beat the game?",
    author: "Wojtek" 
  },
  {
    title: "Post 2 Title",
    author: "Autoru Postu 2"
  },
  {
    title: "3 Post Title",
    author: "Autoru Postu 3"
  }
]

const forum = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
        <Head>
            <title>About</title>
        </Head>
        <div className='lg:col-span-8 cols-span-1'>
          {forumTopics.map((topic) => (
            <ForumTopicCard topic={topic}/>
          ))}
        </div>
    </div>
  )
}

export default forum