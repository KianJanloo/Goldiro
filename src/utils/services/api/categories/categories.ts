import { Ear, Fingerprint, PersonStanding, Watch } from "lucide-react";

const categories = [
    { title: " گوشواره ", icon: Ear },
    { title: " گردنبند ", icon: PersonStanding },
    { title: " ساعت ", Watch },
    { title: " انگشتر ", icon: Fingerprint }
]

export const getCategories = async () => {
    return categories;
} 