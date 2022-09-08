import React from 'react'
import { useRouter } from 'next/router'
import { Loader, Comments, CommentsForm } from './../../components'
import ForumTopicDetails from '../../components/ForumTopicDetails'

const ForumPost = () => {
    const router = useRouter()

    if(router.isFallback) {
        return <Loader/>
    }

    const { slug } = router.query

    return (
        <div className='container mx-auto px-10 mb-8'>
            <div className='col-span-1 lg:col-span-8'>
                <ForumTopicDetails />
                <CommentsForm slug={ slug }/>
                {/* <Comments slug={post.slug}/> */}
                {/* <h1>{ slug }</h1> */}
            </div>
        </div>
    )
}

export default ForumPost