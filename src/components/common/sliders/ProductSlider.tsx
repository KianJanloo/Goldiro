import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ProductCard from "../cards/ProductCard"
import { FC } from "react"
import { IProductSlider } from "@/types/slider-type/slider-type"

const ProductSlider: FC<IProductSlider> = ({ discount }) => {
    return (
        <Carousel className="w-full md:max-w-[90%] max-w-[80%]" opts={{ align: "start", direction: "rtl" }} >
            <CarouselContent>
                {Array.from({ length: 6 }).map((_, index) => (
                    <CarouselItem key={index} className="md:pl-8 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                        <ProductCard discount={discount} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
        </Carousel>
    )
}

export default ProductSlider