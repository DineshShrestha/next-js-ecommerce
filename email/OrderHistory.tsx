import {Body, Container, Head, Heading,  Html, Preview, Tailwind} from "@react-email/components"
import { Hr } from "@react-email/components"
import {OrderInformation} from "./components/OrderInformation"
import React from "react"
type OrderHistoryEmailProps ={
    orders:{
        id: string
        createdAt: Date
        pricePaidInCents: number
        downloadVerificationId: string
        product: {
            name: string,
            imagePath: string
            description: string
        }
    }[]
}
OrderHistoryEmail.PreviewProps = {
    orders: [
                {
                id: crypto.randomUUID(),
                createdAt: new Date(),
                pricePaidInCents: 10000,
                downloadVerificationId: crypto.randomUUID(),
                product: {
                    name: "Product name",
                    description: "hello this is a page", 
                    imagePath: "/products/b37bec23-a7fb-4bb7-a51e-58bef4c126ad-helpdesk.png"},
                },
                {
                    id: crypto.randomUUID(),
                    createdAt: new Date(),
                    pricePaidInCents: 20000,
                    downloadVerificationId: crypto.randomUUID(),
                    product: {
                        name: "Product name 2",
                        description: "Some other description", 
                        imagePath: "/products/b37bec23-a7fb-4bb7-a51e-58bef4c126ad-helpdesk.png"},
                    }
            ]
    
} satisfies OrderHistoryEmailProps
export default function OrderHistoryEmail({orders}: OrderHistoryEmailProps){
    return (
        <Html>
            <Preview>
                Order History and Downloads
            </Preview>
            <Tailwind>
                <Head/>
                <Body className="font-sans bg-white">
                    <Container className="max-w-xl">
                        <Heading>Order History </Heading>
                        {orders.map((order, index) =>(
                            <React.Fragment key={order.id}>
                                <OrderInformation 
                                key={order.id}
                                order={order} product={order.product} downloadVerificationId={order.downloadVerificationId}/>
                                {index < orders.length -1  && <Hr/>}
                            </React.Fragment>
                        ))}
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}