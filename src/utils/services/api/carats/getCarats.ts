import { ICarats } from "@/types/carats-type/carats-type"

const carats = [
    { label: " 24 عیار ", value: 24 },
    { label: " 22 عیار ", value: 22 },
    { label: " 21 عیار ", value: 21 },
    { label: " 18 عیار ", value: 18 },
    { label: " 14 عیار ", value: 14 },
    { label: " 10 عیار ", value: 10 },
    { label: " 9 عیار ", value: 9 },
    { label: " 8 عیار ", value: 8 }
]

export const getCarats = async () => {
    return carats as ICarats[]
}