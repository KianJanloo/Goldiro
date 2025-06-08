import React from 'react'

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='py-[150px]'>
      {children}
    </div>
  )
}

export default layout
