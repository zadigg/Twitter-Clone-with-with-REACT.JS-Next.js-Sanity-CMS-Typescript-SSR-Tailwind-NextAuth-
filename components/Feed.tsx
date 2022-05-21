import { RefreshIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { Tweet } from '../typings'
import TweetBox from './TweetBox'
import TweetComponent from '../components/Tweet'
import { fetchTweets } from '../utils/fetchTweets'
import toast from 'react-hot-toast'

interface Props {
  tweets: Tweet[]
}
function Feed({ tweets: tweetsProp }: Props) {
  const [tweets, setTweets] = useState<Tweet[]>(tweetsProp)
  // console.log(tweets)

  const handleRefresh = async () => {
    const refreshToast = toast.loading('refreshing..')
    const tweets = await fetchTweets()
    setTweets(tweets)

    toast.success('Feed Updated', {
      id: refreshToast,
    })
  }
  return (
    <div className="col-span-7 max-h-screen overflow-scroll border-x scrollbar-hide lg:col-span-5">
      <div className="item-center flex justify-between">
        <div className="p-5 pb-0 text-xl font-bold">Home</div>
        <RefreshIcon
          onClick={handleRefresh}
          className="mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125 "
        />
      </div>

      {/* Tweet Box */}
      <div>
        <TweetBox setTweets={setTweets} />
      </div>

      {/* Feed */}

      <div className="">
        {tweets.map((tweet) => (
          <TweetComponent key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </div>
  )
}

export default Feed
