import { Coins, Diamond, Ear, Eye, Fingerprint, PersonStandingIcon, Scale, Watch } from "lucide-react";

const categories = [
    { title: "گوشواره", icon: Ear },
    { title: "پیرسینگ", icon: Eye },
    { title: "گردنبند", icon: Diamond },    
    { title: "ساعت", icon: Watch },
    { title: "پابند", icon: Diamond },  
    { title: "انگشتر", icon: Fingerprint },     
    { title: "دستبند", icon: Diamond },
    { title: "نیم‌ست", icon: Diamond },    
    { title: "سرویس", icon: Scale },    
    { title: "بنگل", icon: Diamond },   
    { title: "بچه‌گانه", icon: PersonStandingIcon },
    { title: "شمش", icon: Coins },
]


export const getCategories = async () => {
    return categories;
} 