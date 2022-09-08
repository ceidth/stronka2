import Link from 'next/link'
import moment from 'moment'

const FourmTopicCard = ({ topic }) => {
  return (
    <div className="bg-stone-200 shadow-lg rounded-lg pb-5 p-5 lg:p-4 mb-8">
      <h1 className="transition duration-700 text-left mb-8 cursor-pointer hover:text-orange-500 text-3xl font-semibold"> {/* tytuł */}
        <Link href={`/forum/${topic.slug}`}>
          {topic.topicName}
        </Link>
      </h1>
      <div className='grid grid-cols-2 lg:grid-cols-2'>
        <div className="font-medium text-gray-700 text-left">
          Author: { topic.author }
        </div>
        <div className="font-medium text-gray-700 text-right">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          <span className="align-middle">{moment(topic.createdAt).format('MMM DD, YYYY')}</span>
        </div>
      </div>
    </div>
  )
}

export default FourmTopicCard