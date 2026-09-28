import React from 'react'
import classNames from 'classnames'

interface ContainerProps {
  children: React.ReactNode
  className?: string
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={classNames("w-full min-h-screen flex items-center justify-center", className)}>
      {children}
    </div>
  )
}

export default Container