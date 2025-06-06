import React from 'react'
import Container from '../container/Container'
import {
    Instagram,
    Phone,
    Mail,
    MapPin,
    MessageCircleMore,
    Github,
} from 'lucide-react'
import Link from 'next/link'
import Logo from '../texts/logo/Logo'

const Footer = () => {
    return (
        <Container>
            <div className="w-full bg-gradient-to-tr from-secondary via-secondary/80 to-primary/30 shadow-lg flex flex-col gap-10 rounded-3xl p-8 mb-8 text-foreground border border-foreground/10">
                <div className="flex flex-col lg:flex-row justify-between gap-10">
                    <div className='flex flex-col justify-between gap-8'>
                        <div>
                            <Logo />
                            <p className="text-sm text-foreground/60 mt-2 leading-relaxed">
                                تجربه‌ای لوکس از خرید طلا و جواهرات با طراحی منحصر به‌فرد
                            </p>
                        </div>
                        <div className='flex gap-4'>
                            <div className='bg-secondary rounded-xl size-[80px] cursor-pointer'>

                            </div>
                            <div className='bg-secondary rounded-xl size-[80px] cursor-pointer'>

                            </div>
                            <div className='bg-secondary rounded-xl size-[80px] cursor-pointer'>

                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full sm:flex-row justify-around gap-10 whitespace-nowrap'>
                        <div>
                            <h3 className="font-bold mb-3">دسترسی سریع</h3>
                            <ul className="space-y-2 text-foreground/70">
                                <li>
                                    <Link href="/products" className="hover:text-primary transition">
                                        محصولات
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="hover:text-primary transition">
                                        درباره ما
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="hover:text-primary transition">
                                        تماس با ما
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faq" className="hover:text-primary transition">
                                        سوالات متداول
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-3">خدمات مشتری</h3>
                            <ul className="space-y-2 text-foreground/70">
                                <li className="hover:text-primary transition cursor-pointer">راهنمای خرید</li>
                                <li className="hover:text-primary transition cursor-pointer">شرایط بازگشت کالا</li>
                                <li className="hover:text-primary transition cursor-pointer">پیگیری سفارش</li>
                                <li className="hover:text-primary transition cursor-pointer">ضمانت اصالت</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold mb-3">اطلاعات تماس</h3>
                            <ul className="space-y-3 text-foreground/70">
                                <li className="flex items-center gap-2 hover:text-primary transition">
                                    <Phone size={18} /> ۰۲۱-۱۲۳۴۵۶۷۸
                                </li>
                                <li className="flex items-center gap-2 hover:text-primary transition">
                                    <MapPin size={18} /> تهران، خیابان ولیعصر، پلاک ۱۲۳
                                </li>
                                <li className="flex items-center gap-2 hover:text-primary transition">
                                    <Mail size={18} /> support@goldiro.ir
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-center text-xs text-foreground/50 border-t border-foreground/10 pt-5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <span>
                        © {new Date().getFullYear()} تمامی حقوق محفوظ است - Goldiro
                    </span>
                    <div className="flex justify-center gap-6 text-foreground/70">
                        <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <Instagram className="hover:text-primary transition hover:scale-110" />
                        </Link>
                        <Link href="https://t.me" target="_blank" rel="noopener noreferrer">
                            <Github className="hover:text-primary transition hover:scale-110" />
                        </Link>
                        <Link href="https://wa.me" target="_blank" rel="noopener noreferrer">
                            <MessageCircleMore className="hover:text-primary transition hover:scale-110" />
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Footer
