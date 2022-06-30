import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaUserFriends, FaUsers } from 'react-icons/fa'

interface IProps {
  pages?: string[]
}

const pageslist = [
  {
    page: 'private',
    icon: <FaUser />,
  },
  {
    page: 'team',
    icon: <FaUserFriends />,
  },
  {
    page: 'public',
    icon: <FaUsers />,
  },
  {
    page: 'account',
    icon: null,
  },
]

const Menu = ({ pages }: IProps): JSX.Element => {
  return (
    <div className="py-4">
      <ul>
        {pages &&
          pages.map((page) => {
            const icon = pageslist.find((ele) => ele.page === page && ele.icon)
            return (
              <li className="mb-3 text-md font-bold">
                <Link
                  to={`/${page}`}
                  className="flex justify-start items-center capitalize"
                >
                  <span className="inline-block pr-3 font-bold text-xl">
                    {icon?.icon}
                  </span>
                  <span className="inline-block">{page}</span>
                </Link>
              </li>
            )
          })}
        <li className="mt-7">
          <Link to="/account">Account</Link>
        </li>
        <li className="mt-1">
          <Link to="#">Logout</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
