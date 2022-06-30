import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaUserFriends, FaUsers } from 'react-icons/fa'

interface IProps {
  pages?: string[]
}

const pageslist = [
  {
    page: 'my-calendar',
    name: 'My calendar',
    icon: <FaUser />,
  },
  {
    page: 'for-teams',
    name: 'For teams',
    icon: <FaUserFriends />,
  },
  {
    page: 'public',
    name: 'Public',
    icon: <FaUsers />,
  },
]

const Menu = ({ pages }: IProps): JSX.Element => {
  return (
    <div className="py-4">
      <ul>
        {pages &&
          pages.map((page) => {
            const pageObj = pageslist.find(
              (ele) => ele.page === page && ele.icon
            )
            return (
              <li className="mb-3 text-md font-bold" key={page}>
                <Link
                  to={`/${page}`}
                  className="flex justify-start items-center"
                >
                  <span className="inline-block pr-3 font-bold text-xl">
                    {pageObj?.icon}
                  </span>
                  <span className="inline-block">{pageObj?.name}</span>
                </Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default Menu
