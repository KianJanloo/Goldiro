import { z } from "zod";

export const forgetValidation = z.object({
    email: z.string({ required_error: " لطفا ایمیل خود را وارد کنید " }).min(1, " لطفا ایمیل خود را وارد کنید ").email(" ایمیل نا معتبر است "),
})