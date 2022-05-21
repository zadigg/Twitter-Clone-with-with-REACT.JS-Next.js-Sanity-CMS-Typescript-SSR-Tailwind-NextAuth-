import React from 'react'
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from '@heroicons/react/outline'
import SidebarRow from './SidebarRow'
import { useSession, signIn, signOut } from 'next-auth/react'

function Sidebar() {
  const { data: session } = useSession()
  return (
    <div className="item-center md:item-start col-span-2 flex flex-col px-4">
      <img
        className="m-3 h-10 w-10"
        src="https://links.papareact.com/drq"
        alt=""
      />
      <SidebarRow
        Icon={HomeIcon}
        title="Home"
        onClick={function (): {} {
          throw new Error('Function not implemented.')
        }}
      />
      <SidebarRow
        Icon={HashtagIcon}
        title="Explore"
        onClick={function (): {} {
          throw new Error('Function not implemented.')
        }}
      />
      <SidebarRow
        Icon={BellIcon}
        title="Notifications"
        onClick={function (): {} {
          throw new Error('Function not implemented.')
        }}
      />
      <SidebarRow
        Icon={MailIcon}
        title="Messages"
        onClick={function (): {} {
          throw new Error('Function not implemented.')
        }}
      />
      <SidebarRow
        Icon={BookmarkIcon}
        title="Bookmarks"
        onClick={function (): {} {
          throw new Error('Function not implemented.')
        }}
      />
      <SidebarRow
        Icon={CollectionIcon}
        title="Lists"
        onClick={function (): {} {
          throw new Error('Function not implemented.')
        }}
      />
      <SidebarRow
        onClick={session ? signOut : signIn}
        Icon={UserIcon}
        title={session ? 'Sign Out' : 'Sign In'}
      />
      <SidebarRow
        Icon={DotsCircleHorizontalIcon}
        title="More"
        onClick={function (): {} {
          throw new Error('Function not implemented.')
        }}
      />
    </div>
  )
}

export default Sidebar
