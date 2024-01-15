import React from 'react'
import Container from '../Container'
import Link from 'next/link';
import { PcCase, ScanFace, Smartphone, Watch } from "lucide-react";
import { Products } from '..';
import { fetchProducts } from '@/apis';

const Shopping = async () => {
    const products = await fetchProducts('');

    const items = products

  return (
    <section className='mt-[700px] mb-60'>
        <Container>
            <div className="flex flex-col gap-2 items-center">
            <h2 className="text-3xl font-semibold mt-3 mb-2">Choose a category</h2>
            <p className="text-lg text-center">
                Explore dozens of customized layouts made by our brilliant
                designers.
            </p>
            <div className="w-full text-zinc-500 flex  flex-col sm:flex-row gap-x-3 gap-y-6 justify-between  md:gap-6 mt-5">
                <article className='flex gap-3 flex-1 flex-grow min-w-[45%] sm:min-w-[23%] justify-around'>
                    <div className=' relative'>
                        <Link
                        href={{pathname:'/showResult/phone'}} 
                        className="flex gap-2 hover:text-black cursor-pointer duration-200"
                        >
                        <Smartphone />
                        <p>Phone</p>
                        </Link> 
                        <div className=" absolute -left-2 top-0 h-7 w-[3px] bg-designColor inline-flex" />          
                    </div>
                    <div className=' relative'>
                        <Link
                        href={{pathname:'/showResult/phone case'}}    
                        className="flex items-center gap-2 hover:text-black cursor-pointer duration-200"
                        >
                        <PcCase />
                        <p>Phone Case</p>
                        </Link>
                        <div className=" absolute -left-2 top-0 h-7 w-[3px] bg-designColor inline-flex" />
                    </div>
                </article>

                <article className='flex gap-3 flex-1 min-w-[45%] sm:min-w-[23%] justify-around'>
                    <div className='relative'>
                        <Link
                        href={{pathname:'/showResult/watch'}} 
                        className="flex items-center gap-2 hover:text-black cursor-pointer duration-200"
                        >
                        <Watch />
                        <p>Watches</p>
                        </Link>
                        <div className=" absolute -left-2 top-0 h-7 w-[3px] bg-designColor inline-flex" />
                    </div>

                    <div className=' relative'>
                        <Link 
                        href={{pathname:'/showResult/accessories'}}
                        className="flex items-center gap-2 hover:text-black cursor-pointer duration-200"
                        >
                        <ScanFace />
                        <p>Accessories</p>
                        </Link>
                        <div className=" absolute -left-2 top-0 h-7 w-[3px] bg-designColor inline-flex" />
                    </div>
                </article>
            </div>
            </div>
            <Products products={products} />
        </Container>
    </section>
  )
}

export default Shopping