import React from 'react'
import classNames from 'classnames'
import type { ReactNode } from 'react'
import Container from '../common/Container';

interface AuthLayoutProps {
  children: ReactNode;
  cardClassName?: string;
  containerClassName?: string
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, cardClassName, containerClassName }) => {
  return (
    <Container className={containerClassName}>
      <div className={classNames("card bg-(--brand-bg-accent)", cardClassName)}>
        <div className="p-8">
          {children}
        </div>
      </div>
    </Container>
  )
}

export default AuthLayout
