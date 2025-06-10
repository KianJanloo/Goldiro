import CommonButton from "@/components/common/buttons/CommonButton"
import {
    Dialog,
    DialogContent,

    DialogTrigger,
} from "@/components/ui/dialog"
import FilterCommonProduct from "../filter/FilterCommonProduct"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Coins } from "lucide-react"

const sorts = [
    { label: " جدید ترین ها ", value: "last_updated", sort: "DESC" },
    { label: " محبوب ترین ها ", value: "rating", sort: "DESC" },
    { label: " ارزان ترین ها ", value: "price", sort: "ASC" },
]

const DialogProduct = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <CommonButton title=' فیلتر و ترتیب ' className='bg-gold text-gold-foreground mx-auto' />
            </DialogTrigger>
            <DialogContent className="border-foreground/20">
                <div>
                    <FilterCommonProduct />
                    <div className='flex flex-col gap-2 w-full text-sm px-4'>
                        <label htmlFor='categories' > ترتیب: </label>
                        <Select>
                            <SelectTrigger id='categories' className="flex w-full gap-2 border-foreground/60 border-2 px-4 py-2 flex-row-reverse">
                                <div className='flex gap-2 flex-row-reverse items-center'>
                                    <Coins size={20} />
                                    <SelectValue placeholder=" ترتیب " />
                                </div>
                            </SelectTrigger>
                            <SelectContent className='bg-secondary border-0 text-foreground'>
                                {sorts.map((sort, idx) => (
                                    <SelectItem value={sort.value} key={idx}> {sort.label} </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default DialogProduct
