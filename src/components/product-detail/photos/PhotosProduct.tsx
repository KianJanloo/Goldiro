/* eslint-disable @next/next/no-img-element */

import { Lens } from '@/components/ui/lens'
import React from 'react'
import PhotosDialog from './PhotosDialog'

const PhotosProduct = () => {
    const photos = [
        `https://picsum.photos/seed/${Math.random()}/800/800`,
        `https://picsum.photos/seed/${Math.random()}/800/800`,
        `https://picsum.photos/seed/${Math.random()}/800/800`,
        `https://picsum.photos/seed/${Math.random()}/800/800`,
        `https://picsum.photos/seed/${Math.random()}/800/800`,
        `https://picsum.photos/seed/${Math.random()}/800/800`,
        `https://picsum.photos/seed/${Math.random()}/800/800`,
        `https://picsum.photos/seed/${Math.random()}/800/800`,
        `https://picsum.photos/seed/${Math.random()}/800/800`,
    ]

    return (
        <div className='w-5/12 flex flex-col gap-4'>
            <Lens>
                <img alt=" " src={photos[0]} className='w-full h-[300px] bg-secondary rounded-2xl object-cover' />
            </Lens>
            <div className='flex gap-4'>
                <img alt=" " src={photos[1]} className='w-1/2 h-[200px] bg-secondary rounded-2xl object-cover' />
                <PhotosDialog photos={photos} />
            </div>
        </div>
    )
}

export default PhotosProduct
