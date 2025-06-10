import { IWeight } from "@/types/weight-type/weight-type"

export const weights = [
    { label: "کمتر از 1 گرم", value: "under_1g", min: 0, max: 1 },
    { label: "1 تا 5 گرم", value: "1g_to_5g", min: 1, max: 5 },
    { label: "5 تا 10 گرم", value: "5g_to_10g", min: 5, max: 10 },
    { label: "10 تا 20 گرم", value: "10g_to_20g", min: 10, max: 20 },
    { label: "20 تا 50 گرم", value: "20g_to_50g", min: 20, max: 50 },
    { label: "50 تا 100 گرم", value: "50g_to_100g", min: 50, max: 100 },
    { label: "بیشتر از 100 گرم", value: "above_100g", min: 100, max: null }
]

export const getWeights = async () => {
    return weights as IWeight[]
}
