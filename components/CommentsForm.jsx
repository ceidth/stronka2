import React, {useState, useEffect, useRef} from 'react'
import { useSession } from 'next-auth/react'

import { submitComment } from '../services'

const CommentsForm = ({slug, isForum}) => {
  const {data: session} = useSession()
  const [error, setError] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()

  useEffect(() => {
    if(session) {
      nameEl.current.value = session.user.name
      emailEl.current.value = session.user.email
    }
  })
  

  const handleCommentSubmission = () => {
    setError(false)

    const {value: comment} = commentEl.current
    const {value: name} = nameEl.current;
    const {value: email} = emailEl.current;

    if(!comment || !name || !email) {
      setError(true)
      return;
    }

    const commentObj = {name, email, comment, slug}

    submitComment(commentObj, isForum)
    .then((res) => {
      setShowSuccessMessage(true)
        setTimeout(() => {
          setShowSuccessMessage(false)
        }, 3000)
    })

  }

  if(session) {
    return (
      <div className="bg-stone-200 shadow-lg rounded-lg p-8 pb-12 mb-8">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">Leave a comment</h3>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <textarea 
          ref={commentEl}
          className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-neutral-400 bg-stone-300 text-stone-700" 
          name="comment" 
          placeholder="Comment" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <input 
            disabled
            type="text" 
            ref={nameEl}
            className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-neutral-400 bg-stone-300 text-stone-700" 
            placeholder="Name" 
            name="name" />
          <input 
            disabled
            type="email"  
            ref={emailEl}
            className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-neutral-400 bg-stone-300 text-stone-700" 
            placeholder="Email" 
            name="email" />
        </div>
        <div className="mt-8">
          <button 
            type="button" 
            onClick={handleCommentSubmission} 
            className="transition duration-500 ease hover:bg-stone-600 inline-block bg-orange-400 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
              Post Comment
            </button>
          {showSuccessMessage && <span className="text-xl float-right font-semibold mt-3 text-green-500">Comment submitted for review</span>}
        </div>
      </div>
    )
  } else {
    return (
      <div className="bg-stone-200 shadow-lg rounded-lg p-6 mb-8">
        <h3 className="text-xl text-center font-semibold text-stone-600">Sign in to leave a comment</h3>
      </div>
    )
  }
  
}

export default CommentsForm