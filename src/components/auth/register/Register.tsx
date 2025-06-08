'use client'
import Link from 'next/link'
import React from 'react'
import LoginWithOtherWay from '../login-another-way/LoginWithOtherWay'
import CommonButton from '@/components/common/buttons/CommonButton'
import { ChevronLeft } from 'lucide-react'
import { useForm } from 'react-hook-form'
import ErrorText from '@/components/common/error/ErrorText'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerValidation } from '@/utils/validations/register-validation/register-validation'
import Logo from '@/components/common/texts/logo/Logo'

const Register = () => {

    const {
        formState: { errors },
        register,
        handleSubmit
    } = useForm({
        resolver: zodResolver(registerValidation)
    })

    const onSubmit = () => {

    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className=" md:w-[500px] max-md:mx-[20px] flex p-4 flex-col gap-8 bg-gradient-to-br from-secondary/40 via-secondary/30 to-secondary/10 rounded-2xl border border-secondary/20 mx-auto "
        >
            <div className='w-full flex justify-between gap-4 flex-wrap'>
                <h2 className='text-xl'> ساخت حساب کاربری </h2>
                <Logo />
            </div>
            <div className='flex flex-col items-center gap-4 w-full'>
                <div className='w-full gap-4 flex'>
                    <div className='w-1/2 flex flex-col gap-2'>
                        <label className='text-sm' htmlFor='firstName' > نام: </label>
                        <input id='firstName' {...register("firstName")} className='w-full px-4 py-2 rounded-2xl bg-secondary outline-none text-sm ' placeholder=' نام خود را وارد کنید ' />
                        <ErrorText name='firstName' errors={errors} />
                    </div>
                    <div className='w-1/2 flex flex-col gap-2'>
                        <label className='text-sm' htmlFor='lastName' > نام خانوادگی: </label>
                        <input id='lastName' {...register("lastName")} className='w-full px-4 py-2 rounded-2xl bg-secondary outline-none text-sm ' placeholder=' نام خانوداگی خود را وارد کنید ' />
                        <ErrorText name='lastName' errors={errors} />
                    </div>
                </div>
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
                    <Link href="/auth/login" className='text-sm text-foreground/80 flex gap-2' > قبلا حساب کاربری ساخته ام. <h2 className='underline'> ورود به حساب </h2> </Link>
                    <LoginWithOtherWay />
                </div>
                <div className='w-full max-md:flex-col flex mt-[20px] gap-4'>
                    <CommonButton type='submit' className='w-full bg-gold text-gold-foreground justify-center' title=' ساخت حساب کاربری ' icon={<ChevronLeft size={20} />} />
                </div>
            </div>
        </form>
    )
}

export default Register
