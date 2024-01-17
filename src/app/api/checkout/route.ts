import { ProductProps } from '@/types'
import {NextRequest,NextResponse} from 'next/server'
import Stripe from 'stripe'

export const POST = async(request:NextRequest)=>{
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

    try {

        const reqBody = await request.json();
        const {purchases,email} = await reqBody;

       const orders = await purchases.map((purchase:ProductProps)=>({
            quantity:purchase.quantity,
            price_data:{
                currency:'usd',
                unit_amount:purchase.price *100,
                product_data:{
                    name:purchase.title,
                    description:purchase.description,
                    images:[purchase.image]
                },
            },
       }));
                
       
       const session = await stripe.checkout.sessions.create({
            payment_method_types:['card'],
            line_items:orders,
            mode:'payment',
            success_url:`${process.env.NEXTAUTH_URL}success`,
            cancel_url:`${process.env.NEXTAUTH_URL}`,
            metadata:{email},       
       });

       return NextResponse.json({
            message:'Process is complete',
            success:true,
            id:session.id
       })
        
    } catch (error:any) {
        return NextResponse.json({error:error?.message},{status:500})
    }
}