import React, { useContext } from 'react'
import { TbMenu2, TbArrowBarLeft } from 'react-icons/tb'
import MainContext from '../../../contexts/MainContext'

const ToggleMenu = () => {
  const { openMenu, setOpenMenu } = useContext(MainContext)

  const toggle = () => {
    openMenu ? setOpenMenu(false) : setOpenMenu(true)
  }

  return (
    <div>
      <div className="lg:invisible">
        {openMenu ? (
          <TbArrowBarLeft className="text-3xl" onClick={toggle} />
        ) : (
          <TbMenu2 className="text-3xl" onClick={toggle} />
        )}
      </div>
    </div>
  )
}

export default ToggleMenu
