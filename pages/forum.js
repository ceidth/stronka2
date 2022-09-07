import Head from 'next/head'
import ForumTopicCard from '../components/ForumTopicCard'

// placeHolder Posts
const forumTopics = [
  {
    title: "How to beat the game?",
    author: "Wojtek",
    dateposted: "25/04/2022"
  },
  {
    title: "Post 2 Title",
    author: "Autor Postu 2",
    dateposted: "11/05/2022"
  },
  {
    title: "3 Post Title",
    author: "Autor Postu 3",
    dateposted: "11/06/2022"
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