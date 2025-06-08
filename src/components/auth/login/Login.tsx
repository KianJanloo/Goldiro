'use client'
import Link from 'next/link'
import React from 'react'
import LoginWithOtherWay from '../login-another-way/LoginWithOtherWay'
import CommonButton from '@/components/common/buttons/CommonButton'
import { ChevronLeft } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginValidation } from '@/utils/validations/login-validation/login-validation'
import Logo from '@/components/common/texts/logo/Logo'
import ErrorText from '@/components/common/error/ErrorText'

const Login = () => {

    const {
        formState: { errors },
        handleSubmit,
        register
    } = useForm({ resolver: zodResolver(loginValidation) })

    const onSubmit = () => {

    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className=" md:w-[500px] max-md:mx-[20px] flex p-4 flex-col gap-8 bg-gradient-to-br from-secondary/40 via-secondary/30 to-secondary/10 rounded-2xl border border-secondary/20 mx-auto "
        >
            <div className='w-full flex justify-between gap-4 flex-wrap'>
                <h2 className='text-xl'> ورود به حساب کاربری </h2>
                <Logo />
            </div>
            <div className='flex flex-col gap-4 items-center w-full'>
                <div className='w-full flex flex-col gap-2'>
                    <label className='text-sm' htmlFor='email' > ایمیل: </label>
                    <input id='email' {...register("email")} className='w-full px-4 py-2 rounded-2xl bg-secondary outline-none text-sm ' placeholder=' ایمیل خود را وارد کنید ' />
                    <ErrorText name='email' errors={errors} />
                </div>
                <div className='w-full flex flex-col gap-2'>
                    <label className='text-sm' htmlFor='password' > رمز عبور: </label>
                    <input id='password' {...register("password")} className='w-full px-4 py-2 rounded-2xl bg-secondary outline-none text-sm ' placeholder=' رمز عبور خود را وارد کنید ' />
                    <ErrorText name='password' errors={errors} />
                </div>
                <i className='w-full border border-foreground/30'></i>
                <div className='w-full flex-wrap gap-4 flex items-center justify-between'>
                    <Link href="/auth/forget-password" className='text-sm text-foreground/80 flex gap-2' > رمز عبور خود را فراموش کرده ام <h2 className='underline'> بازیابی رمز عبور </h2> </Link>
                    <LoginWithOtherWay />
                </div>
                <div className='w-full max-md:flex-col flex mt-[20px] gap-4 md:pl-4'>
                    <CommonButton href='/auth/register' className='min-w-1/2 max-md:w-full bg-secondary justify-center' title=' ساخت حساب کاربری ' icon={<ChevronLeft size={20} />} />
                    <CommonButton type='submit' className='min-w-1/2 max-md:w-full bg-gold text-gold-foreground justify-center ' title=' ورود به حساب کاربری ' icon={<ChevronLeft size={20} />} />
                </div>
            </div>
        </form>
    )
}

export default Login
