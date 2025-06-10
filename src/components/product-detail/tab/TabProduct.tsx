import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import InformationTab from './information/InformationTab'
import CommentsTab from './comments/CommentsTab'

const TabProduct = () => {
    return (
        <Tabs defaultValue="information" className="w-7/12" dir='rtl'>
            <TabsList className='bg-secondary w-full rounded-xl'>
                <TabsTrigger 
                    value="information"
                    className="data-[state=active]:bg-gold data-[state=active]:text-gold-foreground transition-all duration-300 cursor-pointer"
                >
                    اطلاعات محصول
                </TabsTrigger>
                <TabsTrigger 
                    value="comments"
                    className="data-[state=active]:bg-gold data-[state=active]:text-gold-foreground transition-all duration-300 cursor-pointer"
                >
                    نظرات
                </TabsTrigger>
            </TabsList>
            <TabsContent value="information" className="mt-6">
                <InformationTab />
            </TabsContent>
            <TabsContent value="comments" className="mt-6">
                <CommentsTab />
            </TabsContent>
        </Tabs>
    )
}

export default TabProduct
