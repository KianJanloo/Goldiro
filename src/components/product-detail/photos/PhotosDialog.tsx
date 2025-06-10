/* eslint-disable @next/next/no-img-element */

'use client'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Lens } from '@/components/ui/lens'
import { DialogTrigger } from '@radix-ui/react-dialog'
import React, { useState } from 'react'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

const PhotosDialog = ({ photos }: { photos: string[] }) => {
    const [selectedImage, setSelectedImage] = useState(0)

    return (
        <Dialog>
            <DialogTrigger className='relative w-1/2 flex justify-center cursor-pointer items-center'>
                <img alt=" " src={photos[2] || " "} className='w-full h-[200px] bg-secondary rounded-2xl' />
                <span className='absolute bg-secondary px-4 py-2 rounded-full'> مشاهده بیشتر + </span>
            </DialogTrigger>
            <DialogContent className="max-w-4xl border-none py-[50px]">
                <VisuallyHidden>
                    <DialogTitle>تصاویر محصول</DialogTitle>
                </VisuallyHidden>
                <div className="relative">
                    <div className="relative h-[500px] rounded-lg overflow-hidden">
                        <Lens>
                            <img
                                src={photos[selectedImage]}
                                alt={`Product image ${selectedImage + 1}`}
                                className="w-full h-full rounded-lg object-contain"
                            />
                        </Lens>
                    </div>

                    <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                        {photos.map((photo, index) => (
                            <img
                                key={index}
                                src={photo}
                                alt={`Thumbnail ${index + 1}`}
                                onClick={() => setSelectedImage(index)}
                                className={`w-20 h-20 rounded-lg cursor-pointer object-cover transition-all
                                    ${selectedImage === index
                                        ? 'ring-2 ring-primary'
                                        : 'hover:opacity-80'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default PhotosDialog
