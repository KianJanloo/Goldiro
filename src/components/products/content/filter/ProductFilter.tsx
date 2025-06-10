import { BlurFade } from "@/components/ui/blur-fade"
import FilterCommonProduct from "./FilterCommonProduct"

const ProductFilter = () => {

    return (
        <BlurFade initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className='w-3/12 max-xl:hidden bg-secondary h-fit rounded-2xl'>
            <FilterCommonProduct />
        </BlurFade>
    )
}

export default ProductFilter
