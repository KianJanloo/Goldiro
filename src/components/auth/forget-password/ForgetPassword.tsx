'use client'
import React, { useState } from 'react'
import LoginWithOtherWay from '../login-another-way/LoginWithOtherWay'
import CommonButton from '@/components/common/buttons/CommonButton'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import OTPInput from '@/components/common/inputs/input-otp/OTPInput'
import Timer from '../timer/Timer'
import Logo from '@/components/common/texts/logo/Logo'

const ForgetPassword = () => {

    const router = useRouter()
    const [email, setEmail] = useState<string>("")

    return (
        <div
            className=" md:w-[500px] max-md:mx-[20px] flex p-4 flex-col gap-8 bg-gradient-to-br from-secondary/40 via-secondary/30 to-secondary/10 rounded-2xl border border-secondary/20 mx-auto "
        >
            <div className='w-full flex justify-between gap-4 flex-wrap'>
                <h2 className='text-xl'> فراموشی رمز عبور </h2>
                <Logo />
            </div>
            <div className='flex flex-col items-center gap-8 w-full'>
                <div className='w-full flex flex-col gap-2'>
                    <label className='text-sm' htmlFor='email' > ایمیل: </label>
                    <input onChange={(e) => setEmail(e.target.value)} id='email' className='w-full px-4 py-2 rounded-2xl bg-secondary outline-none text-sm ' placeholder=' ایمیل خود را وارد کنید ' />
                </div>
                <div className='w-full flex gap-4 justify-between flex-wrap'>
                    <OTPInput />
                    <Timer email={email} />
                </div>
                <i className='w-full border border-foreground/30'></i>
                <div className='w-full flex-wrap gap-4 flex items-center justify-between'>
                    <Link href="/auth/login" className='text-sm text-foreground/80 flex gap-2' > قبلا حساب کاربری ساخته ام. <h2 className='underline'> ورود به حساب </h2> </Link>
                    <LoginWithOtherWay />
                </div>
                <div className='w-full max-md:flex-col flex mt-[20px] gap-4 md:pl-4'>
                    <CommonButton onClick={() => {
                        router.back()
                    }} className='min-w-1/2 max-md:w-full bg-secondary justify-center flex-row-reverse ' title=' برگشت ' icon={<ChevronRight size={20} />} />
                    <CommonButton className='min-w-1/2 max-md:w-full bg-gold text-gold-foreground justify-center ' title=' تایید کد ارسال شده ' icon={<ChevronLeft size={20} />} />
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword
