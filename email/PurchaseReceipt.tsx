import {Body, Container, Head, Heading, Html, Preview, Tailwind} from "@react-email/components"
import {OrderInformation} from "./components/OrderInformation"
type PurchaseReceiptEmailProps ={
    product: {
        name: string,
        imagePath: string
        description: string
    }
    order: {id: string
        createdAt: Date
        pricePaidInCents: number
    }
    downloadVerificationId: string
}
PurchaseReciptEmail.PreviewProps = {
    product: {
        name: "Product name",
        description: "hello this is a page", 
        imagePath: "/products/b37bec23-a7fb-4bb7-a51e-58bef4c126ad-helpdesk.png"},
    order: {
        id: crypto.randomUUID(),
        createdAt: new Date(),
        pricePaidInCents: 10000
    },
    downloadVerificationId: crypto.randomUUID()
} satisfies PurchaseReceiptEmailProps
export default function PurchaseReciptEmail({product, order, downloadVerificationId}: PurchaseReceiptEmailProps){
    return (
        <Html>
            <Preview>
                Download {product.name} and view receipts
            </Preview>
            <Tailwind>
                <Head/>
                <Body className="font-sans bg-white">
                    <Container className="max-w-xl">
                        <Heading>Purchase Receipts</Heading>
                        <OrderInformation order={order} product={product} downloadVerificationId={downloadVerificationId}/>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}