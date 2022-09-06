import Link from 'next/link'

const FourmTopic = ({ topic }) => {
  return (
    <div className="bg-stone-200 shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <h1 className="transition duration-700 text-left mb-8 cursor-pointer hover:text-orange-500 text-3xl font-semibold"> {/* tytuł */}
        <Link href={`/forum`}>
            {topic.title}
          </Link>
      </h1>
      <div>{ topic.author }</div>
    </div>
  )
}

export default FourmTopic