import React from 'react'

const SubTitle = ({ text }: { text: string }) => {
  return (
    <span className='text-foreground/60 max-w-[700px] text-center '> {text} </span>
  )
}

export default SubTitle
