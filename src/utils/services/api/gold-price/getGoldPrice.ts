import { GOLD_PURITY } from "@/constants/gold-measurements"

interface IGoldPrice {
    price: number
    last_updated: string
}

export const getTodayGoldPrice = async (): Promise<IGoldPrice> => {
    return {
        price: 2500000,
        last_updated: new Date().toISOString()
    }
}

export const calculateGoldPrice = (weight: number, carat: number): number => {
    const basePrice = 2500000
    const purity = GOLD_PURITY[`K${carat}` as keyof typeof GOLD_PURITY]
    if (!purity) return 0

    const pricePerGram = (basePrice * purity.percentage) / 100
    return Math.round(pricePerGram * weight)
}

export const calculateFinalPrice = (goldPrice: number, profitPercentage: number = 10): number => {
    const profit = (goldPrice * profitPercentage) / 100
    return Math.round(goldPrice + profit)
} 