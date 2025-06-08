import { z } from "zod";

export const registerValidation = z.object({
    firstName:  z.string({ required_error: " نام خود را وارد کنید " }).min(1, " نام خود را وارد کنید "),
    lastName:  z.string({ required_error: " نام خانوادگی خود را وارد کنید " }).min(1, " نام خانوادگی خود را وارد کنید "),
    email: z.string({ required_error: " لطفا ایمیل خود را وارد کنید " }).min(1, " لطفا ایمیل خود را وارد کنید ").email(" ایمیل نا معتبر است "),
    password: z.string({ required_error: " لطفا رمز عبور خود را وارد کنید " }).min(1, " لطفا رمز عبور خود را وارد کنید ")
})