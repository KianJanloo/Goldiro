import React from 'react'

const OfferBTN = ({ discount_percent }: { discount_percent: number }) => {
  return (
    <div className='bg-danger h-fit text-danger-foreground px-4 py-0.5 text-base rounded-2xl flex justify-center items-center'> {discount_percent}% </div>
  )
}

export default OfferBTN
