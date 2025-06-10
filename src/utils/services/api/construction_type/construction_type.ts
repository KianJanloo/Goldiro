import { IConstructionType } from "@/types/construction-type/contrcution-type"

const constructionTypes = [
    { label: " دست ساز ", value: "handmade" },
    { label: " ماشینی ", value: "mechanical" }
]

export const getConstructionTypes = async () => {
    return constructionTypes as IConstructionType[]
}