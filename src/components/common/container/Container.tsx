import React from 'react'

const Container = ({
  children, className
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) => {
  return (
    <div className={`px-[24px] w-full ${className} `}>
      {children}
    </div>
  )
}

export default Container
