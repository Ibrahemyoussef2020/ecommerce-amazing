'use client'
import { ProductProps, SelectorStateProps } from "@/types"
import { useDispatch, useSelector } from "react-redux"
import Image from 'next/image'
import { X } from "lucide-react"
import toast from "react-hot-toast"
import { removeFromWishList } from "@/redux/slices"
import Link from "next/link"

const Wishlist = () => {
  const {favoritesData} = useSelector((state:SelectorStateProps| any)=> state.combine.favorites)
  const dispatch = useDispatch()
  console.log(favoritesData);
  
  return (
    <div className="flex gap-4 flex-wrap justify-around py-6">
      {
         favoritesData?.map((favorite:ProductProps)=> {
         return <article className="relative bg-white p-4 max-sm:w-full min-w-[300px] max-w-[320px] group border-[1px] border-zinc-200 hover:border-zinc-500 duration-300 hover:shadow-xl overflow-hidden"
            key={favorite._id}>
            <X
              onClick={() => {
                dispatch(removeFromWishList(favorite?._id)),
                  toast.success(
                    `${favorite.title} is removed from Wishlist!`
                  );
              }}
              className="w-4 h-4 hover:text-red-600 cursor-pointer duration-200"
            />
              <Image
                src={favorite?.image}
                alt="proudct image"
                width={280}
                height={300}
                className="object-contain block mx-auto"
              />
              <p className="text-base font-medium text-black pl-4">
                {favorite?.title}
              </p>
              <p className="p-4">
                {favorite?.description.slice(0,50)}
              </p>
              <Link
                className="uppercase font-semibold pl-4 hover:text-designColor duration-300"
                href={{pathname:`/${favorite?._id}`, query:{_id:favorite._id}}}
              >
                More Info
              </Link>
          </article>
        })
      }
    </div>
  )
}

export default Wishlist