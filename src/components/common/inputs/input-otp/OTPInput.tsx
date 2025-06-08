import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import React from 'react'

const OTPInput = () => {
    return (
        <InputOTP maxLength={6}>
            <InputOTPGroup className='flex gap-2' dir='ltr'>
                <InputOTPSlot className='bg-secondary border-none rounded-sm size-[40px]' index={0} />
                <InputOTPSlot className='bg-secondary border-none rounded-sm size-[40px]' index={1} />
                <InputOTPSlot className='bg-secondary border-none rounded-sm size-[40px]' index={2} />
                <InputOTPSlot className='bg-secondary border-none rounded-sm size-[40px]' index={3} />
                <InputOTPSlot className='bg-secondary border-none rounded-sm size-[40px]' index={4} />
                <InputOTPSlot className='bg-secondary border-none rounded-sm size-[40px]' index={5} />
            </InputOTPGroup>
        </InputOTP>
    )
}

export default OTPInput
