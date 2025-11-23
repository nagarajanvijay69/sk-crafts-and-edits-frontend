'use client'

import { useSelector } from "react-redux"
import { RootState } from "../store/Redux-store";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Products = () => {

  const [search, setSearch] = useState('');
  let temp = useSelector((state: RootState) => state.products.products);
  let products = temp.filter((item) => item.name.toLowerCase().includes(search.toLocaleLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase()));

  const router = useRouter();

  const route = (id: String) => {
    router.push(`/product/${id}`)
  }


  return <>
    <div className="products w-[95%] md:w-[97%] my-5 mx-auto">
      <div className="search flex justify-center gap-4">
        <input type="search" value={search} className="border-2 border-gray-400 rounded w-90 h-10 focus:outline-none px-4"
          onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => {
            // console.log(e.key)
          }} />
        <button className="bg-gray-600 text-white cursor-pointer w-25 rounded-xl">Search</button>
      </div>
      <div className="items my-5">
        <span className="text-xl font-bold">Products</span>

        <div className="product-list my-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">

          {products[0] ?
            products.map((item, index) => (
              <div key={index} onClick={()=> route(item._id)} className="border-2 border-gray-300 rounded-md md:px-4 px-3 py-2 bg-white">
                <div className="group cursor-pointer flex items-center justify-center px-2">
                  <img onClick={() => router.push(`/${index}`)} className="rounded group-hover:scale-105 transition h-25 w-25 lg:h-35 lg:w-35 mt-5 mb-3 wrap" src={`${item.image[0]}`} />
                </div>
                <div className="text-gray-600 text-sm">
                  <p>{item.category}</p>
                  <p className="text-gray-800 font-medium text-lg truncate w-full">{item.name}</p>
                  <div className="flex items-end justify-between mt-3">
                    <p className="md:text-xl text-base font-medium text-gray-800">
                      <>
                        {item.offerPrice}
                      </>
                      <span className="text-gray-500 md:text-sm text-xs line-through mx-0.5">
                        <> {item.price} </>
                      </span>
                    </p>
                    <div className="text-Pink-500">
                      {item.link &&
                        <button className="bg-gray-100 border border-gray-500 md:w-[80px] w-[64px] h-[34px] rounded text-gray-800 font-medium"  >
                          <a href={`${item.link}`}>Buy Now</a>
                        </button>
                      }
                    </div>
                  </div>
                </div>
              </div>
            ))
            :
            <p>No Products found</p>
          }

        </div>
      </div>
    </div>
  </>
}

export default Products