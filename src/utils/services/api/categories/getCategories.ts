import { 
    Ear, 
    Eye, 
    Heart, 
    Watch, 
    Footprints, 
    Circle, 
    Hand,  
    Layers, 
    CircleDot, 
    Baby, 
    BarChart, 
    Gem
} from 'lucide-react';

const categories = [
    { label: "گوشواره", value: "earrings", icon: Ear },
    { label: "پیرسینگ", value: "piercing", icon: Eye },
    { label: "گردنبند", value: "necklace", icon: Heart },    
    { label: "ساعت", value: "watch", icon: Watch },
    { label: "پابند", value: "anklet", icon: Footprints },  
    { label: "انگشتر", value: "ring", icon: Circle },     
    { label: "دستبند", value: "bracelet", icon: Hand },
    { label: "نیم‌ست", value: "set", icon: Gem },    
    { label: "سرویس", value: "service", icon: Layers },    
    { label: "بنگل", value: "bangle", icon: CircleDot },   
    { label: "بچه‌گانه", value: "kids", icon: Baby },
    { label: "شمش", value: "ingot", icon: BarChart },
]

export const getCategories = async () => {
    return categories;
} 