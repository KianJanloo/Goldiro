import { Ear, Eye, Fingerprint, PersonStanding, Shell, Watch } from "lucide-react";

const categories = [
    { title: " گوشواره ", icon: Ear },
    { title: " پیرسینگ ", icon: Eye },
    { title: " گردنبند ", icon: PersonStanding },
    { title: " ساعت ", icon: Watch },
    { title: " پابند ", icon: Shell },
    { title: " انگشتر ", icon: Fingerprint }
]

export const getCategories = async () => {
    return categories;
} 