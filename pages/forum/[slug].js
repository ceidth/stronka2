import React from 'react'
import { useRouter } from 'next/router'
import { Loader, Comments, CommentsForm, TopicComments } from './../../components'
import ForumTopicDetails from '../../components/ForumTopicDetails'
import { getForumTopics, getForumTopicDetails } from '../../services'

const ForumPost = ({ forumPost }) => {
    const router = useRouter()

    if(router.isFallback) {
        return <Loader/>
    }

    const { slug } = router.query
    
    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className='col-span-1 lg:col-span-8'>
                <ForumTopicDetails topicDetails={ forumPost } />
                <TopicComments slug={ slug } />
                <CommentsForm slug={ slug } isForum={ true } />
            </div>
        </div>
    )
}

export default ForumPost

export async function getStaticProps({params}) {
    const data = await getForumTopicDetails(params.slug);
  
    return {
      props: { forumPost: data }
    }
}

export async function getStaticPaths() {
    const posts = await getForumTopics();

    return {
        paths: posts.map(({ slug }) => ({ params: { slug }})),
        fallback: true
    }
}