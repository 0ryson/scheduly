import React from 'react'

interface IProps {
  title: string;
  subtitle?: string;
}

const Title = ({ title, subtitle }: IProps): JSX.Element => {
  return (
    <div>
      {subtitle && <div className="text-2xl text-center">{subtitle}</div>}
      <h2 className="pb-6 text-4xl font-bold text-center">{title}</h2>
    </div>
  )
}

export default Title
