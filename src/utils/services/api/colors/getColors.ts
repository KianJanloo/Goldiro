import { IColors } from "@/types/colors-type/colors-type"

const colors = [
    { label: "طلای زرد", value: "#F8C600" },
    { label: "طلای سیاه", value: "#000000" },
    { label: "طلای سفید", value: "#ffffff" },
    { label: "طلای رزگلد", value: "#f1005d" },
]

export const getColors = async () => {
    return colors as IColors[]
}