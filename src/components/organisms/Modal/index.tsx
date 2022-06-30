import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'

type Iprops = {
  open?: boolean
  children?: React.ReactNode
}

const Modal = ({ open = false, children }: Iprops): JSX.Element => {
  const [toogleOpen, setToggleOpen] = useState(open)

  const closeModal = () => setToggleOpen(false)

  return (
    <div
      className={`${
        toogleOpen ? 'absolute' : 'hidden'
      } z-20 top-0 left-0 w-full h-full`}
    >
      <div className="w-full h-full bg-slate-600 opacity-40"></div>
      <div
        className="absolute top-0 left-0 flex justify-center items-center w-full h-full"
        onClick={closeModal}
      >
        <div className="relative min-w-min max-h-max p-6 w-full sm:w-2/4 h-full sm:h-3/4 bg-white rounded-lg">
          <div
            className="absolute top-3 right-3 p-2 text-2xl hover:bg-slate-100 rounded-full"
            onClick={closeModal}
          >
            <IoClose />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Modal
